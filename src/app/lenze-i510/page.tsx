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
import FaqSection from '../components/FaqSectionI510';

export default function Home() {
  const block = true
  const text = 'Blogs'
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Lenze i510 used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Lenze i510 is a compact AC frequency inverter for controlling motor speed and torque in industrial automation systems."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Lenze i510 inverter work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It rectifies incoming AC power to DC, smooths it in the DC link, and converts it back to variable-frequency AC to drive motors efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "What control methods does the i510 support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It supports V/f control, Sensorless Vector Control (SLVC), PID control, brake management, flying start, and energy optimization with VFC eco."
        }
      },
      {
        "@type": "Question",
        "name": "How is the Lenze i510 configured or programmed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can configure it via the keypad, Lenze Smart Keypad App (Bluetooth), or the EASY Starter software on a PC."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the authorized Lenze partner in Bangladesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wave Engineering is the official System Integrator and Channel Partner of Lenze in Bangladesh."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Wave Engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Address: House-241, Sector-04, Bottola Railgate, Uttara, Dhaka. Phone: +8801719073109. Email: info@waveengineeringbd.com"
        }
      }
    ]
  };
  const imageNames = [
    "lenze-i510/lenze-bangladesh-expert-repair-support",
    "lenze-i510/lenze-i510-cabinet-Frequeny-inverter-bangladesh",
    "lenze-i510/LENZE-INVERTER-BANGLADESH",
    "lenze-i510/lenze-inverter-bangladesh-repair-services",
  ];
  return (
    <>
    <Head>
      <link rel="canonical" href="https://www.waveengineeringbd.com/lenze-i510/" />
      <meta property="og:title" content="How the Lenze i510 Works | Lenze Inverter Guide" />
      <meta property="og:description" content="Discover the working principle, features, and models of the Lenze i510 – a compact and modular AC frequency inverter for efficient motor control." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://yourwebsite.com/lenze-i510-working-principle" />
      <meta property="og:image" content="https://www.waveengineeringbd.com/lenze-i510/lenze-i510-inverter-cabinet-frequency-inverter-bangladesh-germany.jpg" />
      <meta property="og:image:alt" content="Lenze i510 frequency inverter image" />
      <meta property="og:site_name" content="Wave Engineering" />

      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How the Lenze i510 Works | Lenze Inverter Explained" />
      <meta name="twitter:description" content="Learn how the Lenze i510 inverter controls motor speed and saves energy. Includes features, models, and support in Bangladesh." />
      <meta name="twitter:image" content="https://www.waveengineeringbd.com/lenze-i510/lenze-i510-inverter-cabinet-frequency-inverter-bangladesh-germany.jpg" />
      <meta name="keywords" content="Lenze i510, Lenze inverter, AC frequency inverter, motor control, variable frequency drive, VFD, Lenze drive Bangladesh, Lenze i510 working principle, Lenze i510 features, V/f control, SLVC, PID control, Lenze product models, energy efficient inverter, Lenze automation, industrial motor drive, inverter installation Bangladesh, Wave Engineering Lenze" />
      
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.waveengineeringbd.com/lenze-i510"
            },
            "headline": "How the Lenze i510 Works",
            "description": "A technical breakdown of the Lenze i510 inverter, its working principle, control features, and model list.",
            "image": "https://www.waveengineeringbd.com/images/lenze-i510/LENZE-INVERTER-BANGLADESH.png",
            "author": {
              "@type": "Organization",
              "name": "Wave Engineering",
              "url": "https://www.waveengineeringbd.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Wave Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.waveengineeringbd.com/images/wave-engineering-logo-2000.png"
              }
            },
            "datePublished": "2025-06-01",
            "dateModified": "2025-06-01"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Lenze i510 Frequency Inverter",
        "alternateName": "Lenze i510 AC Drive",
        "image": [
          "https://example.com/images/i510-front.jpg",
          "https://example.com/images/i510-diagram.jpg",
          "https://example.com/images/i510-installation.jpg"
        ],
        "description": "Scalable, compact, and modular AC frequency inverter for motor control applications with energy-saving features and multiple control modes.",
        "brand": {
          "@type": "Brand",
          "name": "Lenze",
          "url": "https://www.lenze.com"
        },
        "category": "Industrial Automation > AC Drives",
        "sku": "i510-SERIES",
        "model": [
          "i51AE125B1",
          "i51AE137B1",
          "i51AE155B1",
          "i51AE175B1",
          "i51AE211B1",
          "i51AE215B1",
          "i51AE222B1",
          "i51AE125D1",
          "i51AE137D1",
          "i51AE155D1",
          "i51AE175D1",
          "i51AE211D1",
          "i51AE215D1",
          "i51AE222D1",
          "I51AE240C1",
          "I51AE255C1",
          "i51AE137F1",
          "i51AE155F1",
          "i51AE175F1",
          "i51AE211F1",
          "i51AE215F1",
          "i51AE222F1",
          "I51BE230F1",
          "I51BE240F1",
          "I51AE255F1",
          "I51AE275F1",
          "I51AE311F1"
        ],
        "productionDate": "2023-01-01",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Working Principle",
            "value": "Converts AC to DC then back to variable frequency AC for motor control"
          },
          {
            "@type": "PropertyValue",
            "name": "Input Voltage",
            "value": "1-phase 230V, 3-phase 230V/400V/480V"
          },
          {
            "@type": "PropertyValue",
            "name": "Power Range",
            "value": "0.25kW to 11kW (up to 110kW available)"
          },
          {
            "@type": "PropertyValue",
            "name": "Control Modes",
            "value": "V/f, Sensorless Vector Control, PID"
          },
          {
            "@type": "PropertyValue",
            "name": "Energy Optimization",
            "value": "VFC eco mode for partial loads"
          },
          {
            "@type": "PropertyValue",
            "name": "Brake Management",
            "value": "Integrated deceleration control"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "27",
          "lowPrice": "Contact",
          "highPrice": "Contact",
          "priceCurrency": "BDT",
          "seller": {
            "@type": "Organization",
            "name": "Wave Engineering Bangladesh",
            "url": "https://www.waveengineeringbd.com",
            "telephone": "+8801719073109",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BD",
              "addressRegion": "Dhaka"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 14,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "35",
          "bestRating": "5"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Industrial Engineer"
            },
            "datePublished": "2023-11-15",
            "reviewBody": "The energy optimization features reduced our plant's power consumption by 18%",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ],
        "disambiguatingDescription": "Modular frequency inverter for industrial motor control with multiple voltage options and control modes",
        "keywords": "AC drive, variable frequency drive, motor controller, industrial automation",
        "countryOfAssembly": "Germany",
        "manufacturer": {
          "@type": "Organization",
          "name": "Lenze SE",
          "url": "https://www.lenze.com"
        },
        "hasPart": {
          "@type": "ProductModel",
          "name": "i510 Product Line",
          "model": [
            {
              "@type": "ProductModel",
              "name": "Single Phase 230V Series",
              "model": ["i51AE125B1", "i51AE137B1", "i51AE155B1", "i51AE175B1", "i51AE211B1", "i51AE215B1", "i51AE222B1"]
            },
            {
              "@type": "ProductModel",
              "name": "Dual Voltage 230V Series",
              "model": ["i51AE125D1", "i51AE137D1", "i51AE155D1", "i51AE175D1", "i51AE211D1", "i51AE215D1", "i51AE222D1"]
            },
            {
              "@type": "ProductModel",
              "name": "Three Phase 400V Series",
              "model": ["i51AE137F1", "i51AE155F1", "i51AE175F1", "i51AE211F1", "i51AE215F1", "i51AE222F1", "I51BE230F1", "I51BE240F1", "I51AE255F1", "I51AE275F1", "I51AE311F1"]
            }
          ]
        },
        "documentation": {
          "@type": "TechArticle",
          "name": "Lenze i510 Technical Manual",
          "url": "https://www.lenze.com/en-de/service/downloads/"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.waveengineeringbd.com/products/lenze-i510"
        }
      })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <a href={`/images/${img+'.png'}`}>
                <img
                  src={`/images/${img+'-3x.webp'}`}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <FaqSection />
    </main>
    </>
  );
}
