import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { ThemeContextProps } from '../types';
import { Theme, THEME_CONTEXT_ERROR } from '../constants';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error(THEME_CONTEXT_ERROR);
  return context;
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const currentGradients = {
    background: isDarkMode
      ? 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)'
      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? Theme.DARK : Theme.LIGHT,
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode, currentGradients }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
