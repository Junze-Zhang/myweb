import type { Theme } from '../../types';

export const nostalgicTheme: Theme = {
  colors: {
    // 90s nostalgic color palette - bright and playful
    primary: '#ff00ff',        // Hot pink/magenta
    secondary: '#00ffff',      // Cyan 
    background: '#ffffff',     // White background
    text: '#000080',          // Navy blue text
    accent: '#ffff00',        // Bright yellow
    error: '#ff0000',         // Pure red
    
    // Extended palette for nostalgic theme
    surface: '#e0e0e0',       // Light gray - Windows 95 style
    border: '#808080',        // Classic gray border
    muted: '#800080',         // Purple muted text
    success: '#00ff00',       // Bright green
    warning: '#ffa500',       // Orange
  },

  typography: {
    heading: {
      family: '"Comic Sans MS", "Comic Sans", cursive, fantasy',
      weight: 'bold',
      lineHeight: '1.2',
    },
    body: {
      family: '"Comic Sans MS", "Trebuchet MS", sans-serif',
      weight: 'normal',
      size: '1rem',
      lineHeight: '1.4',
    },
    code: {
      family: '"Courier New", "MS Gothic", monospace',
    },
    sizes: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.8rem',
      '3xl': '2.2rem',
      '4xl': '2.8rem',
      '5xl': '3.5rem',
    }
  },

  spacing: {
    xs: '0.2rem',
    sm: '0.4rem',
    md: '0.8rem',
    lg: '1.2rem',
    xl: '1.6rem',
    '2xl': '2.4rem',
    '3xl': '3.2rem',
    '4xl': '4.8rem',
    '5xl': '6.4rem',
  },

  layout: {
    breakpoints: {
      mobile: '768px',
      tablet: '1024px', 
      desktop: '1280px',
    },
    containers: {
      maxWidth: '1000px',
    },
    grid: {
      columns: '12',
      gap: '0.8rem',
    }
  },

  effects: {
    shadows: {
      small: '2px 2px 4px #808080',
      medium: '4px 4px 8px #808080',
      large: '8px 8px 16px #808080',
      xl: '12px 12px 24px #808080',
    },
    borders: {
      radius: {
        sm: '0px',      // Sharp corners for 90s look
        base: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        full: '50px',
      },
      width: {
        thin: '1px',
        base: '2px',
        thick: '4px',
      }
    },
    transitions: {
      fast: '100ms linear',
      medium: '200ms linear', 
      slow: '400ms linear',
    },
    animations: {
      fadeIn: 'fadeIn 0.5s linear',
      slideIn: 'slideInUp 0.6s ease-out',
      bounce: 'bounce 1s infinite',
    }
  }
};