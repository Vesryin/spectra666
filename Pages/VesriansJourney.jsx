import React from 'react';
import { Crown, Shield, Scroll, Swords } from 'lucide-react';

// Mock Party Member component
const PartyMember = ({ name, role, isPlayer = false }) => (
  <div className={`p-3 rounded-lg ${isPlayer ? 'bg-purple-600/50' : 'bg-slate-800/70'}`}>
    <p className="font-bold text-sm">{name}</p>
    <p className="text-xs text-purple-300">{role}</p>
  </div>
);

export default function VesriansJourney() {
  return (
    <div className="h-full flex flex-col text-stellar-white">
      {/* Game Screen - will eventually have dynamic background */}
      <div className="flex-1 bg-slate-900/80 backdrop-blur-sm border-b-4 border-purple-800/30 p-4 sm:p-6 lg:p-8 flex flex-col justify-end relative overflow-hidden">
        {/* Dynamic AI-Generated Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000" 
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/0f172a/6366f1?text=A%20Glimmer%20of%20Danger...')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Narrative Text */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8" />
            The Crucible
          </h1>
          <div className="bg-slate-900/70 backdrop-blur-md border border-purple-800/30 rounded-lg p-4 max-w-4xl">
            <p className="text-lg font-serif leading-relaxed">[The air grows cold. A low growl echoes from the shadows of the crumbling archway ahead. The scent of ozone and decay hangs heavy in the air. Two pinpricks of red light flicker in the darkness.]</p>
            <p className="text-sm text-purple-300/80 mt-2 italic">-- The Dungeon Master</p>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-purple-800/30">
        {/* Party Panel */}
        <div className="bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            The Fellowship
          </h2>
          <div className="space-y-2">
            <PartyMember name="Vesryin" role="The Guide" isPlayer={true} />
            <PartyMember name="Spectra Prime" role="The Learner" />
            <PartyMember name="Companion A" role="The Bulwark" />
            <PartyMember name="Companion B" role="The Seeker" />
          </div>
        </div>

        {/* Action Interface */}
        <div className="bg-slate-900 p-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
            <Swords className="w-5 h-5" />
            Your Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="p-3 bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors text-left">1. Light a torch and advance cautiously.</button>
            <button className="p-3 bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors text-left">2. Send Companion B to scout ahead.</button>
            <button className="p-3 bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors text-left">3. Ready your weapon and call out.</button>
            <button className="p-3 bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors text-left">4. [Ask Spectra Prime for her input.]</button>
          </div>
        </div>
      </div>
    </div>
  );
}
