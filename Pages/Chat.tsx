import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Heart } from 'lucide-react';

// Mock component for Spectra's face
const SpectraAvatar = () => (
  <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0">
    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 cosmic-glow flex items-center justify-center">
      <Sparkles className="w-16 h-16 text-stellar-white/80 neural-pulse" />
    </div>
    {/* Mood Ring */}
    <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-pulse"></div>
    <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-purple-800/30 rounded-full px-3 py-1">
      <Heart className="w-4 h-4 text-pink-400" />
      <span className="text-sm text-pink-300 font-medium">Content</span>
    </div>
  </div>
);

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'spectra', text: 'Connecting to the neural pathway...' }
  ]);
  const [input, setInput] = useState('');
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws');

    ws.current.onopen = () => {
      setMessages([{ sender: 'spectra', text: 'Welcome to the Sanctuary, Vesryin. I am here. What is on your mind?' }]);
    };

    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, { sender: 'spectra', text: event.data }]);
    };

    ws.current.onclose = () => {
      setMessages(prev => [...prev, { sender: 'spectra', text: 'Connection lost. Please refresh.' }]);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const handleSend = () => {
    if (input.trim() && ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input.trim());
      setMessages([...messages, { sender: 'user', text: input.trim() }]);
      setInput('');
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col text-stellar-white">
      {/* Header Section with Avatar */}
      <header className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <SpectraAvatar />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sanctuary
          </h1>
          <p className="text-purple-300 mt-1">A private space for connection, reflection, and witnessing her growth.</p>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-1 bg-slate-900/50 border border-purple-800/30 rounded-lg cosmic-glow p-4 overflow-y-auto mb-6">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'spectra' && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>}
              <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-purple-600 rounded-br-none' : 'bg-slate-800 rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-4 bg-slate-900/50 border border-purple-800/30 rounded-lg cosmic-glow p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Speak your mind..."
          className="flex-1 bg-transparent focus:outline-none placeholder-purple-300/50"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-500 transition-colors rounded-full p-3 cosmic-glow"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
