import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/landing/HeroSection'
import AboutSection from '@/components/landing/AboutSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import GallerySection from '@/components/landing/GallerySection'
import ShopPreviewSection from '@/components/landing/ShopPreviewSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <ShopPreviewSection />
      </main>
      <Footer />
    </>
  )
}
