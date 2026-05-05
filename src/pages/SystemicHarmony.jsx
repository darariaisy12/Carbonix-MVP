import React from 'react';
import { Sprout, Users, Fingerprint, Landmark, HeartHandshake } from 'lucide-react';

const impactCards = [
  {
    id: 'nature',
    title: 'Nature',
    description: 'Restoring dead aquaculture ponds into thriving mangrove ecosystems, enhancing biodiversity and coastal resilience.',
    icon: Sprout,
    color: 'from-emerald-400 to-emerald-600',
    lightColor: 'bg-emerald-50 text-emerald-600',
    delay: 'delay-100'
  },
  {
    id: 'human',
    title: 'Humanity',
    description: 'Providing sustainable alternative income for local fishermen and coastal communities through green jobs.',
    icon: Users,
    color: 'from-orange-400 to-orange-600',
    lightColor: 'bg-orange-50 text-orange-600',
    delay: 'delay-200'
  },
  {
    id: 'tech',
    title: 'Technology',
    description: 'Utilizing decentralized Geotagging and smart contracts for 100% transparent and verifiable carbon tracking.',
    icon: Fingerprint,
    color: 'from-blue-400 to-blue-600',
    lightColor: 'bg-blue-50 text-blue-600',
    delay: 'delay-300'
  },
  {
    id: 'gov',
    title: 'Governance',
    description: 'Partnering with village enterprises (BUMDes) to ensure equitable distribution of funds and localized decision making.',
    icon: Landmark,
    color: 'from-purple-400 to-purple-600',
    lightColor: 'bg-purple-50 text-purple-600',
    delay: 'delay-400'
  }
];

export const SystemicHarmony = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
          <HeartHandshake size={18} className="text-blue-600" />
          <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">The Carbonix Vision</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Achieving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Systemic Harmony</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Carbonix is not just a carbon marketplace. It's a holistic ecosystem designed to balance environmental restoration, social equity, technological innovation, and localized governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mt-16">
        {/* Connecting Lines Graphic (Hidden on mobile) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-slate-200 rounded-full z-0 opacity-50 animate-spin-slow"></div>
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white shadow-xl rounded-full z-10 items-center justify-center border border-slate-100">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-emerald-500 flex items-center justify-center animate-pulse">
            <HeartHandshake className="text-white" size={32} />
          </div>
        </div>

        {impactCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div 
              key={card.id} 
              className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 z-20 group transform hover:-translate-y-2 animate-in slide-in-from-bottom-8 ${card.delay} fill-mode-both`}
            >
              <div className="flex flex-col h-full relative">
                {/* Decorative background glow */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-inner ${card.lightColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-20 bg-slate-900 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Blue Economy Revolution</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Whether you're a local farmer ready to restore the coast, or a corporation looking for high-impact carbon offsets, Carbonix is your platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Start Planting
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold transition-all">
              View Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
