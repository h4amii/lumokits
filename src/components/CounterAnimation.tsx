import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CounterAnimationProps {
  target: number
  suffix?: string
  className?: string
}

export default function CounterAnimation({ target, suffix = '', className = '' }: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const obj = { value: 0 }
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(Math.round(obj.value))
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [target])

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}
