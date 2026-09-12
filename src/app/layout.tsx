import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexandreduteau.ca"),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: `${site.name} — ${site.tagline} Software engineer at Midas Labs, co-founder of Nullus, CS student at the University of Calgary.`,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: "https://www.alexandreduteau.ca",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
