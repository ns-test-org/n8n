'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer1 = setTimeout(() => setIsVisible(true), 500);
    const timer2 = setTimeout(() => setShowParticles(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-spin opacity-30" style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-32 w-16 h-16 bg-pink-500 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-12 h-12 bg-yellow-400 transform rotate-12 animate-pulse opacity-50" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-green-400 rounded-full animate-ping opacity-20" />
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Hello text with staggered animation */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            {['H', 'e', 'l', 'l', 'o'].map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-1000 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 rotate-0' 
                    : 'translate-y-20 opacity-0 rotate-12'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Coop text with different animation */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            {['c', 'o', 'o', 'p'].map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-1000 transform hover:scale-125 hover:rotate-12 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : 'translate-x-10 opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: `${800 + index * 150}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
        </div>

        {/* Animated subtitle */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '2000ms' }}>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            Welcome to the awesome animated experience! ✨
          </p>
        </div>

        {/* Pulsing glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Interactive button */}
        <div className={`mt-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '2500ms' }}>
          <button 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
            onClick={() => {
              // Create a fun click effect
              const button = document.activeElement;
              if (button) {
                button.classList.add('animate-ping');
                setTimeout(() => button.classList.remove('animate-ping'), 600);
              }
            }}
          >
            Click for Magic! ✨
          </button>
        </div>
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl animate-pulse pointer-events-none" />
    </div>
  );
}

