import { createContext, useContext, useEffect, useState, ReactNode } from 'react';



// theme context for managing light and dark mode with localStorage persistence
// maintain user preference across browser sessions


type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  
  // initialize theme from localStorage with light mode fallback

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
    });



  // apply theme to DOM and persist changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
     }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook for accessing theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
   if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
