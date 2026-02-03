import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="bg-slate-950 shadow-lg border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">🎬 ClipMaker</div>
          <div className="text-sm text-slate-400">Create Short-Form Clips in Seconds</div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to ClipMaker</h1>
          <p className="text-xl text-slate-400">Free video clip extraction tool</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
            <div className="text-4xl mb-4">📤</div>
            <h2 className="text-xl font-semibold text-white mb-2">Upload</h2>
            <p className="text-slate-400">Upload your video or paste a YouTube URL</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
            <div className="text-4xl mb-4">✨</div>
            <h2 className="text-xl font-semibold text-white mb-2">Detect</h2>
            <p className="text-slate-400">Auto-detect engaging clips with AI</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
            <div className="text-4xl mb-4">📥</div>
            <h2 className="text-xl font-semibold text-white mb-2">Export</h2>
            <p className="text-slate-400">Download clips in multiple formats</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Start Creating
          </button>
          <p className="mt-4 text-slate-400">Build status: {count}</p>
        </div>
      </main>
    </div>
  )
}

export default App
