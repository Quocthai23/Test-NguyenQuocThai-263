import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme/ThemeProvider";
import { WebToaster } from "@/src/components/shares/atoms/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiktok Clone",
  description: "Vertical scroll video feed app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="m-0 p-0 overflow-hidden h-screen w-screen bg-app-bg text-app-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <WebToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
