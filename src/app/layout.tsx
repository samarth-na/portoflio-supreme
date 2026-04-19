import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WOW – Wij, Oxfam-Wereldwinkels",
  description: "Nieuwsbrief maart/april/mei 2017",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
