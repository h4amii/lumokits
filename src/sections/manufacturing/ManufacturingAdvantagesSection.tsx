import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Globe, Factory, Zap } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    icon: Shield,
    title: 'Export-Grade Durability',
    description: 'Garments built to withstand international shipping, repeated washing, and intense athletic use. Reinforced construction at every stress point.',
  },
  {
    icon: Globe,
    title: 'Premium Materials Sourcing',
    description: 'Direct relationships with certified fabric mills ensure consistent quality, competitive pricing, and access to the latest performance textile innovations.',
  },
  {
    icon: Factory,
    title: 'Bulk Production Capability',
    description: 'Monthly capacity of 500,000+ units across our 120,000 sq ft facility. Scalable workforce and production lines to handle seasonal demand spikes.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround Times',
    description: 'Standard lead time of 4–6 weeks from order confirmation to shipment. Express lanes available for urgent orders — as fast as 2 weeks for repeat designs.',
  },
]

export default function ManufacturingAdvantagesSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.adv-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  return (
    <section className="bg-near-black section-padding">
      <div className="container-lumo">
        <div className="text-center">
          <SectionHeader
            label="OUR ADVANTAGES"
            heading="Why Brands Choose Lumo"
            labelColor="text-brand-yellow"
            headingColor="text-white"
            align="center"
          />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="adv-card bg-white/[0.04] border border-white/[0.08] rounded-xl p-9"
            >
              <a.icon size={32} className="text-brand-yellow mb-4" />
              <h3 className="font-display font-semibold text-white text-xl mb-3">
                {a.title}
              </h3>
              <p className="text-cool-gray text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
