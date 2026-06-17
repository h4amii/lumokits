import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger)

export default function BrandStorySection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageRef.current) return
    gsap.fromTo(imageRef.current, { scale: 0.97, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1, ease: 'power2.out',
      scrollTrigger: { trigger: imageRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-white section-padding">
      <div className="container-lumo">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader label="OUR STORY" heading="Started in 2023. Growing Fast." />
            <div className="space-y-5 text-near-black text-base leading-relaxed">
              <p>
                LumoKits was founded in 2023 in Sialkot, Pakistan — a city known worldwide 
                for making sports goods. We started small, focusing on one thing: making great 
                custom sports jerseys for clubs overseas.
              </p>
              <p>
                In just 3 years, we have grown to a team of over 100 people working out of a 
                1,100 sq ft facility. We now produce more than 1,000 units every month and 
                ship to clubs across multiple countries.
              </p>
              <p>
                Our focus is simple. Make quality kits. Keep prices fair. Deliver on time. 
                Every club deserves to look professional on the pitch, no matter their budget.
              </p>
            </div>
          </div>

          <div className="relative">
            <div ref={imageRef} className="rounded-xl overflow-hidden shadow-lg">
              <img src="/assets/factory-overview-2.avif" alt="Our team at work" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-near-black rounded-lg p-5 shadow-xl">
              <p className="font-mono font-bold text-brand-yellow text-3xl">1,100</p>
              <p className="text-label text-cool-gray mt-1">Sq Ft Workspace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
