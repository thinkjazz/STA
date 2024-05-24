import React, { useState, useEffect } from 'react';
import Component from './components/Component';
import ThemeToggle from './components/ThemeToggle';
import Notification from './components/Notification';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [notification, setNotification] = useState({ message: '', isVisible: false });

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const showNotification = (message) => {
    setNotification({ message, isVisible: true });
    setTimeout(() => {
      setNotification({ message: '', isVisible: false });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Component showNotification={showNotification} />
      <Notification message={notification.message} isVisible={notification.isVisible} />
    </div>
  );
}

export default App;