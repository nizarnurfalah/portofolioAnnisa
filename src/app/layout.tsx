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
    default: `${personalInfo.fullName} | Portfolio`,
    template: `%s | ${personalInfo.fullName}`,
  },
  description:
    "Professional portfolio of Annisa Haura Salshabira, Bachelor of Applied Science in Midwifery from Faculty of Medicine, Universitas Padjadjaran. Aspiring professional in healthcare administration, medical claims verification, and corporate operations.",
  keywords: [
    "Annisa Haura Salshabira",
    "Healthcare Administration",
    "Midwifery",
    "Public Health",
    "Universitas Padjadjaran",
    "Medical Records",
    "Health Operations",
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
    locale: "en_US",
    url: siteUrl,
    siteName: `${personalInfo.fullName} Portfolio`,
    title: `${personalInfo.fullName} | Portfolio`,
    description:
      "Professional portfolio of Annisa Haura Salshabira, Bachelor of Applied Midwifery from Faculty of Medicine, Universitas Padjadjaran.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} | Portfolio`,
    description:
      "Professional portfolio of Annisa Haura Salshabira, Bachelor of Applied Midwifery from Faculty of Medicine, Universitas Padjadjaran.",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffbfd" },
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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans overflow-x-hidden bg-[#fffbfd] text-stone-900`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
