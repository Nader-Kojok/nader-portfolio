"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemesProps } from "next-themes";
import React from "react";

/**
 * Extend the NextThemesProps to allow a custom `disableTransition` prop.
 * We'll map that to NextThemesProvider's `disableTransitionOnChange`.
 */
interface Props extends Omit<NextThemesProps, "disableTransitionOnChange"> {
  /** If true, disable transitions when switching themes. */
  disableTransition?: boolean;
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  disableTransition,
  ...rest
}: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem
      // Map our custom `disableTransition` to next-themes' `disableTransitionOnChange`
      disableTransitionOnChange={disableTransition}
      {...rest}
    >
      {children}
    </NextThemesProvider>
  );
}
