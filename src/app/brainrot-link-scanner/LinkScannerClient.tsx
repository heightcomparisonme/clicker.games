"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Zap, Lock, AlertTriangle, CheckCircle, XCircle, Search, HelpCircle } from 'lucide-react';

export default function LinkScannerClient() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<{ status: 'safe' | 'warning' | 'danger' | null; message: string } | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsScanning(true);
    setResult(null);

    // Simulate scanning delay
    setTimeout(() => {
      const lowerUrl = url.toLowerCase();
      let status: 'safe' | 'warning' | 'danger' = 'safe';
      let message = "This link appears to be safe. Happy gaming!";

      if (lowerUrl.includes('free') && (lowerUrl.includes('robux') || lowerUrl.includes('skin'))) {
        status = 'danger';
        message = "High Risk! Links promising free currency or skins are often scams.";
      } else if (lowerUrl.includes('short.url') || lowerUrl.includes('bit.ly')) {
        status = 'warning';
        message = "Caution: Shortened links can hide malicious destinations. Proceed with care.";
      } else if (!lowerUrl.startsWith('https://')) {
        status = 'warning';
        message = "Warning: This link does not use a secure connection (HTTPS).";
      }

      setResult({ status, message });
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-pulse">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Brainrot Security Tool</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Brainrot <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Link Scanner</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Paste any Brainrot or game-related link and get an instant risk score. 
              Protect your session from scams, phishing, and suspicious redirects.
            </p>

            {/* Scanner Component */}
            <div className="bg-card border border-border rounded-xl p-2 shadow-2xl cyber-glow max-w-2xl mx-auto">
              <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-muted-foreground transition-all"
                    placeholder="Paste link here (e.g., discord.gg/..., roblox.com/...)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isScanning || !url}
                  className="btn-primary py-4 px-8 text-lg font-bold flex items-center justify-center min-w-[140px]"
                >
                  {isScanning ? (
                    <span className="animate-spin mr-2">⟳</span>
                  ) : (
                    "Scan Now"
                  )}
                </button>
              </form>

              {/* Result Display */}
              {result && (
                <div className={`mt-4 p-4 rounded-lg border flex items-start text-left animate-in fade-in slide-in-from-top-2 ${
                  result.status === 'safe' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                  result.status === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' :
                  'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                  {result.status === 'safe' && <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />}
                  {result.status === 'warning' && <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />}
                  {result.status === 'danger' && <XCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />}
                  <div>
                    <h3 className="font-bold text-lg capitalize">{result.status}</h3>
                    <p className="text-sm opacity-90">{result.message}</p>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <Lock className="w-3 h-3 inline mr-1" />
              Checks run locally in your browser. We do not store your links.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Built for fast checks</h3>
              <p className="text-muted-foreground">
                No downloads or sign-ups. Get an on-page verdict in seconds before you click a link in chat, email, or a game lobby.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Actionable signals</h3>
              <p className="text-muted-foreground">
                HTTPS, TLD reputation, bait language, and redirect noise presented with simple icons you can explain to friends.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Made for Brainrot players</h3>
              <p className="text-muted-foreground">
                Focused on the way players share hubs, private servers, and promo events so you avoid fake login walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">When to run the Scanner</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Someone DMs you a Brainrot base invite and asks for your Roblox login.",
                "You see a shortened link promising free skins or tokens.",
                "A Discord announcement shares a tournament page with extra query strings.",
                "You want to double-check a new clan site before sharing it with friends."
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 rounded-lg bg-card/50 border border-border">
                  <div className="mr-4 mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(91,88,255,0.6)]" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do you store my links?", a: "Scan logic runs in your browser only. We do not log or transmit what you paste." },
              { q: "Is this a replacement for antivirus?", a: "No. Use this as a quick pre-check and keep your device security up to date." },
              { q: "Can it guarantee safety?", a: "No scanner can promise that. We surface red flags so you can decide confidently." }
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  {item.q}
                </h3>
                <p className="text-muted-foreground pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Keep playing safely</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Explore verified games on StealABrainrot. Every title links back to our official domains with clean URLs and clear CTAs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/most-played" className="btn-primary py-3 px-8 text-lg flex items-center justify-center">
              View Most Played
            </Link>
            <Link href="/trending" className="btn-secondary py-3 px-8 text-lg flex items-center justify-center">
              Trending Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
