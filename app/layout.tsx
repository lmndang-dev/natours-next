import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natours | Exciting tours for adventurous people",
  description: "Exciting tours for adventurous people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
