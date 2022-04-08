import React, { createContext, useCallback, useContext, useState, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

export interface Theme extends DefaultTheme {
  name: string;
  colors: {
    primary: string,
    secondary: string,
    gray100: string,
    gray200: string,
    gray300: string,
    gray400: string,
    gray900: string,
    body: string, 
    header: string,
  },
  bodyFont: string,
  h1FontSize: string,
  h2FontSize: string,
  h3FontSize: string,
  biggestFontSize: string,
  bigFontSize: string,
  mediumFontSize: string,
  normalFontSize: string,
  smallFontSize: string,  
  smallerFontSize: string,
  iconSize: string,
  fontBold: string,
  fontNormal: string,
  fontMedium: string,
  fontLight: string,
  space_05: string,   
  space_075: string, 
  space_1: string,    
  space_15: string, 
  space_2: string,     
  space_25: string, 
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export default function CustomThemeProvider({ children }:any) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'dark');
      return darkTheme;
    }
    
    localStorage.setItem('theme', 'light');
    return lightTheme;
  });

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light'){
      localStorage.setItem('theme', 'dark');
      setTheme(darkTheme);
    }
    else if (theme.name === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme(lightTheme);
    }
  }, [theme]);

  const values = useMemo(() => ({ toggleTheme, theme }), []);

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}