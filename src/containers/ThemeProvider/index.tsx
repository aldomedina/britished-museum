import React, { useLayoutEffect } from "react";
import theme from "./theme";

type ThemeConfig = {
  [key: string]: string;
};

function useTheme(theme: ThemeConfig) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}

const ThemeProvider: React.FC = ({ children }) => {
  useTheme(theme);

  return <>{children}</>;
};

export default ThemeProvider;
