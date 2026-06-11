import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(labelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      .fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-near-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-athletic-industrial.jpg"
          alt="Football jerseys manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container-lumo relative z-10 pt-[72px]">
        <div className="max-w-2xl">
          <p ref={labelRef} className="text-label text-brand-yellow mb-5 opacity-0">
            CUSTOM FOOTBALL JERSEYS FOR CLUBS
          </p>
          <h1
            ref={headingRef}
            className="font-display font-bold text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight mb-6 opacity-0"
          >
            Quality Kits Made for Your Club. Shipped Worldwide.
          </h1>
          <p ref={subtitleRef} className="text-cool-gray text-lg leading-relaxed max-w-xl mb-8 opacity-0">
            We make custom football jerseys and full team kits for clubs around the world. 
            Good quality, fair prices, and reliable delivery.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-violet text-white font-display font-semibold rounded-full px-9 py-3.5 hover:bg-[#9B5CFF] hover:shadow-[0_0_24px_rgba(123,47,247,0.35)] transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-transparent text-white font-display font-semibold rounded-full px-9 py-3.5 border-[1.5px] border-white hover:border-brand-violet hover:bg-[rgba(123,47,247,0.1)] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown size={24} className="text-brand-yellow/40" style={{ animation: 'pulse-down 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
