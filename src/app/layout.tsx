import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Alexandre Duteau",
  description: "Alexandre Duteau's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
