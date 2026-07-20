import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    step: '01', title: 'You Share Your Design',
    description: 'Send us your jersey design, logo, colors, and player details. Not got a design yet? No problem. We will help you create one.',
    points: ['Upload your design or logo', 'Tell us your colors and style', 'Share player names and numbers'],
    image: '/assets/process-fabric-sourcing.avif',
  },
  {
    step: '02', title: 'We Pick the Right Fabric',
    description: 'We choose the best fabric for your kit. Breathable, comfortable, and built to last through every match and training session.',
    points: ['Lightweight breathable mesh', 'Strong stitching that lasts', 'Comfortable fit for players'],
    image: '/assets/process-cutting.avif',
  },
  {
    step: '03', title: 'Cut and Stitch',
    description: 'Our skilled workers cut each piece carefully and stitch it together. Every seam is checked to make sure it is strong and neat.',
    points: ['Precision cutting for clean edges', 'Double-stitched seams', 'Quality check at every step'],
    image: '/assets/process-stitching.avif',
  },
  {
    step: '04', title: 'Print and Add Details',
    description: 'We print your club logo, sponsor names, player numbers, and any other details. Sharp colors that do not fade after washing.',
    points: ['Vibrant long-lasting colors', 'Clear logos and numbers', 'Sponsor names and badges'],
    image: '/assets/process-printing.avif',
  },
  {
    step: '05', title: 'Quality Check',
    description: 'Every jersey is inspected before it leaves. We check the stitching, printing, sizing, and overall look. If it is not right, we fix it.',
    points: ['Size and fit check', 'Print quality inspection', 'Final approval before packing'],
    image: '/assets/process-qc.avif',
  },
  {
    step: '06', title: 'Packed and Shipped',
    description: 'Your kits are carefully packed and labeled. We handle the shipping paperwork and send them to your club address anywhere in the world.',
    points: ['Individual jersey bagging', 'Strong export cartons', 'Tracking number provided'],
    image: '/assets/process-packaging.avif',
  },
]

export default function ProcessStepsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.process-step')
    gsap.fromTo(items, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
  }, [])

  return (
    <section className="bg-white section-padding">
      <div className="container-lumo" ref={sectionRef}>
        <div className="text-center mb-12">
          <p className="text-label text-brand-violet mb-4">THE PROCESS</p>
          <h2 className="font-display font-semibold text-deep-charcoal text-[clamp(2rem,4vw,3rem)] leading-tight">
            Six Steps to Your Custom Kit
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {steps.map((step, i) => (
            <div key={step.step} className={`process-step grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? '' : ''}`}>
              <div className={`rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={step.image} alt={step.title} className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </div>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <span className="absolute -top-4 left-0 font-mono font-bold text-brand-violet/20 text-5xl md:text-6xl">{step.step}</span>
                <div className="relative z-10 pt-6">
                  <p className="text-label text-brand-violet mb-2">STEP {step.step}</p>
                  <h3 className="font-display font-semibold text-deep-charcoal text-2xl mb-3">{step.title}</h3>
                  <p className="text-near-black text-base leading-relaxed mb-5">{step.description}</p>
                  <ul className={`space-y-2.5 ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                    {step.points.map((p) => (
                      <li key={p} className={`flex items-start gap-2.5 text-cool-gray text-sm ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <CheckCircle2 size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
