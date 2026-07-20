import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ManufacturingHeroBanner() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 })
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center bg-near-black overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/process-stitching.avif" alt="Manufacturing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.7)]" />
      </div>
      <div className="container-lumo relative z-10 pt-[72px]">
        <p className="text-label text-brand-yellow mb-4">HOW WE WORK</p>
        <h1 ref={headingRef} className="font-display font-bold text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight max-w-3xl opacity-0">
          From Design to Your Doorstep
        </h1>
      </div>
    </section>
  )
}
