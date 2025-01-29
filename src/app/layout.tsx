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
  title: "Nader Kojok | UX/UI Designer – Conception d'Interfaces Web et Mobiles",
  description: "Parcourez les projets de Nader Kojok, Designer UX/UI, mettant l'accent sur des solutions créatives et des designs centrés sur l'utilisateur pour des produits digitaux performants.",
  keywords: ["Designer UX/UI", "Expérience utilisateur impactante", "Design qui convertit", "Interfaces engageantes", "Portfolio UX/UI", "Design web & mobile", "Conception produit digital"],
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
