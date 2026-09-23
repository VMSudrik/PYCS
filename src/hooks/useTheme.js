import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('pycs_theme');
    if (savedTheme) {
      return savedTheme;
    }
    // 2. Default is explicitly light per requirements
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('pycs_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme, setTheme };
};
