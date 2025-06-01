import Image from "next/image";
import HeroBox from '../components/HeroBox';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Products from '../components/Products';
import WaveServices from '../components/WaveServices';
import PartnerSlider from '../components/PartnerSlider';
import WelcomeSection from '../components/WelcomeSection';
import I510 from '../components/I510';
import Breadcrumb from "../components/Breadcrumb";
import Head from "next/head";

export default function Home() {
  const block = true
  const text = 'Blogs'
  const imageNames = [
    "lenze-i510/lenze-bangladesh-expert-repair-support.png",
    "lenze-i510/lenze-i510-cabinet-Frequeny-inverter-bangladesh.png",
    "lenze-i510/LENZE-INVERTER-BANGLADESH.png",
    "lenze-i510/lenze-inverter-bangladesh-repair-services.png",
  ];
  return (
    <>
    <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourdomain.com/articles/lenze-i510-working"
              },
              "headline": "How the Lenze i510 Works",
              "description": "A technical breakdown of the Lenze i510 inverter, its working principle, control features, and model list.",
              "image": "https://yourdomain.com/images/lenze-i510.jpg", // Change to actual image URL
              "author": {
                "@type": "Organization",
                "name": "Wave Engineering",
                "url": "https://yourdomain.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Wave Engineering",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/logo.png"
                }
              },
              "datePublished": "2024-06-01", // Adjust accordingly
              "dateModified": "2025-06-01"
            })
          }}
        />
      </Head>
    <main className="main">
      <Breadcrumb block={block} text={text} />
      <I510 />
      <div className="container mx-auto my-4">
        <h2 className="p-4 font-bold text-2xl">Lenze i510 Image Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {imageNames.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <a href={`/images/${img}`}>
                <img
                  src={`/images/${img}`}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
