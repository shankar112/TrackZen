// assets/js/storage.js
const NS = "trackzen";

export function setStore(key, value) {
  try {
    localStorage.setItem(`${NS}:${key}`, JSON.stringify(value));
  } catch (e) {
    console.warn("Storage set failed", e);
  }
}

export function getStore(key, fallback = null) {
  try {
    const raw = localStorage.getItem(`${NS}:${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn("Storage get failed", e);
    return fallback;
  }
}

export function delStore(key) {
  try {
    localStorage.removeItem(`${NS}:${key}`);
  } catch (e) {
    console.warn("Storage del failed", e);
  }
}
