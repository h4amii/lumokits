import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: 2023, title: 'LumoKits Was Born', desc: 'Started in Sialkot with a small team. One goal: make quality custom jerseys for football clubs overseas.' },
  { year: 2023, title: 'First Orders Shipped', desc: 'Completed our first batch of custom club jerseys. Shipped to teams in the UK and UAE.' },
  { year: 2024, title: 'Team Grew to 50+', desc: 'Expanded our workforce. Added more sewing stations and brought in experienced workers.' },
  { year: 2024, title: 'New Equipment', desc: 'Invested in better printing and cutting machines. Faster production, sharper designs.' },
  { year: 2025, title: '100+ Strong', desc: 'Team crossed 100 members. Facility upgraded to handle more orders every month.' },
  { year: 2025, title: 'Shipping Worldwide', desc: 'Now delivering custom kits to clubs in over 10 countries. Growing every month.' },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.timeline-item')
    items.forEach((item, i) => {
      const fromX = i % 2 === 0 ? -30 : 30
      gsap.fromTo(item, { opacity: 0, x: fromX }, {
        opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
      })
    })
  }, [])

  return (
    <section className="bg-deep-charcoal section-padding">
      <div className="container-lumo">
        <div className="mb-12">
          <p className="text-label text-brand-yellow mb-4">OUR JOURNEY</p>
          <h2 className="font-display font-semibold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
            How We Got Here
          </h2>
        </div>

        <div ref={sectionRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {milestones.map((m, i) => (
            <div key={i} className={`timeline-item relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-yellow rounded-full -translate-x-1/2 mt-2 z-10" />
              <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <p className="font-mono font-bold text-brand-yellow text-2xl mb-1">{m.year}</p>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{m.title}</h3>
                <p className="text-cool-gray text-sm leading-relaxed">{m.desc}</p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
