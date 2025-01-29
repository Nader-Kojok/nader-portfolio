"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";
import React from "react";

interface ThemeProviderProps extends Omit<NextThemesProviderProps, "disableTransitionOnChange"> {
  /** 
   * @description Disable CSS transitions when switching themes
   * @default false
   */
  disableTransition?: boolean;
  /** @description Child components */
  children: React.ReactNode;
}

/**
 * Custom theme provider with enhanced type safety and transition control
 * @example
 * <ThemeProvider attribute="class" enableSystem disableTransition>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({
  children,
  disableTransition = false,
  ...props
}: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      enableSystem
      disableTransitionOnChange={disableTransition}
    >
      <div data-theme-provider="true" className="contents">
        {children}
      </div>
    </NextThemesProvider>
  );
};