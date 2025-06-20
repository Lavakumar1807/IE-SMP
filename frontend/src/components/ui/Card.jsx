import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  hoverEffect = true 
}) => {
  return (
    <div 
      className={`card ${className} ${hoverEffect ? 'hover-effect' : ''}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;