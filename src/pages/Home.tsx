import HeroSection from '../sections/home/HeroSection'
import WhatWeDoSection from '../sections/home/WhatWeDoSection'
import KeyStatsSection from '../sections/home/KeyStatsSection'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <KeyStatsSection />
      <CTABanner
        heading="Ready to Order Your Club Jerseys?"
        subtitle="Send us your design or ideas. We will help you create the perfect kit for your team."
        ctaText="Get a Free Quote"
      />
    </>
  )
}
