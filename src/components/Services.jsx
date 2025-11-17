import React from 'react'

const services = [
  'Growth Strategy',
  'F&B Marketing',
  'MarTech Setup',
  'Digital Campaigns',
  'Analytics & Dashboards',
  'Creative Systems',
]

const Services = () => {
  return (
    <section className="relative py-24 bg-[#0b0d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold">Services</h2>
        <p className="text-white/70 mt-2">Systems that compound growth across channels.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s} className="group relative rounded-2xl bg-[#111427] border border-white/10 p-6 hover:border-[#615EA5]/60 transition-all">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all" style={{boxShadow:'0 0 0 1px rgba(97,94,165,0.5) inset, 0 20px 80px rgba(97,94,165,0.25)'}} />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#2A2D61] to-[#615EA5] mb-4" />
                <h3 className="text-white font-medium">{s}</h3>
                <p className="mt-2 text-white/70 text-sm">Playbooks, automation, and measurement built for Riyadh’s food scene.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
