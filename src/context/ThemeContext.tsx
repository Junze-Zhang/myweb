import { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import type { Theme } from '../types';
import { modernTheme } from '../styles/tokens/modern';
import { nostalgicTheme } from '../styles/tokens/nostalgic';

// Theme context interface
interface ThemeContextType {
  currentTheme: string;
  theme: Theme;
  switchTheme: (themeName: string) => void;
  randomTheme: () => void;
  availableThemes: string[];
}

// Available theme registry
const themeRegistry: Record<string, Theme> = {
  modern: modernTheme,
  nostalgic: nostalgicTheme,
  // Future themes will be added here
  // cyberpunk: cyberpunkTheme,
  // geeky: geekyTheme,
  // ugly: uglyTheme,
};

const availableThemes = Object.keys(themeRegistry);

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

// Theme provider component
interface ThemeContextProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
}

export const ThemeContextProvider = ({ 
  children, 
  defaultTheme = 'modern' 
}: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  // Get current theme object
  const theme = themeRegistry[currentTheme] || themeRegistry.modern;

  // Switch to specific theme
  const switchTheme = useCallback((themeName: string) => {
    if (themeRegistry[themeName]) {
      setCurrentTheme(themeName);
    } else {
      console.warn(`Theme "${themeName}" not found. Available themes:`, availableThemes);
    }
  }, []);

  // Random theme selection
  const randomTheme = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const newTheme = availableThemes[randomIndex];
    
    // Ensure we don't select the same theme
    if (newTheme === currentTheme && availableThemes.length > 1) {
      randomTheme(); // Recursively try again
    } else {
      setCurrentTheme(newTheme);
    }
  }, [currentTheme]);

  const contextValue: ThemeContextType = {
    currentTheme,
    theme,
    switchTheme,
    randomTheme,
    availableThemes
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};