import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

// Color scheme inspired by the provided screenshot
// Primary accent: Crimson #D7263D
// Background (Nights): #02182B
export const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D7263D',
    secondary: '#D7263D',
    background: '#02182B',
    surface: '#0E2433',
    onSurface: '#E6F0F7',
    outline: '#2C3E50',
  },
};


