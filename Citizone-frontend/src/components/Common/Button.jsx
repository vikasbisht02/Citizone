import React from 'react';

/**
 * Button Component
 * @param {Object} props - Component props
 * @param {string} props.children - Button text
 * @param {string} props.variant - Button variant: primary, secondary, danger, success
 * @param {string} props.size - Button size: sm, md, lg
 * @param {boolean} props.disabled - Is disabled
 * @param {boolean} props.isLoading - Is loading
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
