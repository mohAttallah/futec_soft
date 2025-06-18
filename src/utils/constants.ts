export const COLORS = {
  primary: '#1a1a2e',
  secondary: '#16213e',
  accent: '#0f3460',
  white: '#ffffff',
  gray: '#f5f5f5',
  darkGray: '#666666',
  lightGray: '#e0e0e0',
  text: '#333333',
  placeholder: '#999999',
  button: '#1a1a2e',
  buttonText: '#ffffff',
  background: 'rgba(0, 0, 0, 0.3)',
  formBackground: '#ffffff',
  danger: '#e63946',
  success: '#2a9d8f',
} as const;

export const SIZES = {
  padding: 20,
  margin: 16,
  borderRadius: 8,
  fontSize: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;
