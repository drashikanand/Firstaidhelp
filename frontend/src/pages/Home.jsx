import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Search, Phone, ShieldPlus } from "lucide-react";
import { firstAidTopics } from "../data/firstAidData";
import { Input } from "../components/ui/input";

const AMBULANCE_NUMBER = "9513945297";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return firstAidTopics;
    return firstAidTopics.filter((t) => t.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="app-bg min-h-screen">
      {/* Top right emergency pill */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
        <a
          href={`tel:${AMBULANCE_NUMBER}`}
          className="emergency-pill flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
        >
          <Phone className="w-4 h-4" />
          <span>{AMBULANCE_NUMBER}</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Hero */}
        <div className="hero-card rounded-3xl px-8 py-12 md:px-12 md:py-16 fade-up">
          <div className="flex items-center justify-center mb-5">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/70">
              <ShieldPlus className="w-4 h-4 text-sky-400" />
              <span>Workplace Safety</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white leading-[1.15] tracking-tight uppercase">
            First Aid Guidelines for
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent"> Common Medical Emergencies </span>
            at Workplace
          </h1>
          <p className="mt-5 text-center text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Quick, reliable first aid guidance. Tap any card below to view step-by-step DO's and DON'Ts.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 max-w-3xl mx-auto relative fade-up">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for first aid topics"
            className="search-input h-14 pl-14 pr-5 rounded-full text-base"
          />
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 stagger">
          {filtered.map((topic, idx) => {
            const Icon = Icons[topic.icon] || Icons.HeartPulse;
            return (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                style={{ animationDelay: `${Math.min(idx * 35, 600)}ms` }}
                className="card-glow rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[170px] cursor-pointer group"
              >
                <div className={`mb-4 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${topic.color} border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white leading-tight">
                  {topic.title}
                </h3>
              </Link>
            );
          })}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-white/50 py-12">
              No topics matched your search.
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-white/40">
          <p>For medical emergencies, call ambulance: <span className="text-white/70">{AMBULANCE_NUMBER}</span></p>
          <p className="mt-2">© First Aid Industry — Evidence-Based Guidelines</p>
        </footer>
      </div>
    </div>
  );
}
