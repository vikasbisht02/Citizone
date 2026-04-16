import React from 'react';

/**
 * Input Component
 * @param {Object} props - Component props
 * @param {string} props.type - Input type: text, email, password, number, etc.
 * @param {string} props.name - Input name
 * @param {string} props.label - Input label
 * @param {string} props.value - Input value
 * @param {string} props.placeholder - Input placeholder
 * @param {boolean} props.disabled - Is disabled
 * @param {boolean} props.required - Is required
 * @param {string} props.error - Error message
 * @param {string} props.helperText - Helper text
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onBlur - Blur handler
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const Input = React.forwardRef(({
  type = 'text',
  name,
  label,
  value,
  placeholder,
  disabled = false,
  required = false,
  error = '',
  helperText = '',
  onChange,
  onBlur,
  className = '',
  ...rest
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`}
        {...rest}
      />
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
