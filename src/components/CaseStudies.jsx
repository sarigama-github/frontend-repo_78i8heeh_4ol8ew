import React from 'react'

const cases = [
  { title: 'Riyadh Casual Dining', result: '+47% conversion lift' },
  { title: 'Premium QSR Launch', result: '3.1x ROAS' },
  { title: 'Heritage Dessert Brand', result: '+62% lead quality' },
]

const CaseStudies = () => {
  return (
    <section id="cases" className="relative py-24 bg-[#0b0d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold">Case Studies</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <a key={i} href="#" className="group block">
              <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#15183a] to-[#0b0d1a]">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage:'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize:'cover'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                <div className="absolute inset-0 transition-all group-hover:scale-[1.02] group-hover:shadow-[0_20px_80px_rgba(97,94,165,0.35)]" />
                <div className="relative z-10 p-6 text-white">
                  <div className="text-sm text-white/70">{c.result}</div>
                  <div className="mt-1 text-lg font-semibold">{c.title}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
