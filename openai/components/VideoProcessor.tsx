'use client';
import { useState, useEffect } from 'react';
import { useFFmpeg } from '@/hooks/useFFmpeg';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function VideoProcessor({ url, onReset }: { url: string; onReset: () => void }) {
  const { load, ready, progress } = useFFmpeg();
  const [status, setStatus] = useState('initializing');

  useEffect(() => {
    load().then(() => setStatus('ready'));
  }, []);

  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {status === 'ready' ? <CheckCircle2 className="text-green-500" /> : <Loader2 className="animate-spin text-purple-500" />}
          <h3 className="font-semibold text-xl">Processing Video</h3>
        </div>
        <button onClick={onReset} className="text-sm text-zinc-500 hover:text-white">Cancel</button>
      </div>

      <div className="space-y-2">
         <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
         </div>
         <p className="text-xs text-zinc-500 text-right">{status === 'ready' ? 'FFmpeg Loaded' : `Transcribing & Cropping... ${Math.round(progress)}%`}</p>
      </div>

      <div className="aspect-[9/16] max-h-[500px] mx-auto bg-black rounded-2xl flex items-center justify-center border border-zinc-800 shadow-inner">
         <p className="text-zinc-600 text-sm">Video Preview will appear here</p>
      </div>
    </div>
  );
}