import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Top from './components/Top';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from "next/script";
import JsonLdOrganization from './components/JsonLd';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wave Engineering | Lenze Products Bangladesh",
  description: "We are Authorized System Integrator, Channel Partner & Support/Repair Provider of Lenze Products in Bangladesh",
  alternates: {
    canonical: "https://www.waveengineeringbd.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/ico" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T9DXFSCXG7"
          strategy="afterInteractive"
        />

        {/* Google Analytics Init Script */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T9DXFSCXG7');
          `}
        </Script>
        <JsonLdOrganization />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Top />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
