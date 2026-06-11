import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Factory, Users, Package } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const statPills = [
  { icon: MapPin, stat: 'Sialkot, Pakistan', label: 'Location' },
  { icon: Factory, stat: '1,100 sq ft', label: 'Workspace' },
  { icon: Users, stat: '100+', label: 'Team Members' },
  { icon: Package, stat: '1,000+/mo', label: 'Units Made' },
]

export default function FactorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const pills = sectionRef.current.querySelectorAll('.stat-pill')
    gsap.fromTo(pills, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-near-black section-padding">
      <div className="container-lumo" ref={sectionRef}>
        <div className="mb-10">
          <p className="text-label text-brand-yellow mb-4">OUR FACTORY</p>
          <h2 className="font-display font-semibold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Where Your Kits Come to Life
          </h2>
          <p className="text-cool-gray text-lg max-w-2xl">
            Clean, modern workspace in Sialkot. Our team works together to cut, stitch, 
            print, and pack every order with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/process-printing.jpg" alt="Production floor" className="w-full h-full object-cover aspect-video" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/factory-overview-3.jpg" alt="Cutting room" className="w-full h-full object-cover aspect-video" loading="lazy" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {statPills.map((p) => (
            <div key={p.label} className="stat-pill flex items-center gap-3 border border-white/15 rounded-full px-7 py-3">
              <p.icon size={18} className="text-brand-yellow" />
              <span className="text-white font-display font-semibold text-sm">{p.stat}</span>
              <span className="text-cool-gray text-xs uppercase tracking-wider">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
