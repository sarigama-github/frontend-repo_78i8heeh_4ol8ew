import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit; backend endpoint could be added later
    setTimeout(()=> setStatus('We received your request. We will reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0b0d1a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-white text-3xl font-semibold">Start your growth plan</h2>
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input required className="w-full rounded-xl bg-[#0b0d1a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#615EA5]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input type="email" required className="w-full rounded-xl bg-[#0b0d1a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#615EA5]" placeholder="you@brand.com" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Brand</label>
              <input className="w-full rounded-xl bg-[#0b0d1a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#615EA5]" placeholder="Brand name" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Service needed</label>
              <select className="w-full rounded-xl bg-[#0b0d1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#615EA5]">
                <option>Growth Strategy</option>
                <option>F&B Marketing</option>
                <option>MarTech Setup</option>
                <option>Digital Campaigns</option>
                <option>Analytics & Dashboards</option>
                <option>Creative Systems</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-[#EF4423] via-[#F06A2E] to-[#EF4423] shadow-[0_8px_30px_rgba(239,68,35,0.35)] hover:shadow-[0_12px_40px_rgba(239,68,35,0.5)] transition-all">
                Submit
              </button>
              <span className="ml-4 text-white/70 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
