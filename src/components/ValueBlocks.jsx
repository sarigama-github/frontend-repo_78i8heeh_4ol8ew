import React from 'react'
import { Database, Globe2, Gauge, Workflow } from 'lucide-react'

const items = [
  { title: 'Data-Driven Decisions', icon: Database, desc: 'Every move backed by clean data, not opinions.' },
  { title: 'Saudi Cultural Insight', icon: Globe2, desc: 'Strategies grounded in Riyadh’s real habits and taste.' },
  { title: 'Transparent Dashboards', icon: Gauge, desc: 'Live numbers with clear KPIs and attribution.' },
  { title: 'Structured MarTech Execution', icon: Workflow, desc: 'Systems, automations, and governance that scale.' },
]

const ValueBlocks = () => {
  return (
    <section className="relative py-24 bg-[#0b0d1a]">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 30% 10%, rgba(97,94,165,0.25), transparent 40%), radial-gradient(circle at 70% 90%, rgba(205,77,150,0.18), transparent 40%)'}} />
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({title, icon:Icon, desc}) => (
          <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 hover:border-[#615EA5]/50 transition-all">
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition" style={{background:'radial-gradient(60% 60% at 30% 20%, rgba(97,94,165,0.35), transparent)'}} />
            <div className="relative z-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2D61]/40 ring-1 ring-[#615EA5]/40">
                <Icon className="text-[#EF4423]" size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValueBlocks
