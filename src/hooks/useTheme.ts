'use client';
// hooks/useTheme.ts
import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';

type Theme = 'system' | 'light' | 'dark';

const useTheme = (): [Theme, (theme: Theme) => void] => {
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', {
    defaultValue: 'system',
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
