import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/AOSProvider";
import { personalInfo, getAssetUrl } from "./data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nizarnurfalah.github.io/portofolioAnnisa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.fullName} | Sarjana Terapan Kebidanan UNPAD`,
    template: `%s | ${personalInfo.fullName}`,
  },
  description:
    "Portofolio profesional Annisa Haura Salshabira, lulusan Sarjana Terapan Kebidanan Fakultas Kedokteran Universitas Padjadjaran. Berpengalaman di RSUD Syamsudin, Puskesmas Padasuka, RSHS, dan Kebidanan Komunitas.",
  keywords: [
    "Annisa Haura Salshabira",
    "Bidan",
    "Kebidanan UNPAD",
    "Sarjana Terapan Kebidanan",
    "Fakultas Kedokteran UNPAD",
    "Kesehatan Ibu dan Anak",
    "Bidan Bandung",
    "Antenatal Care",
    "Asuhan Persalinan Normal",
    "Buku Saku MPASI",
  ],
  authors: [{ name: personalInfo.fullName, url: siteUrl }],
  creator: personalInfo.fullName,
  publisher: personalInfo.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: getAssetUrl("/favicon.svg"), type: "image/svg+xml" },
      { url: getAssetUrl("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: getAssetUrl("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: getAssetUrl("/apple-touch-icon.png"), sizes: "180x180" }],
  },
  manifest: getAssetUrl("/site.webmanifest"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: `${personalInfo.fullName} Portfolio`,
    title: `${personalInfo.fullName} | Sarjana Terapan Kebidanan UNPAD`,
    description:
      "Portofolio profesional Annisa Haura Salshabira, lulusan Sarjana Terapan Kebidanan Fakultas Kedokteran Universitas Padjadjaran.",
    images: [
      {
        url: "/profile/annisa-hero.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.fullName} - Bidan Terapan UNPAD`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} | Sarjana Terapan Kebidanan UNPAD`,
    description:
      "Portofolio profesional Annisa Haura Salshabira, lulusan Sarjana Terapan Kebidanan FK UNPAD.",
    images: ["/profile/annisa-hero.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans overflow-x-hidden bg-[#fafaf9] text-stone-900`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
