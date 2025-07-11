import type { Theme } from '../../types';

export const modernTheme: Theme = {
  colors: {
    // Professional color palette - clean and contemporary
    primary: '#2563eb',        // Modern blue - trustworthy, professional
    secondary: '#64748b',      // Slate gray - neutral, sophisticated  
    background: '#ffffff',     // Pure white - clean, minimal
    text: '#1e293b',          // Dark slate - excellent readability
    accent: '#0ea5e9',        // Sky blue - highlights and interactions
    error: '#ef4444',         // Modern red - clear error indication
    
    // Extended palette for modern theme
    surface: '#f8fafc',       // Very light gray - card backgrounds
    border: '#e2e8f0',        // Light gray - subtle borders
    muted: '#64748b',         // Muted text - secondary information
    success: '#10b981',       // Modern green - success states
    warning: '#f59e0b',       // Amber - warning states
  },

  typography: {
    heading: {
      family: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      weight: '600',
      lineHeight: '1.2',
    },
    body: {
      family: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      weight: '400',
      size: '1rem',
      lineHeight: '1.6',
    },
    code: {
      family: '"JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px  
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    }
  },

  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },

  layout: {
    breakpoints: {
      mobile: '768px',
      tablet: '1024px', 
      desktop: '1280px',
    },
    containers: {
      maxWidth: '1200px',
    },
    grid: {
      columns: '12',
      gap: '1rem',
    }
  },

  effects: {
    shadows: {
      small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    borders: {
      radius: {
        sm: '0.25rem',   // 4px
        base: '0.375rem', // 6px  
        md: '0.5rem',    // 8px
        lg: '0.75rem',   // 12px
        xl: '1rem',      // 16px
        full: '9999px',  // Full rounded
      },
      width: {
        thin: '1px',
        base: '2px',
        thick: '4px',
      }
    },
    transitions: {
      fast: '150ms ease-in-out',
      medium: '300ms ease-in-out', 
      slow: '500ms ease-in-out',
    },
    animations: {
      fadeIn: 'fadeIn 0.3s ease-in-out',
      slideIn: 'slideInUp 0.4s ease-out',
      bounce: 'bounce 0.6s ease-in-out',
    }
  },

  // Modern theme specific properties
  modern: {
    glassmorphism: {
      background: 'rgba(255, 255, 255, 0.25)',
      backdrop: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
    },
    neumorphism: {
      light: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      dark: 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      subtle: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    }
  }
};