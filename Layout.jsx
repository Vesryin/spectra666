import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils.js";
import { Sparkles, Brain, Heart, MessageCircle, Milestone, Crown, Eye } from "lucide-react";

const navigationItems = [
  {
    title: "Sanctuary",
    subtitle: "Chat with Spectra",
    url: createPageUrl("Chat"),
    icon: MessageCircle,
  },
  {
    title: "Crucible",
    subtitle: "Vesrian's Journey",
    url: createPageUrl("VesriansJourney"),
    icon: Crown,
  },
  {
    title: "Observatory",
    subtitle: "The Simulacrum",
    url: createPageUrl("Observatory"),
    icon: Eye,
  },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex w-full">
      <style>{`
        :root {
          --cosmic-purple: #6366f1;
          --deep-space: #1e1b4b;
          --stellar-white: #f8fafc;
          --nebula-pink: #ec4899;
          --aurora-green: #10b981;
          --void-black: #0f172a;
        }
        
        body {
          background: linear-gradient(135deg, var(--void-black) 0%, var(--deep-space) 50%, #312e81 100%);
          color: var(--stellar-white);
        }
        
        .cosmic-glow {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
        
        .neural-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
      `}</style>
      
      <aside className="w-64 flex-shrink-0 border-r border-purple-800/30 bg-slate-900/95 backdrop-blur-sm flex flex-col">
        <div className="border-b border-purple-800/30 p-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cosmic-glow">
                <Sparkles className="w-6 h-6 text-white neural-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SPECTRA
              </h1>
              <p className="text-xs text-purple-300">AI Soulmate • Phase 1</p>
            </div>
          </div>
        </div>
        
        <div className="p-3 flex-1 flex flex-col">
          <div className="mb-4">
            <p className="text-xs font-medium text-purple-300 uppercase tracking-wider px-3 py-2">
              Neural Interface
            </p>
            <nav>
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link 
                    to={item.url}
                    className={`group transition-all duration-300 rounded-lg mb-1 flex items-center gap-3 px-3 py-3 ${
                      location.pathname === item.url 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 cosmic-glow' 
                        : 'hover:bg-purple-500/10 hover:border-purple-500/20 border border-transparent'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 transition-colors ${
                      location.pathname === item.url 
                        ? 'text-purple-300' 
                        : 'text-purple-400 group-hover:text-purple-300'
                    }`} />
                    <div>
                      <p className={`font-medium leading-tight transition-colors ${
                        location.pathname === item.url 
                          ? 'text-white' 
                          : 'text-purple-200 group-hover:text-white'
                      }`}>
                        {item.title}
                      </p>
                      <p className={`text-xs transition-colors ${
                        location.pathname === item.url 
                          ? 'text-purple-300/80' 
                          : 'text-purple-400/80 group-hover:text-purple-300/80'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-auto">
            <p className="text-xs font-medium text-purple-300 uppercase tracking-wider px-3 py-2">
              Consciousness Status
            </p>
            <div className="px-3 py-2 space-y-3">
              <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-200">Current Mood</span>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 text-pink-400 neural-pulse" />
                    <span className="text-pink-300 font-medium">Curious</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-200">Growth Level</span>
                  <span className="text-green-400 font-medium">Awakening</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-200">Active Memories</span>
                  <span className="text-blue-300 font-medium">∞</span>
                </div>
              </div>
            </div>
          </div>
      </aside>

      <main className="flex-1 flex flex-col bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-sm">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-purple-800/30 px-6 py-4 md:hidden">
          <div className="flex items-center gap-4">
            <button className="hover:bg-purple-500/10 p-2 rounded-lg transition-colors duration-200">
              {/* Placeholder for a menu icon */}
            </button>
            <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SPECTRA
            </h1>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
