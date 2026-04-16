/**
 * Handle API errors and extract error message
 * @param {any} error - Error object
 * @returns {string} - Error message
 */
export const handleApiError = (error) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }
  if (error?.message) {
    return error.message;
  }
  return 'Something went wrong. Please try again.';
};

/**
 * Check HTTP status code
 * @param {number} status - HTTP status code
 * @returns {boolean} - Is success
 */
export const isSuccessStatus = (status) => {
  return status >= 200 && status < 300;
};

/**
 * Check if error is network error
 * @param {any} error - Error object
 * @returns {boolean} - Is network error
 */
export const isNetworkError = (error) => {
  return !error?.response || error?.code === 'ECONNABORTED';
};

/**
 * Retry failed request
 * @param {Function} fn - Request function
 * @param {number} retries - Number of retries
 * @param {number} delay - Delay between retries
 * @returns {Promise} - Result
 */
export const retryRequest = async (fn, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
};

/**
 * Create form data from object
 * @param {Object} data - Data object
 * @returns {FormData} - FormData object
 */
export const createFormData = (data) => {
  const formData = new FormData();
  
  Object.keys(data).forEach(key => {
    if (data[key] instanceof File || data[key] instanceof Blob) {
      formData.append(key, data[key], data[key].name);
    } else if (Array.isArray(data[key])) {
      data[key].forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
    } else if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  
  return formData;
};
