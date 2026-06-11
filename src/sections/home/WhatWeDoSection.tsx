import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shirt, Truck, Palette, Users } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Shirt,
    title: 'Custom Club Jerseys',
    description: 'Design your own jerseys with your club colors, logo, player names, and numbers. We handle everything from design to delivery.',
  },
  {
    icon: Users,
    title: 'Full Team Kits',
    description: 'Get complete kits including home and away jerseys, shorts, and socks. Everything matches and looks professional.',
  },
  {
    icon: Palette,
    title: 'Design Support',
    description: 'Have a design ready or just an idea? Our team will help you create a kit your players will be proud to wear.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'We ship to clubs all over the world. Reliable delivery with tracking so you know exactly when your kits will arrive.',
  },
]

export default function WhatWeDoSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.service-card')
    gsap.fromTo(cards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-white section-padding">
      <div className="container-lumo">
        <SectionHeader
          label="WHAT WE DO"
          heading="Everything Your Club Needs in One Place"
          align="center"
        />
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.title} className="service-card bg-light-silver rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-violet/10 flex items-center justify-center mb-4 group-hover:bg-brand-violet/20 transition-colors">
                <s.icon size={22} className="text-brand-violet" />
              </div>
              <h3 className="font-display font-semibold text-deep-charcoal text-lg mb-2">{s.title}</h3>
              <p className="text-cool-gray text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
