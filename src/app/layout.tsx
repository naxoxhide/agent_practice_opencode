import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://triples-into-the-dimension.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "tripleS: Into the Dimension — Historia completa del grupo",
    template: "%s | tripleS: Into the Dimension",
  },
  description:
    "Linea de tiempo interactiva con la historia de tripleS desde su debut en 2022 hasta hoy: MVs, sub-unidades, integrantes y datos curiosos.",
  openGraph: {
    title: "tripleS: Into the Dimension",
    description:
      "La historia completa de tripleS en una linea de tiempo: MVs, sub-unidades y datos curiosos.",
    url: SITE_URL,
    siteName: "tripleS: Into the Dimension",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "tripleS",
  genre: "K-pop",
  foundingDate: "2022-02-18",
  foundingLocation: {
    "@type": "Place",
    name: "Seul, Corea del Sur",
  },
  url: "https://www.triplescosmos.com/",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${pixelFont.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
