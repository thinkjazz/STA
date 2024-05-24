import React from 'react';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="absolute top-4 right-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌓' : '🌕'}
      </button>
    </div>
  );
};

export default ThemeToggle;
