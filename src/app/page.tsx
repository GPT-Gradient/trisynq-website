import HeroSection from '@/components/sections/HeroSection'
import AuthoritySection from '@/components/sections/AuthoritySection'
import The20PercentSection from '@/components/sections/The20PercentSection'
import Top5InitiativesSection from '@/components/sections/Top5InitiativesSection'
import PublicDashboardSection from '@/components/sections/PublicDashboardSection'
import BetaProgramSection from '@/components/sections/BetaProgramSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <The20PercentSection />
      <Top5InitiativesSection />
      <PublicDashboardSection />
      <BetaProgramSection />
    </>
  )
}