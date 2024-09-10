//week1/project/ecommerce/src/components/Button.jsx
import React from 'react';

export const Button = ({label, isSelected, onClick}) => {
  return (
    <button
        onClick={onClick}
        className={isSelected ? 'active' : ''}
    >
        {label}
    </button>
  );
};