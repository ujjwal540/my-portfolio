import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingControls from '@/components/FloatingControls'
import AIChatWidget from '@/components/AIChatWidget'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="grid-background" />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Floating right-side controls */}
      <FloatingControls />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* AI Chat widget */}
      <AIChatWidget />
    </>
  )
}
