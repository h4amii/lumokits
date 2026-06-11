import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shirt, Clock, ThumbsUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const points = [
  {
    icon: Shirt,
    title: 'Built to Last',
    description: 'Our jerseys are made with strong fabric and solid stitching. They hold up wash after wash, match after match.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We know your season starts on a specific date. We work hard to get your kits to you before kickoff.',
  },
  {
    icon: ThumbsUp,
    title: 'Fair Pricing',
    description: 'No hidden costs. No surprises. We give you a clear price upfront so you can plan your club budget.',
  },
]

export default function QualityNoteSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.quality-card')
    gsap.fromTo(cards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-near-black section-padding">
      <div className="container-lumo">
        <div className="text-center mb-10">
          <p className="text-label text-brand-yellow mb-4">OUR PROMISE</p>
          <h2 className="font-display font-semibold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
            Quality You Can Trust
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="quality-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-brand-violet/20 flex items-center justify-center mx-auto mb-4">
                <p.icon size={24} className="text-brand-yellow" />
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3">{p.title}</h3>
              <p className="text-cool-gray text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
