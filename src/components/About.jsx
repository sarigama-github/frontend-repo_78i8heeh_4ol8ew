import React from 'react'

const About = () => {
  return (
    <section className="relative py-24 bg-[#0b0d1a]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-white text-3xl font-semibold">About Al Marketer</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Systemizing growth</li>
            <li>• Data over guesswork</li>
            <li>• Culturally grounded in Saudi</li>
            <li>• Operate like a co‑founder</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2A2D61] via-[#615EA5] to-[#CD4D96] opacity-30 blur-2xl" />
          <div className="relative h-64 rounded-3xl bg-[#111427] border border-white/10 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-[#2A2D61] opacity-80" />
            <div className="absolute right-6 bottom-6 text-white/60 text-sm">Mascot silhouette</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
