'use client';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      return 'dark';
    }

    if (savedTheme === 'light') {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }

    document.documentElement.removeAttribute('data-theme');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        theme === 'dark'
          ? 'bg-slate-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
          : 'bg-cyan-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
      }`}
      aria-label="Toggle Theme"
    >
      <div
        className={`w-6 h-6 rounded-full transform transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] flex items-center justify-center shadow-md ${
          theme === 'dark'
            ? 'translate-x-8 bg-slate-900 text-yellow-300'
            : 'translate-x-0 bg-yellow-400 text-white'
        }`}
      >
        {theme === 'dark' ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </div>

      {/* Stars decorations for dark mode */}
      <span
        className={`absolute top-2 left-8 text-[8px] text-white transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      >
        ✦
      </span>
      <span
        className={`absolute bottom-2 left-10 text-[6px] text-slate-300 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-70' : 'opacity-0'}`}
      >
        •
      </span>

      {/* Clouds/decorations for light mode */}
      <span
        className={`absolute top-1.5 right-8 text-[10px] text-white transition-opacity duration-300 ${theme === 'light' ? 'opacity-80' : 'opacity-0'}`}
      >
        ☁️
      </span>
    </button>
  );
}
