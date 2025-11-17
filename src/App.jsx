import React from 'react'
import Hero from './components/Hero'
import ValueBlocks from './components/ValueBlocks'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d1a] text-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#2A2D61] to-[#615EA5]" />
            <span className="font-semibold">Al Marketer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#cases" className="hover:text-white">Case Studies</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <ValueBlocks />
        <div id="services"><Services /></div>
        <div id="process"><Process /></div>
        <CaseStudies />
        <div id="about"><About /></div>
        <Contact />
        <footer className="py-10 text-center text-white/60 bg-[#0b0d1a] border-t border-white/10">© {new Date().getFullYear()} Al Marketer — Riyadh</footer>
      </main>
    </div>
  )
}

export default App
