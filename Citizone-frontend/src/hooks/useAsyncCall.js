import { useCallback, useState } from 'react';

/**
 * Custom hook for API calls
 * @param {Function} asyncFunction - Async function to call
 * @returns {Object} - Response, error, loading state, and execute function
 */
export const useAsyncCall = (asyncFunction) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      setResponse(result);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  return {
    response,
    error,
    isLoading,
    execute,
    reset: () => {
      setResponse(null);
      setError(null);
    },
  };
};
