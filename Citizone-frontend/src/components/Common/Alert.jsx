import React from 'react';

/**
 * Alert Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Alert message
 * @param {string} props.type - Alert type: success, error, warning, info
 * @param {boolean} props.closable - Is closable
 * @param {Function} props.onClose - Close handler
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const Alert = ({ children, type = 'info', closable = false, onClose, className = '' }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-50 border-l-4 border-green-500 text-green-700',
    error: 'bg-red-50 border-l-4 border-red-500 text-red-700',
    warning: 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700',
    info: 'bg-blue-50 border-l-4 border-blue-500 text-blue-700',
  };

  return (
    <div className={`p-4 rounded ${typeStyles[type]} ${className}`}>
      <div className="flex items-start justify-between">
        <span>{children}</span>
        {closable && (
          <button
            onClick={handleClose}
            className="text-lg font-bold hover:opacity-75 transition-opacity"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
