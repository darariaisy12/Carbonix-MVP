import React, { useState } from 'react';
import { Leaf, MapPin, ExternalLink, ShieldCheck, TrendingUp } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Banyuwangi Mangrove Restoration',
    location: 'East Java, Indonesia',
    credits: 500,
    price: 15,
    funded: 350,
    image: 'https://images.unsplash.com/photo-1664532798937-6f3c456c88c7?auto=format&fit=crop&q=80&w=800',
    tags: ['Blue Carbon', 'Community Led']
  },
  {
    id: 2,
    title: 'Demak Coastal Defense',
    location: 'Central Java, Indonesia',
    credits: 1200,
    price: 18,
    funded: 400,
    image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800',
    tags: ['Erosion Control', 'Biodiversity']
  },
  {
    id: 3,
    title: 'Riau Islands Peatland',
    location: 'Sumatra, Indonesia',
    credits: 3000,
    price: 12,
    funded: 2800,
    image: 'https://images.unsplash.com/photo-1444080748397-f40f0afb8490?auto=format&fit=crop&q=80&w=800',
    tags: ['Peatland', 'High Impact']
  },
  {
    id: 4,
    title: 'Bali Coral Reef Revival',
    location: 'Bali, Indonesia',
    credits: 800,
    price: 25,
    funded: 150,
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800',
    tags: ['Marine', 'Tourism']
  }
];

const ProjectCard = ({ project }) => {
  const [isBuying, setIsBuying] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const progressPercent = Math.min(100, Math.round((project.funded / project.credits) * 100));

  const handleBuy = () => {
    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
      setPurchased(true);
      setTimeout(() => setPurchased(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 z-20 flex space-x-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white font-bold text-lg">{project.title}</h3>
          <div className="flex items-center text-slate-200 text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            {project.location}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="text-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Available</p>
            <p className="text-xl font-bold text-slate-900">{project.credits - project.funded} <span className="text-sm font-medium text-slate-500">Tons</span></p>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Price</p>
            <p className="text-xl font-bold text-emerald-600">${project.price} <span className="text-sm font-medium text-slate-500">/ Ton</span></p>
          </div>
        </div>

        <div className="mb-6 flex-1">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-slate-700">Funding Progress</span>
            <span className="font-bold text-blue-600">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-right">{project.funded} of {project.credits} Tons funded</p>
        </div>

        <button 
          onClick={handleBuy}
          disabled={isBuying || purchased}
          className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-all ${
            purchased 
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
              : isBuying
              ? 'bg-blue-800 text-white cursor-wait'
              : 'bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
          }`}
        >
          {purchased ? (
            <>
              <ShieldCheck size={18} className="mr-2" />
              Offset Secured
            </>
          ) : isBuying ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing...</span>
            </span>
          ) : (
            <>
              Buy Offset
              <ExternalLink size={16} className="ml-2 opacity-70" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export const CarbonMarket = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Carbon Market</h1>
          <p className="text-slate-500 max-w-2xl">Purchase verified high-quality blue carbon credits. Support coastal communities while offsetting your corporate emissions.</p>
        </div>
        
        <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
          <TrendingUp className="text-emerald-500" size={20} />
          <div>
            <p className="text-xs text-slate-500 font-medium">Market Average</p>
            <p className="text-sm font-bold text-slate-900">$16.40 / Ton</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
