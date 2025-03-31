const theme = {
  colors: {
    primary: '#000000',
    secondary: '#555555',
    accent: '#222222',
    white: '#FFFFFF',
    black: '#000000',
    
    gray50: '#F9F9F9',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    info: '#2196F3',
    
    text: {
      light: {
        primary: '#000000',
        secondary: '#555555',
        tertiary: '#757575',
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#EEEEEE',
        tertiary: '#BDBDBD',
      },
    },
    
    background: {
      light: '#FFFFFF',
      dark: '#121212',
    },
    
    border: {
      light: '#E0E0E0',
      dark: '#424242',
    },
  },
  
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      xxl: 24,
      xxxl: 32,
    },
    lineHeight: {
      xs: 14,
      sm: 18,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  
  shadows: {
    none: {},
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
  },
};

export default theme;