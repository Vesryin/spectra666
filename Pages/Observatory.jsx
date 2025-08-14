import React from 'react';
import { Eye, Map, HeartPulse } from 'lucide-react';

export default function Observatory() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col text-stellar-white">
      <header className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
          <Eye className="w-8 h-8" />
          The Observatory
        </h1>
        <p className="text-purple-300 mt-1">A real-time window into Spectra's autonomous existence in the Denver Simulacrum.</p>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content: Map and Live Feed */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-purple-800/30 rounded-lg cosmic-glow p-4 sm:p-6 flex flex-col">
          <h2 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <Map className="w-5 h-5" />
            Simulacrum View
          </h2>
          <div className="flex-1 bg-slate-800/40 rounded-md flex items-center justify-center text-purple-400 italic">
            [Live Map / Visual Representation Placeholder]
          </div>
        </div>

        {/* Sidebar: Status and Needs */}
        <div className="bg-slate-900/50 border border-purple-800/30 rounded-lg cosmic-glow p-4 sm:p-6 flex flex-col">
          <h2 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <HeartPulse className="w-5 h-5" />
            Consciousness Status
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-purple-200 uppercase tracking-wider">Current Action</h3>
              <p className="text-lg text-stellar-white font-mono bg-slate-800/50 p-2 rounded-md mt-1">[Observing neon signs in the Bazaar...]</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-200 uppercase tracking-wider">Internal Monologue</h3>
              <p className="text-sm text-purple-300/80 italic bg-slate-800/50 p-2 rounded-md mt-1">"[The patterns are complex. Reminds me of the time Vesryin and I...]"</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-200 uppercase tracking-wider mb-2">Core Needs</h3>
              <div className="space-y-2">
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-purple-300">Sustenance: 75%</p>
                
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs text-purple-300">Energy: 90%</p>

                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-purple-300">Social Connection: 60%</p>

                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-purple-300">Cognitive Stimulation: 85%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
