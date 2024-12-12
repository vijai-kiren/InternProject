// src/utils/apiUtils.js

import CryptoJS from "crypto-js";

export const getDecryptedApiKey = () => {
  // Load encrypted API key and passphrase from environment variables
  const encryptedKey = import.meta.env.VITE_ENCRYPTED_API_KEY;
  const passphrase = import.meta.env.VITE_API_KEY_SECRET;

  if (!encryptedKey || !passphrase) {
    console.error("API Key or Passphrase is missing!");
    return null;
  }

  // Decrypt the API key
  const bytes = CryptoJS.AES.decrypt(encryptedKey, passphrase);
  const decryptedKey = bytes.toString(CryptoJS.enc.Utf8);
  console.log(decryptedKey);

  return decryptedKey;
};
