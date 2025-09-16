export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center animate-fadeInUp">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-glow">
          Welcome Coop!
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
        </div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 animate-pulse">
          🎉 Ready to build something amazing! 🎉
        </p>
      </div>
    </div>
  );
}


