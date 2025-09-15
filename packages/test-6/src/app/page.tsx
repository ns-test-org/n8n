'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Hello', 'World', '!'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <div className="text-center">
        {/* Main animated title */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl">
            <span className="inline-block animate-bounce">H</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>e</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>o</span>
            <span className="mx-4"></span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>W</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>o</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>r</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>d</span>
            <span className="inline-block animate-bounce text-yellow-300" style={{ animationDelay: '1s' }}>!</span>
          </h1>
        </div>
        
        {/* Rotating words display */}
        <div className="h-16 flex items-center justify-center mb-8">
          <div className="text-2xl md:text-4xl font-semibold text-white/90 transition-all duration-500 transform">
            <span className={`inline-block transition-all duration-500 ${currentWordIndex === 0 ? 'scale-110 text-yellow-300' : 'scale-100'}`}>
              {words[0]}
            </span>
            <span className="mx-2">•</span>
            <span className={`inline-block transition-all duration-500 ${currentWordIndex === 1 ? 'scale-110 text-yellow-300' : 'scale-100'}`}>
              {words[1]}
            </span>
            <span className="mx-2">•</span>
            <span className={`inline-block transition-all duration-500 ${currentWordIndex === 2 ? 'scale-110 text-yellow-300' : 'scale-100'}`}>
              {words[2]}
            </span>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
        
        {/* Pulsing subtitle */}
        <div className={`transition-all duration-1500 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-white/80 animate-pulse">
            Welcome to the animated world! ✨
          </p>
        </div>
        
        {/* Animated button */}
        <div className={`mt-12 transition-all duration-2000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <span className="inline-block animate-pulse">Click me! 🚀</span>
          </button>
        </div>
      </div>
      
      {/* Background animated shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
}

