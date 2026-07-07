import { useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const value = next ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem('wha-site-theme', value); } catch (_) {}
  };

  return [dark, toggle];
}
