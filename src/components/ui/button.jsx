// src/components/ui/button.jsx
import React from 'react';

export function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-white font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
