const defaultTheme = {
  bodyFont: 'DM Sans, sans-serif',
  h1FontSize: '1.5rem',      // 24px
  h2FontSize: '1.25rem',     // 20px
  h3FontSize: '1rem',        // 16px
  biggestFontSize: '2rem',   // 32px
  bigFontSize: '1.5',        // 20px
  mediumFontSize: '1.25',    // 20px
  normalFontSize: '1rem',    // 16px
  smallFontSize: '.875rem',  // 14px
  smallerFontSize: '.75rem', // 12px
  iconSize: '1.25rem',
  fontBold: '600',
  fontNormal: '400',	
  fontMedium: '500',
  fontLight: '300',
  space_8: '.5rem',    // 8px
  space_12: '.75rem',  // 12px
  space_16: '1rem',    // 16px
  space_24: '1.5rem',  // 24px
  space_30: '1.875',   // 30px
  space_40: '2.5rem',  // 40px
}

export const lightTheme = {
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
  ...defaultTheme
}

export const darkTheme = {
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
  ...defaultTheme
}
