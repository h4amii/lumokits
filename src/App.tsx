import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Manufacturing from './pages/Manufacturing'
import WhyLumo from './pages/WhyLumo'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/why-lumo" element={<WhyLumo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
