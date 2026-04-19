import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Space_Grotesk']">
      <nav className="fixed w-full z-50 bg-[#0d0e15]/90 border-b border-[#474750]/30 h-20 flex items-center px-10 justify-between">
        <div className="text-xl font-bold text-[#96f8ff] tracking-widest uppercase">TK_VISUAL</div>
        <button className="px-6 py-2 bg-[#96f8ff] text-black text-sm uppercase font-bold tracking-widest hover:shadow-[0_0_15px_rgba(150,248,255,0.5)]">Enter App</button>
      </nav>

      <section className="pt-40 pb-32 px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(150,248,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8 relative z-10">
          SEE THE <span className="text-[#96f8ff]">SUPPLY.</span>
        </h1>
        <p className="text-xl text-[#abaab4] max-w-2xl mx-auto mb-12 relative z-10">
          Iridescent tokenomics dashboards. Vesting schedules mapped in real-time. Circulating supply metrics at a glance.
        </p>
        <button className="px-10 py-4 bg-transparent border-2 border-[#96f8ff] text-[#96f8ff] uppercase tracking-widest font-bold text-lg hover:bg-[#96f8ff] hover:text-black transition-all relative z-10">
          Explore Metrics
        </button>
      </section>

      <section className="py-20 px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#12131b] border border-[#474750]/30 p-10 flex flex-col items-center text-center group hover:bg-[#181922] transition-colors">
          <div className="w-32 h-32 rounded-full border-8 border-[#181922] border-t-[#96f8ff] border-r-[#ff51fa] mb-8 shadow-[0_0_20px_rgba(150,248,255,0.2)] group-hover:rotate-90 transition-transform duration-1000"></div>
          <h3 className="text-2xl uppercase tracking-widest text-[#96f8ff] mb-4">Supply Donuts</h3>
          <p className="text-[#abaab4]">High-fidelity charts mapping treasury, team, and community allocations.</p>
        </div>
        <div className="bg-[#12131b] border border-[#474750]/30 p-10 flex flex-col items-center text-center group hover:bg-[#181922] transition-colors">
          <div className="w-full h-8 bg-[#181922] flex items-center px-1 mb-8">
             <div className="h-2 bg-[#ff51fa] shadow-[0_0_10px_#ff51fa]" style={{width: '40%'}}></div>
          </div>
          <h3 className="text-2xl uppercase tracking-widest text-[#ff51fa] mb-4">Vesting Timelines</h3>
          <p className="text-[#abaab4]">Visual cliff and unlock schedules ensuring complete transparency.</p>
        </div>
      </section>

      <section className="py-32 bg-[#000000] border-t border-[#474750]/30 text-center">
        <h2 className="text-4xl font-bold uppercase tracking-widest text-[#eeedf7] mb-16">Enterprise Ready</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 px-10">
           <div className="flex-1 border border-[#474750] p-8">
             <h3 className="text-xl text-[#abaab4] mb-4 uppercase">Public API</h3>
             <div className="text-3xl text-[#96f8ff]">9<span className="text-sm">/mo</span></div>
           </div>
           <div className="flex-1 border border-[#ff51fa] bg-[#12131b] p-8 shadow-[0_0_20px_rgba(255,81,250,0.1)]">
             <h3 className="text-xl text-[#ff51fa] mb-4 uppercase">Institutional</h3>
             <div className="text-3xl text-[#eeedf7]">99<span className="text-sm">/mo</span></div>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-[#474750]/30">
        <p className="text-xs text-[#abaab4] tracking-widest uppercase">TK_VISUAL © 2024</p>
      </footer>
    </main>
  );
}
