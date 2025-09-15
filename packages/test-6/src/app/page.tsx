'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div
          className={`transition-all duration-2000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          {/* Hello World text with gradient and animations */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-pulse">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>
              H
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>
              e
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>
              l
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>
              l
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>
              o
            </span>
            <span className="inline-block animate-bounce mx-4" style={{ animationDelay: '0.5s' }}>
              🌟
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>
              W
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>
              o
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>
              r
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>
              l
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>
              d
            </span>
          </h1>

          {/* Subtitle with fade-in animation */}
          <p
            className={`text-xl md:text-2xl text-white/80 mb-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Welcome to an animated experience! ✨
          </p>

          {/* Animated button */}
          <button
            className={`px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1.5s' }}
            onClick={() => {
              // Add a fun click animation
              const button = document.activeElement as HTMLElement;
              button.style.transform = 'scale(0.95)';
              setTimeout(() => {
                button.style.transform = 'scale(1.05)';
              }, 100);
              setTimeout(() => {
                button.style.transform = 'scale(1)';
              }, 200);
            }}
          >
            Click me for magic! 🎉
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-32 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}

