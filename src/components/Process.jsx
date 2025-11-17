import React from 'react'

const steps = [
  { title: 'Discover', desc: 'Map market context, audience nuance, and brand realities.' },
  { title: 'Deploy', desc: 'Launch structured campaigns and MarTech foundations.' },
  { title: 'Measure', desc: 'Close the loop with dashboards, tests, and iteration.' },
]

const Process = () => {
  return (
    <section className="relative py-24 bg-[#0b0d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold">Process</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s,i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 p-6 bg-white/[0.04]">
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-gradient-to-br from-[#006C35] to-[#615EA5] text-white flex items-center justify-center text-sm">{i+1}</div>
              <h3 className="text-white font-medium mt-2">{s.title}</h3>
              <p className="text-white/70 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
