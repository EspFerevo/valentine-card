// src/components/ui/button.jsx
import React from "react"; // Импорт React для работы с JSX

export function Button({ onClick, children, className }) {
  // Деструктуризация пропсов
  return (
    <button
      onClick={onClick} // Срабатывает при клике
      className={`px-4 py-2 rounded-lg text-white font-semibold ${className}`} // Применяем классы для стилизации
    >
      {children}
    </button>
  );
}
