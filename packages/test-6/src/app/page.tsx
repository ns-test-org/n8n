'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Hello text */}
        <div className="mb-8">
          <h1 
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animation: mounted ? 'bounce-gentle 3s ease-in-out infinite' : 'none',
            }}
          >
            Hello
          </h1>
        </div>

        {/* Coop text */}
        <div className="relative">
          <h2 
            className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animation: mounted ? 'float 4s ease-in-out infinite 1s' : 'none',
            }}
          >
            coop
          </h2>
          
          {/* Sparkle effects around "coop" */}
          {mounted && (
            <>
              <div className="absolute -top-4 -left-4 text-yellow-300 text-2xl animate-pulse">✨</div>
              <div className="absolute -top-2 -right-8 text-pink-300 text-xl animate-bounce">⭐</div>
              <div className="absolute -bottom-4 left-8 text-cyan-300 text-lg animate-pulse delay-1000">💫</div>
              <div className="absolute -bottom-2 -right-4 text-purple-300 text-xl animate-bounce delay-500">✨</div>
            </>
          )}
        </div>

        {/* Subtitle */}
        <p 
          className={`mt-12 text-xl md:text-2xl text-white/80 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Welcome to something awesome! 🚀
        </p>

        {/* Animated border */}
        <div 
          className={`mt-8 w-32 h-1 mx-auto bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full transition-all duration-1000 delay-1500 ${
            mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            animation: mounted ? 'pulse-glow 2s ease-in-out infinite' : 'none',
          }}
        />
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
        }
      `}</style>
    </div>
  );
}

