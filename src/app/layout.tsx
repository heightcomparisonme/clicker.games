import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "ClickerGames - Free Cookie Clicker & Idle Games Platform",
  description: "ClickerGames is your gateway to the best free clicker and incremental games! Play Cookie Clicker, idle games, and hundreds of addictive clicking games instantly. No downloads required — just click and play anywhere, on any device!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="dark bg-gray-900 text-white"
        style={{
          colorScheme: 'dark'
        }}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K9MECHLF1K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9MECHLF1K');
          `}
        </Script>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
