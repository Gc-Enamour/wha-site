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
    const opts = "; domain=.worldholisticalliance.org; path=/; max-age=31536000; SameSite=Lax; Secure";
    document.cookie = "wha-theme=" + value + opts;
  };

  return [dark, toggle];
}
