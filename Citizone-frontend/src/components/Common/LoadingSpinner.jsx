import React from 'react';

/**
 * Loading Spinner Component
 * @param {Object} props - Component props
 * @param {string} props.size - Spinner size: sm, md, lg
 * @param {string} props.text - Loading text
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const LoadingSpinner = ({ size = 'md', text = 'Loading...', className = '' }) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <svg className={`${sizeMap[size]} animate-spin text-blue-600`} fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
