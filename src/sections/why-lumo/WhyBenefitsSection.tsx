import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shirt, Paintbrush, Truck, BadgeDollarSign, MessageCircle, RefreshCw } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Shirt,
    title: 'Made for Football Clubs',
    description: 'We only make football kits. That means every jersey we produce is designed with the pitch in mind. Lightweight, breathable, and ready for match day.',
  },
  {
    icon: Paintbrush,
    title: 'Your Design, Your Way',
    description: 'Bring us your design or work with our team to create one. Any color, any layout, any logo. Your kit should look exactly how you imagined it.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Fair Prices for Every Club',
    description: 'Whether you are a local Sunday league team or a professional academy, we offer pricing that works for your budget. No hidden fees, ever.',
  },
  {
    icon: Truck,
    title: 'We Ship Worldwide',
    description: 'From the UK to Australia, the US to the Middle East. We have shipped kits to clubs on nearly every continent. Reliable delivery, every time.',
  },
  {
    icon: MessageCircle,
    title: 'Talk to Us Directly',
    description: 'Got a question? Message us on WhatsApp and get a real reply from a real person. We believe in honest, direct communication with every club.',
  },
  {
    icon: RefreshCw,
    title: 'Reorder with Ease',
    description: 'Loved your first batch? Reordering is quick and simple. We keep your design on file so your next kit is just a message away.',
  },
]

export default function WhyBenefitsSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.benefit-card')
    gsap.fromTo(cards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-white section-padding">
      <div className="container-lumo">
        <div className="text-center mb-12">
          <p className="text-label text-brand-violet mb-4">THE BENEFITS</p>
          <h2 className="font-display font-semibold text-deep-charcoal text-[clamp(2rem,4vw,3rem)] leading-tight">
            Six Reasons Clubs Choose Us
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card bg-light-silver rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-violet/10 flex items-center justify-center mb-4">
                <b.icon size={22} className="text-brand-violet" />
              </div>
              <h3 className="font-display font-semibold text-deep-charcoal text-lg mb-2">{b.title}</h3>
              <p className="text-cool-gray text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
