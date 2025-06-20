import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false
}) => {
  const buttonClass = `button ${variant} ${className} ${disabled ? 'disabled' : ''}`;
  
  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;