import type { Metadata } from "next";
import { Platypi, Parkinsans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const platypi = Platypi({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-platypi",
  subsets: ["latin"],
  display: "swap",
});

const parkinsans = Parkinsans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-parkinsans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Serena Blake, PsyD | Psiholog Clinic",
    template: "%s | Dr. Serena Blake",
  },
  description:
    "Cabinet de psihologie clinică și psihoterapie. Beneficiază de ședințe de terapie empatică, în cabinet sau online, adaptate nevoilor tale.",
  metadataBase: new URL("https://demowebsiteterapeut.vercel.app"),
  keywords: [
    "Psiholog Clinic",
    "Psihoterapeut Timișoara",
    "Terapie Online",
    "Sănătate Mintală",
    "Psihoterapie",
    "Anxietate",
    "Depresie",
    "Dr. Serena Blake",
  ],
  openGraph: {
    title: "Dr. Serena Blake, PsyD | Psiholog Clinic",
    description:
      "Psiholog clinician specializat în anxietate, depresie și dezvoltare personală. Programează o ședință astăzi.",
    url: "https://demowebsiteterapeut.vercel.app",
    siteName: "Dr. Serena Blake, PsyD",
    type: "website",
    locale: "ro_RO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Serena Blake – Psiholog Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Serena Blake, PsyD",
    description:
      "Terapie empatică și profesională cu Dr. Serena Blake. Ședințe disponibile în cabinet și online.",
    creator: "@drserenablake",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://demowebsiteterapeut.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${platypi.variable} ${parkinsans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${parkinsans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}