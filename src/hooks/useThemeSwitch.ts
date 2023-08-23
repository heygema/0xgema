import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return {};
  }

  return { theme, setTheme };
}
