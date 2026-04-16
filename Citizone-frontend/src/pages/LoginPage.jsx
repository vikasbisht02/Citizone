import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import { EmailLoginForm, MobileAuthForm, OTPVerificationForm } from '../components/Auth';

/**
 * Login Page with Email and Mobile Auth Options
 * @returns {JSX.Element}
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'mobile'
  const [showOTP, setShowOTP] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const { isAuthenticated, role } = useSelector(state => state.auth);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      if (role === 'superadmin' || role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard/user');
      }
    }
  }, [isAuthenticated, role, navigate]);

  const handleLoginSuccess = () => {
    if (role === 'superadmin' || role === 'admin') {
      navigate('/dashboard/admin');
    } else {
      navigate('/dashboard/user');
    }
  };

  const handleOTPSent = (number) => {
    setMobileNumber(number);
    setShowOTP(true);
  };

  const handleOTPSuccess = () => {
    handleLoginSuccess();
  };

  const handleResendOTP = () => {
    // Could trigger resend API call here
  };

  return (
    <AuthLayout title="Login to Citizone">
      {showOTP && authMethod === 'mobile' ? (
        <OTPVerificationForm
          identifier={mobileNumber}
          type="mobile"
          onSuccess={handleOTPSuccess}
          onResend={handleResendOTP}
        />
      ) : authMethod === 'email' ? (
        <EmailLoginForm
          onSuccess={handleLoginSuccess}
          onToggleMobileAuth={() => {
            setAuthMethod('mobile');
            setShowOTP(false);
          }}
        />
      ) : (
        <MobileAuthForm
          onOTPSent={handleOTPSent}
          onToggleEmailAuth={() => {
            setAuthMethod('email');
            setShowOTP(false);
          }}
        />
      )}
    </AuthLayout>
  );
};

export default LoginPage;
