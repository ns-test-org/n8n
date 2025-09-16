'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [mouseSparkles, setMouseSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Create floating sparkles
    const createSparkle = () => {
      const newSparkle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      setSparkles(prev => [...prev.slice(-20), newSparkle]);
    };

    const interval = setInterval(createSparkle, 500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const newSparkle = {
      id: Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setMouseSparkles(prev => [...prev.slice(-10), newSparkle]);
    
    setTimeout(() => {
      setMouseSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  const handleClick = () => {
    // Reset animation by triggering a re-render
    const coopElement = document.querySelector('.coop-text');
    if (coopElement) {
      coopElement.classList.remove('animate-bounce-rainbow');
      setTimeout(() => {
        coopElement.classList.add('animate-bounce-rainbow');
      }, 10);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-float pointer-events-none text-2xl"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Mouse Trail Sparkles */}
      {mouseSparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-ping pointer-events-none text-yellow-300"
          style={{
            left: sparkle.x - 10,
            top: sparkle.y - 10,
          }}
        >
          ⭐
        </div>
      ))}

      {/* Floating Emojis */}
      <div className="absolute top-10 left-10 animate-float text-4xl">🎉</div>
      <div className="absolute top-20 right-20 animate-float text-4xl" style={{animationDelay: '1s'}}>⭐</div>
      <div className="absolute bottom-20 left-20 animate-float text-4xl" style={{animationDelay: '2s'}}>🚀</div>
      <div className="absolute bottom-10 right-10 animate-float text-4xl" style={{animationDelay: '3s'}}>💫</div>

      {/* Main Content */}
      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold animate-glow text-white mb-4">
            Hello
          </h1>
          <h2 className="coop-text text-9xl md:text-[12rem] font-black animate-bounce-rainbow">
            coop
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-white/80 animate-pulse mt-8">
          ✨ Click anywhere to restart the magic! ✨
        </p>
      </div>

      {/* Background Sparkle Effect */}
      <div className="absolute inset-0 bg-sparkle opacity-30 pointer-events-none"></div>
    </div>
  );
}

