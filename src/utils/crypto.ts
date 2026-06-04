export interface BookingPayload {
  name: string;
  phone: string;
  locations: string[];
  size: string;
  time: string;
  message: string;
  timestamp: number; // For security expiration check
}

// Client-side encryption key for securing data in transit (query strings)
const KEY_SALT = "BBKMiniStorageSecuredTransitKey2026";

/**
 * Encrypt booking payload to URL-safe secure base64 string
 */
export function encryptPayload(data: BookingPayload): string {
  try {
    const jsonStr = JSON.stringify(data);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(jsonStr);
    
    // XOR Encryption
    const xorBytes = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      const keyChar = KEY_SALT.charCodeAt(i % KEY_SALT.length);
      xorBytes[i] = bytes[i] ^ keyChar;
    }
    
    // Convert bytes to binary string
    let binString = "";
    for (let i = 0; i < xorBytes.length; i++) {
      binString += String.fromCharCode(xorBytes[i]);
    }
    
    const base64 = btoa(binString);
    // Convert to URL-safe base64
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  } catch (error) {
    console.error("Payload encryption error:", error);
    return "";
  }
}

/**
 * Decrypt URL-safe base64 string back into BookingPayload
 */
export function decryptPayload(encoded: string): BookingPayload | null {
  try {
    // Restore standard base64 characters and padding
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    
    const binString = atob(base64);
    const bytes = new Uint8Array(binString.length);
    for (let i = 0; i < binString.length; i++) {
      bytes[i] = binString.charCodeAt(i);
    }
    
    // Decrypt (XOR again)
    const decryptedBytes = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      const keyChar = KEY_SALT.charCodeAt(i % KEY_SALT.length);
      decryptedBytes[i] = bytes[i] ^ keyChar;
    }
    
    const decoder = new TextDecoder();
    const jsonStr = decoder.decode(decryptedBytes);
    const data = JSON.parse(jsonStr) as BookingPayload;
    
    // Prevent replay attacks by checking if link is older than 30 minutes
    const now = Date.now();
    const ageInMinutes = (now - data.timestamp) / 1000 / 60;
    if (ageInMinutes > 30) {
      console.warn("Payload expired:", ageInMinutes, "minutes old");
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("Payload decryption error:", error);
    return null;
  }
}
