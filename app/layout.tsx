import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

const geistSans = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-geist-sans",
  subsets: ['latin'],
});

const geistMono = Roboto_Mono({
  weight: ['100', '300', '400', '500', '700'],
  variable: "--font-geist-mono",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "SaifCodes",
  description: "Providing Best Software-Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
