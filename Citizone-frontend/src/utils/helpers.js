/**
 * Format date to readable format
 * @param {Date|string} date - Date to format
 * @param {string} format - Format type: 'date' | 'time' | 'full'
 * @returns {string} - Formatted date
 */
export const formatDate = (date, format = 'date') => {
  const d = new Date(date);
  
  const dateStr = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d);
  
  const timeStr = new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(d);
  
  if (format === 'date') return dateStr;
  if (format === 'time') return timeStr;
  return `${dateStr} ${timeStr}`;
};

/**
 * Get time difference in words
 * @param {Date|string} date - Date to compare
 * @returns {string} - Time difference string
 */
export const getTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  
  return formatDate(date);
};

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: INR)
 * @returns {string} - Formatted currency
 */
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Truncate string to specific length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated string
 */
export const truncate = (str, length = 50) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

/**
 * Generate random ID
 * @param {number} length - ID length
 * @returns {string} - Random ID
 */
export const generateId = (length = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};
