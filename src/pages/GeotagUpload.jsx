import React, { useState } from 'react';
import { UploadCloud, CheckCircle, MapPin, TreePine, User } from 'lucide-react';

export const GeotagUpload = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    seedlings: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and blockchain transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after showing success for a while
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', location: '', seedlings: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Geotag Upload</h1>
        <p className="text-slate-500">Submit your planting evidence for verification and instant micro-payment.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        {isSuccess ? (
          <div className="text-center py-12 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Verification Submitted!</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              Your geotag data has been securely logged to the blockchain. The smart contract has initiated your micro-payment of <span className="font-bold text-emerald-600">Rp 150.000</span> to your connected wallet.
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Tx Hash: 0x8F2c...a9B4</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Farmer Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Pak Budi" 
                    className="pl-10 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location / Coordinates</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-slate-400" />
                  </div>
                  <input 
                    required
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="-8.2045, 114.3687 (Banyuwangi)" 
                    className="pl-10 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                  />
                  <button type="button" className="absolute inset-y-0 right-2 flex items-center px-3 text-sm text-blue-600 font-medium hover:text-blue-700">
                    Auto-detect
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Number of Seedlings</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <TreePine size={18} className="text-slate-400" />
                  </div>
                  <input 
                    required
                    type="number" 
                    value={formData.seedlings}
                    onChange={(e) => setFormData({...formData, seedlings: e.target.value})}
                    placeholder="e.g. 50" 
                    className="pl-10 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Photo Evidence</label>
                <div className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-slate-300 border-dashed rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors cursor-pointer group">
                  <div className="space-y-2 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    <div className="flex text-sm text-slate-600 justify-center">
                      <label className="relative cursor-pointer rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white transition-all ${
                isSubmitting ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing securely...
                </span>
              ) : 'Submit for Verification'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
