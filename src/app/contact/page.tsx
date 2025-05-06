import Image from "next/image";
import HeroBox from './../components/HeroBox';
import FeaturesSection from './../components/FeaturesSection';
import FeaturedProducts from './../components/FeaturedProducts';
import WaveServices from './../components/WaveServices';
import PartnerSlider from './../components/PartnerSlider';
import WelcomeSection from './../components/WelcomeSection';
import ContactSection from './../components/ContactSection';
import Breadcrumb from "../components/Breadcrumb";


export default function Home() {
  const block = true
  const text = 'Contact'
  return (
    <>
    <main className="space-y-4 mb-4">
      <Breadcrumb block={block} text={text} />
      <ContactSection />
    </main>
    </>
  );
}
