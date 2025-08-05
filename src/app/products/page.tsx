import Image from "next/image";
import HeroBox from '../components/HeroBox';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Products from '../components/Products';
import WaveServices from '../components/WaveServices';
import PartnerSlider from '../components/PartnerSlider';
import WelcomeSection from '../components/WelcomeSection';
import ContactSection from '../components/ContactSection';
import Breadcrumb from "../components/Breadcrumb";
import MetaTags from "../components/MetaTags";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wave Engineering Products | Lenze Inverter Bangladesh",
  description: "Discover Lenze inverters, AC/DC drives, PLCs, HMIs, and automation products from WAVE ENGINEERING—authorized partner and supplier in Bangladesh.",
  alternates: {
    canonical: "https://www.waveengineeringbd.com/products/",
  },
};

export default function Home() {
  const block = true
  const text = 'Products'
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wave Engineering",
    alternateName: "Lenze Products Bangladesh",
    url: "https://www.waveengineeringbd.com",
    logo: "https://www.waveengineeringbd.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+8801719073109",
        contactType: "Customer Support",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, House-241, Sector-04, Jalaluddin Road, Bottola Railgate, Uttara",
      addressLocality: "Dhaka",
      postalCode: "1230",
      addressCountry: "BD",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.youtube.com/@waveengineeringbd",
      "https://www.facebook.com/profile.php?id=100088529135630",
      "https://www.facebook.com/wavelenze",
      "https://www.linkedin.com/company/wave-engineering-bd",
    ],
    founder: {
      "@type": "Person",
      name: "Wave Engineering Team",
    },
    description:
      "Wave Engineering is the Authorized System Integrator, Channel Partner, and Service/Repair Provider for Lenze Products in Bangladesh, offering complete machine motion productivity and engineering solutions.",
    brand: {
      "@type": "Brand",
      name: "Lenze",
    },
    department: [
      {
        "@type": "Organization",
        name: "Sales Department",
        description:
          "Official distributor and sales partner for Lenze automation and motion products.",
      },
      {
        "@type": "Organization",
        name: "Service & Repair Department",
        description:
          "Authorized support and repair services for Lenze machinery and components.",
      },
    ],
  };
  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Wave Engineering",
            "alternateName": "Lenze Products Bangladesh",
            "url": "https://www.waveengineeringbd.com",
            "logo": "https://www.waveengineeringbd.com/logo.png", // Replace with actual logo URL
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+8801719073109",
                "contactType": "Customer Support",
                "areaServed": "BD",
                "availableLanguage": ["English", "Bengali"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2nd Floor, House-241, Sector-04, Jalaluddin Road, Bottola Railgate, Uttara",
              "addressLocality": "Dhaka",
              "postalCode": "1230",
              "addressCountry": "BD"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.youtube.com/@waveengineeringbd",
              "https://www.facebook.com/profile.php?id=100088529135630",
              "https://www.facebook.com/wavelenze",
              "https://www.linkedin.com/company/wave-engineering-bd"
            ],
            "founder": {
              "@type": "Person",
              "name": "Wave Engineering Team"
            },
            "description": "Wave Engineering is the Authorized System Integrator, Channel Partner, and Service/Repair Provider for Lenze Products in Bangladesh, offering complete machine motion productivity and engineering solutions.",
            "brand": {
              "@type": "Brand",
              "name": "Lenze"
            },
            "department": [
              {
                "@type": "Organization",
                "name": "Sales Department",
                "description": "Official distributor and sales partner for Lenze automation and motion products."
              },
              {
                "@type": "Organization",
                "name": "Service & Repair Department",
                "description": "Authorized support and repair services for Lenze machinery and components."
              }
            ]
          }),
        }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
    <main className="main">
      <Breadcrumb block={block} text={text} />
      <Products />
    </main>
    </>
  );
}
