import { Youtube, Zap, Scissors, Cloud } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
        <Cloud size={16} /> Deployed on Cloudflare
      </div>
      <h1 className="text-6xl font-black mb-6 tracking-tight">
        Turn long videos into <span className="text-blue-500">viral clips</span>
      </h1>
      <p className="text-xl text-slate-400 mb-12 max-w-2xl">
        The open-source, free-forever alternative to Klap. No subscriptions.
        Uses Cloudflare Workers AI and R2.
      </p>
      
      <div className="w-full max-w-xl flex gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl mb-16">
        <input 
          type="text" 
          placeholder="Paste YouTube URL here..." 
          className="flex-1 bg-transparent px-4 py-3 outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
          <Zap size={18} fill="currentColor" /> Generate
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { icon: <Youtube className="text-red-500" />, title: "Import YouTube", desc: "Just paste a link, we handle the extraction and metadata." },
          { icon: <Zap className="text-yellow-500" />, title: "AI Analysis", desc: "Cloudflare Workers AI finds the most engaging segments automagically." },
          { icon: <Scissors className="text-blue-500" />, title: "Auto-Reframe", desc: "FFmpeg.wasm crops your landscape video to 9:16 vertical for TikTok/Shorts." }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}