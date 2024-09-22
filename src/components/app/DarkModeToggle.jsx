// src/components/DarkModeToggle.jsx
import React, { useState } from 'react';

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      className="fixed bottom-16 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      onClick={toggleDarkMode}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};
