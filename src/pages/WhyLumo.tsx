import WhyHeroBanner from '../sections/why-lumo/WhyHeroBanner'
import WhyBenefitsSection from '../sections/why-lumo/WhyBenefitsSection'
import WhyTrustSection from '../sections/why-lumo/WhyTrustSection'
import CTABanner from '../components/CTABanner'

export default function WhyLumo() {
  return (
    <>
      <WhyHeroBanner />
      <WhyBenefitsSection />
      <WhyTrustSection />
      <CTABanner
        heading="Ready to Order Your Club Kits?"
        subtitle="Join clubs around the world who trust LumoKits for their custom jerseys. Get in touch today."
        ctaText="Get a Free Quote"
      />
    </>
  )
}
