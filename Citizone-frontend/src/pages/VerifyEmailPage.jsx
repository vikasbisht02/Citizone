import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import { OTPVerificationForm } from '../components/Auth';
import { Alert, Button, Card } from '../components/Common';

/**
 * Verify Email Page
 * User is redirected here after registration to verify their email
 * @returns {JSX.Element}
 */
const VerifyEmailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get email from navigation state
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // Redirect to register if no email was provided
      navigate('/register');
    }
  }, [location, navigate]);

  const handleVerificationSuccess = () => {
    // Redirect to login after successful verification
    navigate('/login', { state: { message: 'Email verified successfully! Please login.' } });
  };

  if (!email) {
    return (
      <AuthLayout title="Verify Email">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Verify Your Email">
      <Card className="bg-blue-50 border border-blue-100 mb-4">
        <p className="text-sm text-blue-800 mb-2">
          <strong>Verification Code Sent:</strong>
        </p>
        <p className="text-sm text-blue-700">
          We've sent a verification code to <strong>{email}</strong>. Please check your inbox and enter the code below.
        </p>
      </Card>

      <OTPVerificationForm email={email} onSuccess={handleVerificationSuccess} />

      <p className="text-center text-gray-600 text-sm mt-4">
        Didn't receive the code?{' '}
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          Resend Code
        </button>
      </p>

      <p className="text-center text-gray-600 text-sm mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
          Login here
        </a>
      </p>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
