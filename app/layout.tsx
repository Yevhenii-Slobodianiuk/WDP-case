import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WDP",
  description: "Your first dance, made effortless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
