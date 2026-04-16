import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import { ResetPasswordForm } from '../components/Auth';
import { Alert } from '../components/Common';

/**
 * Reset Password Page
 * @returns {JSX.Element}
 */
const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const [isValidLink, setIsValidLink] = useState(true);

  useEffect(() => {
    const resetToken = searchParams.get('token');
    if (!resetToken) {
      setIsValidLink(false);
    } else {
      setToken(resetToken);
    }
  }, [searchParams]);

  const handleSuccess = () => {
    navigate('/login', {
      state: { message: 'Password reset successful. Please login with your new password.' }
    });
  };

  if (!isValidLink) {
    return (
      <AuthLayout>
        <div className="text-center py-8">
          <Alert type="error">
            Invalid or expired reset link. Please request a new one.
          </Alert>
          <a
            href="/forgot-password"
            className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block"
          >
            Request new reset link
          </a>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <ResetPasswordForm token={token} onSuccess={handleSuccess} />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
