import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ContactHeroBanner() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 })
  }, [])

  return (
    <section className="relative min-h-[40vh] flex items-center bg-deep-charcoal">
      <div className="absolute inset-0">
        <img src="/assets/contact-hero.avif" alt="Custom jerseys" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.7)]" />
      </div>
      <div className="container-lumo pt-[72px]">
        <p className="text-label text-brand-yellow mb-4">CONTACT US</p>
        <h1 ref={headingRef} className="font-display font-bold text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight max-w-3xl opacity-0">
          Let's Talk About Your Kit.
        </h1>
        <p className="text-cool-gray text-sm mt-4">Home / Contact</p>
      </div>
    </section>
  )
}
