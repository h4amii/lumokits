import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeaderProps {
  label: string
  labelColor?: string
  heading: string
  body?: string
  align?: 'left' | 'center'
  headingColor?: string
  bodyColor?: string
}

export default function SectionHeader({
  label,
  labelColor = 'text-brand-violet',
  heading,
  body,
  align = 'left',
  headingColor = 'text-deep-charcoal',
  bodyColor = 'text-cool-gray',
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal-item')
    gsap.fromTo(
      els,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      }
    )
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill()
      })
    }
  }, [])

  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const maxWidth = body ? (align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl') : ''

  return (
    <div ref={ref} className={`${alignClass} mb-12 md:mb-16`}>
      <p className={`reveal-item text-label ${labelColor} mb-4`}>{label}</p>
      <h2
        className={`reveal-item font-display font-semibold ${headingColor} text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] tracking-tight mb-5`}
      >
        {heading}
      </h2>
      {body && (
        <p className={`reveal-item ${bodyColor} text-lg leading-relaxed ${maxWidth}`}>
          {body}
        </p>
      )}
    </div>
  )
}
