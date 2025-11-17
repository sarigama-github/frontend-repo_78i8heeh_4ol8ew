import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[90vh] flex items-center">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,#2A2D61_0%,#615EA5_45%,#CD4D96_100%)]" />
        {/* Grain + grid */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: '32px 32px'}} />
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(239,68,35,0.15), transparent 35%), radial-gradient(circle at 80% 30%, rgba(97,94,165,0.18), transparent 35%), radial-gradient(circle at 50% 80%, rgba(205,77,150,0.15), transparent 35%)'}} />

        {/* Spline 3D scene */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
              style={{textShadow:'0 10px 40px rgba(97,94,165,0.35)'}}
            >
              We don’t guess. We analyze. We grow.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-lg text-white/80 max-w-xl font-body"
            >
              Systemizing how Riyadh’s food brands grow through structured, data-driven marketing rooted in cultural insight.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-[#EF4423] via-[#F06A2E] to-[#EF4423] shadow-[0_8px_30px_rgba(239,68,35,0.35)] hover:shadow-[0_12px_40px_rgba(239,68,35,0.5)] transition-all">
                Get a Growth Plan
              </a>
              <a href="#cases" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white/90 border border-white/20 hover:border-white/40 backdrop-blur-sm">
                View Case Studies
              </a>
            </motion.div>
          </div>
          {/* Phone mockup placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-72 h-[520px] rounded-[42px] p-3 bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_20px_100px_rgba(42,45,97,0.45)]"
            >
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-[#2A2D61] via-[#615EA5] to-[#CD4D96]" />
              <div className="absolute inset-[8px] rounded-[30px] bg-[#0b0d1a] overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[#2A2D61] via-[#615EA5] to-[#CD4D96] opacity-90" />
                <div className="p-4 text-white">
                  <div className="text-sm text-white/70">Al Marketer</div>
                  <div className="mt-1 font-semibold">Growth Dashboard</div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[47,62,31].map((v,i)=> (
                      <div key={i} className="rounded-xl border border-white/10 p-3 bg-white/5">
                        <div className="text-xs text-white/60">Conv</div>
                        <div className="mt-1 text-lg font-semibold text-[#EF4423]">+{v}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-24 rounded-xl border border-white/10 bg-white/5 flex items-end gap-2 p-3">
                    {Array.from({length:18}).map((_,i)=> (
                      <div key={i} className="w-2 bg-gradient-to-t from-[#006C35] via-[#615EA5] to-[#CD4D96] rounded" style={{height: `${20 + Math.abs(Math.sin(i))*70}%`}} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
