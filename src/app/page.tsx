import Image from "next/image";
import HeroBox from './components/HeroBox';
import FeaturesSection from './components/FeaturesSection';
import FeaturedProducts from './components/FeaturedProducts';
import WaveServices from './components/WaveServices';
// import PartnerSlider from './components/PartnerSlider';
import WelcomeSection from './components/WelcomeSection';
import ContactSection from './components/ContactSection';


export default function Home() {
  return (
    <>
    <HeroBox />
    <main className="space-y-10 mb-20">
      <FeaturesSection />
      <FeaturedProducts />
      <WaveServices />
      {/* <PartnerSlider /> */}
      <WelcomeSection />
      <ContactSection />
    </main>
    </>
  );
}
