import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import { ForgotPasswordForm } from '../components/Auth';

/**
 * Forgot Password Page
 * @returns {JSX.Element}
 */
const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/login', {
      state: { message: 'Check your email for password reset link' }
    });
  };

  return (
    <AuthLayout>
      <ForgotPasswordForm onSuccess={handleSuccess} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
