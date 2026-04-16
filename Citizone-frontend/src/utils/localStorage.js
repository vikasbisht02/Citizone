/**
 * Get item from localStorage with JSON parsing
 * @param {string} key - Local storage key
 * @returns {any} - Stored value or null
 */
export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return null;
  }
};

/**
 * Set item in localStorage with JSON stringification
 * @param {string} key - Local storage key
 * @param {any} value - Value to store
 */
export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting to localStorage:', error);
  }
};

/**
 * Remove item from localStorage
 * @param {string} key - Local storage key
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

/**
 * Clear all localStorage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

/**
 * Check if localStorage is available
 * @returns {boolean} - Is localStorage available
 */
export const isLocalStorageAvailable = () => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};
