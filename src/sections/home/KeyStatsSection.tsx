import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Package } from 'lucide-react'
import CounterAnimation from '../../components/CounterAnimation'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Calendar, number: 3, suffix: '+', label: 'Years Making Kits' },
  { icon: Package, number: 1, suffix: 'K+', label: 'Units Per Month' },
  { icon: Users, number: 50, suffix: '+', label: 'Skilled Workers' },
  { icon: MapPin, number: 100, suffix: '+', label: 'Total Workforce' },
]

export default function KeyStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.stat-card')
    const borders = sectionRef.current.querySelectorAll('.stat-border')
    gsap.fromTo(cards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
    borders.forEach((border) => {
      gsap.fromTo(border, { scaleX: 0 }, {
        scaleX: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: border, start: 'top 85%', once: true },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-near-black section-padding">
      <div className="container-lumo">
        <div className="text-center mb-12">
          <p className="text-label text-brand-yellow mb-4">WHO WE ARE</p>
          <h2 className="font-display font-semibold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
            A Small Team. Big on Quality.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card text-center">
              <div className="stat-border h-0.5 bg-brand-violet origin-center mb-6" />
              <stat.icon size={28} className="text-brand-yellow/60 mb-4 mx-auto" />
              <p className="font-mono font-bold text-brand-yellow text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-tight mb-2">
                <CounterAnimation target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-cool-gray text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-cool-gray text-sm text-center mt-10 max-w-lg mx-auto">
          Founded in 2023. Working out of a 1,100 sq ft facility in Sialkot, Pakistan. 
          We are a growing team focused on making great kits for football clubs everywhere.
        </p>
      </div>
    </section>
  )
}
