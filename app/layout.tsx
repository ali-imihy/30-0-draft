import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const deadlockFont = localFont({
  src: "./fonts/deadlock.otf",
  variable: "--font-deadlock",
  display: "swap",
});

export const metadata: Metadata = {
  title: "30-0 Draft",
  description: "Build the most broken hero possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={deadlockFont.variable}>
      <body>{children}</body>
    </html>
  );
}