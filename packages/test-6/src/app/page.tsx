'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Animated Hello World text */}
        <div className="mb-8">
          <h1 className={`text-6xl md:text-8xl font-bold text-white transition-all duration-1000 ${
            mounted ? 'animate-bounce-in opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <span className="inline-block animate-wave-1 text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              H
            </span>
            <span className="inline-block animate-wave-2 text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              e
            </span>
            <span className="inline-block animate-wave-3 text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              l
            </span>
            <span className="inline-block animate-wave-4 text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              l
            </span>
            <span className="inline-block animate-wave-5 text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              o
            </span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-wave-6 text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              W
            </span>
            <span className="inline-block animate-wave-7 text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              o
            </span>
            <span className="inline-block animate-wave-8 text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              r
            </span>
            <span className="inline-block animate-wave-9 text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              l
            </span>
            <span className="inline-block animate-wave-10 text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              d
            </span>
          </h1>
        </div>

        {/* Animated subtitle */}
        <p className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-500 ${
          mounted ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Welcome to the animated universe! ✨
        </p>

        {/* Pulsing circle */}
        <div className={`relative mx-auto w-32 h-32 transition-all duration-1000 delay-1000 ${
          mounted ? 'animate-pulse-glow opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
            <div className="text-2xl animate-bounce">🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
}

