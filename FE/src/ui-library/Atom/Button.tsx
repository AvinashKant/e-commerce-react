import React from 'react';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  body?: React.ReactNode;
  variant?: 'blue' | 'default';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  id,
  onClick,
  type = 'button',
  ariaLabel,
  body,
  variant = 'default',
  className = '',
}) => {
  // ----- Variant Styles -----
  const variantClasses: Record<string, string> = {
    blue: 'inline-flex items-center justify-center px-4 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300',
    default:
      'inline-flex items-center justify-center px-4 h-9 rounded-xl border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 disabled:bg-gray-100',
  };

  return (
    <button
      id={id}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={`${variantClasses[variant]} ${className}`}
    >
      {/* Render Title */}
      {title && <span className="w-full text-center">{title}</span>}

      {/* Render Body (icons, custom jsx, etc.) */}
      {body}
    </button>
  );
};

export default Button;
