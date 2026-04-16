import { useDispatch, useSelector } from 'react-redux';

/**
 * Custom hook to use auth state
 * @returns {{user: Object|null, token: string|null, isLoading: boolean, error: string|null, isAuthenticated: boolean}} - Auth state
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  return {
    user: auth.user,
    token: auth.token,
    isLoading: auth.isLoading,
    error: auth.error,
    isAuthenticated: auth.isAuthenticated,
    dispatch,
  };
};

/**
 * Custom hook to check if user is authenticated
 * @returns {boolean} - Is authenticated
 */
export const useIsAuthenticated = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return isAuthenticated;
};

/**
 * Custom hook to get current user
 * @returns {Object|null} - Current user or null
 */
export const useCurrentUser = () => {
  const { user } = useSelector(state => state.auth);
  return user;
};
