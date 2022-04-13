import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray900: string;
      body: string;
      header: string;
    };
    bodyFont: string;
    h1FontSize: string;
    h2FontSize: string;
    h3FontSize: string;
    biggestFontSize: string;
    bigFontSize: string;
    mediumFontSize: string;
    normalFontSize: string;
    smallFontSize: string;
    smallerFontSize: string;
    iconSize: string;
    fontBold: string;
    fontNormal: string;
    fontMedium: string;
    fontLight: string;
    spacing_4: string;
    spacing_8: string;
    spacing_12: string;
    spacing_16: string;
    spacing_20: string;
    spacing_24: string;
    spacing_30: string;
    spacing_40: string;
  }
}

const defaultTheme = {
  bodyFont: 'DM Sans, sans-serif',
  h1FontSize: '1.5rem', // 24px
  h2FontSize: '1.25rem', // 20px
  h3FontSize: '1rem', // 16px
  biggestFontSize: '2rem', // 32px
  bigFontSize: '1.5rem', // 24px
  mediumFontSize: '1.25rem', // 20px
  normalFontSize: '1rem', // 16px
  smallFontSize: '.875rem', // 14px
  smallerFontSize: '.75rem', // 12px
  iconSize: '1.25rem',
  fontBold: '600',
  fontNormal: '400',
  fontMedium: '500',
  fontLight: '300',
  spacing_4: '.25rem', // 4px
  spacing_8: '.5rem', // 8px
  spacing_12: '.75rem', // 12px
  spacing_16: '1rem', // 16px
  spacing_20: '1.25rem', // 20px
  spacing_24: '1.5rem', // 24px
  spacing_30: '1.875rem', // 30px
  spacing_40: '2.5rem', // 40px
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#191847',
    secondary: ' #F5850B',
    gray100: '#F4F3F6',
    gray200: '#E1DEE8',
    gray300: '#C9C5D4',
    gray400: '#666173',
    gray900: '#151516',
    body: '#FFFFFF',
    header: '#FFFFFF',
  },
  ...defaultTheme,
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#191847',
    secondary: ' #F5850B',
    gray100: '#F4F3F6',
    gray200: '#E1DEE8',
    gray300: '#C9C5D4',
    gray400: '#666173',
    gray900: '#151516',
    body: '#FFFFFF',
    header: '#FFFFFF',
  },
  ...defaultTheme,
};
