import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nader Kojok | CTO & Front-End Developer – Applications Web et Mobile",
  description: "Portfolio de Nader Kojok, CTO et Développeur Front-End. Cofondateur d'Agence Arcane, spécialisé en Flutter, React, Next.js et TypeScript pour des applications web et mobile performantes.",
  keywords: ["CTO", "Front-End Developer", "Flutter Developer", "React Developer", "Next.js", "TypeScript", "Applications web", "Applications mobile", "Agence Arcane", "Nader Kojok"],
  authors: [{ name: "Nader Kojok" }],
  creator: "Nader Kojok",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://naderkojok.com",
    siteName: "Nader Kojok Portfolio",
    title: "Nader Kojok | CTO & Front-End Developer",
    description: "CTO et Développeur Front-End. Cofondateur d'Agence Arcane, spécialisé en Flutter, React, Next.js et TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nader Kojok | CTO & Front-End Developer",
    description: "CTO et Développeur Front-End. Cofondateur d'Agence Arcane, spécialisé en Flutter, React, Next.js et TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
      sizes: "16x16"
    },
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "any"
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider attribute="class">
          <LanguageProvider>
            <Navbar />
            {children}
            <CustomCursor />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
