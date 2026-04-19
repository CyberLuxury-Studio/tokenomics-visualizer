import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#f9f5fd] font-manrope">
      <header className="px-10 py-8 border-b border-[#1f1f26]">
        <h1 className="text-3xl font-space-grotesk tracking-tighter uppercase text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">Tokenomics Hub</h1>
      </header>
      
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-[#131319] border border-[#1f1f26] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B026FF] blur-[80px] opacity-10 group-hover:opacity-20 transition-all"></div>
          <h2 className="text-xl font-space-grotesk tracking-widest mb-8 text-[#ACAAB1]">Vesting Schedule</h2>
          {/* Simulated Timeline */}
          <div className="h-64 flex items-end gap-2 border-b border-[#1f1f26] pb-4">
            <div className="w-12 bg-gradient-to-t from-[#B026FF] to-transparent h-[10%] border-t border-[#B026FF] shadow-[0_-5px_15px_rgba(176,38,255,0.3)]"></div>
            <div className="w-12 bg-gradient-to-t from-[#B026FF] to-transparent h-[20%] border-t border-[#B026FF] shadow-[0_-5px_15px_rgba(176,38,255,0.3)]"></div>
            <div className="w-12 bg-gradient-to-t from-[#B026FF] to-transparent h-[45%] border-t border-[#B026FF] shadow-[0_-5px_15px_rgba(176,38,255,0.3)]"></div>
            <div className="w-12 bg-gradient-to-t from-[#B026FF] to-transparent h-[80%] border-t border-[#B026FF] shadow-[0_-5px_15px_rgba(176,38,255,0.3)]"></div>
            <div className="w-12 bg-[#39FF14]/20 h-full border-t-2 border-[#39FF14] shadow-[0_-5px_20px_rgba(57,255,20,0.4)] relative">
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#39FF14] text-xs font-bold font-space-grotesk">CLIFF</div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-xs text-[#ACAAB1] font-space-grotesk">
            <span>Q1 2024</span><span>Q2 2024</span><span>Q3 2024</span><span>Q4 2024</span><span>Q1 2025</span>
          </div>
        </div>

        <div className="bg-[#131319] border border-[#1f1f26] p-8 flex flex-col items-center justify-center relative">
          <h2 className="text-xl font-space-grotesk tracking-widest mb-8 text-[#ACAAB1] self-start w-full">Supply Metrics</h2>
          {/* Simulated Donut Chart */}
          <div className="w-48 h-48 rounded-full border-[16px] border-[#1f1f26] border-t-[#39FF14] border-r-[#B026FF] relative flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.1)]">
            <div className="text-center">
              <div className="text-xs text-[#ACAAB1] uppercase tracking-widest font-space-grotesk">Circulating</div>
              <div className="text-2xl font-bold text-[#f9f5fd]">45%</div>
            </div>
          </div>
          
          <ul className="w-full mt-10 space-y-4 text-sm">
            <li className="flex justify-between"><span className="text-[#39FF14] flex items-center gap-2"><span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_5px_#39FF14]"></span> Community</span> <span className="text-[#f9f5fd]">45%</span></li>
            <li className="flex justify-between"><span className="text-[#B026FF] flex items-center gap-2"><span className="w-2 h-2 bg-[#B026FF] rounded-full shadow-[0_0_5px_#B026FF]"></span> Core Team</span> <span className="text-[#f9f5fd]">25%</span></li>
            <li className="flex justify-between"><span className="text-[#ACAAB1] flex items-center gap-2"><span className="w-2 h-2 bg-[#ACAAB1] rounded-full"></span> Treasury</span> <span className="text-[#f9f5fd]">30%</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
