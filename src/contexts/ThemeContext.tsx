import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export default function CustomThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'dark');
      return darkTheme;
    }

    localStorage.setItem('theme', 'light');
    return lightTheme;
  });

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme(darkTheme);
    } else if (theme.name === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme(lightTheme);
    }
  }, [theme]);

  const values = useMemo(() => ({ toggleTheme, theme }), []);

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
