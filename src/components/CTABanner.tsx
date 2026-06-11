import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  heading: string
  subtitle: string
  ctaText: string
  ctaLink?: string
  icon?: React.ReactNode
}

export default function CTABanner({ heading, subtitle, ctaText, ctaLink = '/contact', icon }: CTABannerProps) {
  return (
    <section className="bg-deep-charcoal relative overflow-hidden">
      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px)`,
        }}
      />
      <div className="container-lumo section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-tight mb-5">
            {heading}
          </h2>
          <p className="text-cool-gray text-lg mb-8 leading-relaxed">{subtitle}</p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-brand-violet text-white font-display font-semibold rounded-full px-10 py-4 hover:bg-[#9B5CFF] hover:shadow-[0_0_24px_rgba(123,47,247,0.35)] transition-all duration-300"
          >
            {ctaText}
            {icon || <ArrowRight size={18} />}
          </Link>
        </div>
      </div>
    </section>
  )
}
