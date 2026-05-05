import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Wind, Sprout, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const kpiData = [
  { title: 'Total Carbon Sequestered', value: '1,450', unit: 'Tons', icon: Wind, color: 'text-emerald-500', bg: 'bg-emerald-100', trend: '+12.5%' },
  { title: 'Mangroves Planted', value: '12,500', unit: 'Trees', icon: Sprout, color: 'text-blue-500', bg: 'bg-blue-100', trend: '+8.2%' },
  { title: 'Empowered Coastal Farmers', value: '245', unit: 'People', icon: Users, color: 'text-orange-500', bg: 'bg-orange-100', trend: '+15.3%' },
];

const chartData = [
  { name: 'Jan', carbon: 800 },
  { name: 'Feb', carbon: 950 },
  { name: 'Mar', carbon: 1100 },
  { name: 'Apr', carbon: 1250 },
  { name: 'May', carbon: 1380 },
  { name: 'Jun', carbon: 1450 },
];

const recentActivities = [
  { id: 1, user: 'Pak Budi', action: 'Planted 50 Rhizophora', location: 'Banyuwangi', status: 'Verified - Paid', time: '2 mins ago' },
  { id: 2, user: 'Ibu Siti', action: 'Uploaded Geotag Evidence', location: 'Demak', status: 'Pending Review', time: '1 hour ago' },
  { id: 3, user: 'OceanCorp', action: 'Purchased 200 Tons Offset', location: 'Global Market', status: 'Completed', time: '3 hours ago' },
  { id: 4, user: 'BUMDes Maju', action: 'Distributed micro-payments', location: 'Banyuwangi', status: 'Completed', time: '5 hours ago' },
];

const KPICard = ({ title, value, unit, icon: Icon, color, bg, trend }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ease-in-out" style={{ backgroundColor: 'currentColor' }} />
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${bg}`}>
        <Icon size={24} className={color} />
      </div>
      <div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-semibold">
        <ArrowUpRight size={14} />
        <span>{trend}</span>
      </div>
    </div>
    <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
    <div className="flex items-baseline space-x-2">
      <span className="text-3xl font-bold text-slate-900">{value}</span>
      <span className="text-slate-500 font-medium">{unit}</span>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">Overview</h1>
          <p className="text-slate-500">Monitor your real-time systemic harmony impact.</p>
        </div>
        <button className="hidden sm:flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
          <span>Download Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiData.map((kpi, idx) => (
          <KPICard key={idx} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Carbon Sequestration Growth</h2>
              <p className="text-sm text-slate-500">Monthly cumulative tons sequestered</p>
            </div>
            <select className="bg-slate-50 border-none text-sm text-slate-600 rounded-lg focus:ring-0 cursor-pointer p-2">
              <option>Last 6 months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ color: '#64748B', marginBottom: '4px' }}
                />
                <Area type="monotone" dataKey="carbon" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorCarbon)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Live Activities</h2>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 -mr-2">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {recentActivities.map((activity, idx) => (
                <div key={activity.id} className="relative flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 shrink-0 ${
                    activity.status.includes('Paid') ? 'bg-emerald-100 text-emerald-600' : 
                    activity.status.includes('Review') ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {activity.status.includes('Paid') ? <CheckCircle2 size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{activity.user}</p>
                    <p className="text-sm text-slate-600 truncate">{activity.action}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-slate-400">{activity.location}</span>
                      <span className="text-xs text-slate-300">•</span>
                      <span className="text-xs text-slate-400">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
