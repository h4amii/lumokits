import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'LumoKits made our club look professional for the first time. The quality was better than we expected and the price fit our budget perfectly.',
    name: 'Mark T.',
    role: 'Club Manager, UK',
    initials: 'MT',
  },
  {
    quote: 'We ordered 40 kits for our youth academy. They arrived on time, looked great, and the parents were impressed. Already placed our second order.',
    name: 'Carlos R.',
    role: 'Academy Director, Spain',
    initials: 'CR',
  },
  {
    quote: 'The WhatsApp communication made everything easy. Sent our design, got a quote the same day, and the jerseys arrived 3 weeks later. Highly recommend.',
    name: 'Ahmed S.',
    role: 'Team Captain, UAE',
    initials: 'AS',
  },
]

export default function WhyTrustSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.testimonial-card')
    gsap.fromTo(cards, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-light-silver section-padding">
      <div className="container-lumo">
        <div className="text-center mb-10">
          <p className="text-label text-brand-violet mb-4">WHAT CLUBS SAY</p>
          <h2 className="font-display font-semibold text-deep-charcoal text-[clamp(2rem,4vw,3rem)] leading-tight">
            Real Feedback from Real Clubs
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card bg-white rounded-2xl p-8">
              <Quote size={24} className="text-brand-violet/30 mb-4" />
              <p className="text-deep-charcoal text-base leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-violet/10 flex items-center justify-center font-display font-semibold text-brand-violet text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-deep-charcoal text-sm">{t.name}</p>
                  <p className="text-cool-gray text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
