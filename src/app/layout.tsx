import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// Fraunces, variable: optical size for text vs. display, plus the SOFT and WONK
// axes so headings can loosen up without loading a second face.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
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
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body id="top" className="font-sans">{children}</body>
    </html>
  );
}
