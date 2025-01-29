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
  title: "UX/UI Designer Portfolio",
  description: "Professional UX/UI Designer portfolio showcasing creative design solutions and innovative user experiences",
  keywords: ["UX/UI Designer", "Portfolio", "Web Design", "User Experience", "User Interface"],
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "any"
    },
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml"
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon_white.svg",
      rel: "icon"
    },
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon_black.svg",
      rel: "icon"
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
      <body className={`${poppins.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
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
