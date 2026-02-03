'use client';
import { useState } from 'react';
import VideoProcessor from '@/components/VideoProcessor';
import { Youtube, Settings } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState('');

  return (
    <main className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      <header className="w-full flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter">OpenKlap</h1>
        <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </header>

      {!activeUrl ? (
        <div className="w-full max-w-xl text-center space-y-6 mt-20">
          <h2 className="text-5xl font-extrabold">Turn long videos into <span className="text-purple-500">viral clips</span></h2>
          <p className="text-zinc-400 text-lg">Personal use, free forever, processed in your browser.</p>
          <div className="flex gap-2 p-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl focus-within:ring-2 ring-purple-500 transition-all">
            <div className="flex-1 flex items-center px-4 gap-3">
              <Youtube className="text-red-500" />
              <input 
                type="text" 
                placeholder="Paste YouTube URL..."
                className="bg-transparent border-none outline-none w-full py-2"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setActiveUrl(url)}
              className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <VideoProcessor url={activeUrl} onReset={() => setActiveUrl('')} />
      )}
    </main>
  );
}