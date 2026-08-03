import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

function getDefaultTheme(): Theme {
  return (
    (localStorage.getItem('theme') as Theme | undefined) ??
    ((window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') as Theme)
  );
}

/** component handles toggling dark / light UI theme */
export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => getDefaultTheme());
  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => prev === "dark" ? 'light' : 'dark');
  }

  const icon = isDarkTheme ? '☀️' : '🌙';
  const visuallyHiddenText = 'Toggle dark theme';

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-pressed={isDarkTheme}>
      <span aria-hidden="true">{icon}</span>
      <span className="visually-hidden">{visuallyHiddenText}</span>
    </button>
  );
};
