import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GameInfoStrip from '@/components/ui/GameInfoStrip'
import HeroSection from '@/components/sections/HeroSection'
import StorySection from '@/components/sections/StorySection'
import GameplaySection from '@/components/sections/GameplaySection'
import EpisodeSection from '@/components/sections/EpisodeSection'
import CharactersSection from '@/components/sections/CharactersSection'
import FolkloreSection from '@/components/sections/FolkloreSection'
import MediaSection from '@/components/sections/MediaSection'
import CommunitySection from '@/components/sections/CommunitySection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <GameInfoStrip />
        <StorySection />
        <GameplaySection />
        <EpisodeSection />
        <CharactersSection />
        <FolkloreSection />
        <MediaSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  )
}
