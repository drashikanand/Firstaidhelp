import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Phone, ShieldPlus, ArrowUpRight, Sparkles } from "lucide-react";
import { firstAidTopics } from "../data/firstAidData";

const AMBULANCE_NUMBER = "9513945297";

// Shuffled display order so listing differs from the source reference
const SHUFFLED_ORDER = [
  "cpr", "snake-bite", "burn-injury", "heat-stroke", "electric-shock",
  "drowning", "chest-pain", "stroke", "head-injury", "spinal-injury",
  "anaphylaxis", "fainting", "bleeding-wound", "cut-injury", "eye-injury",
  "animal-bite", "insect-bite", "poisoning", "toxic-gas", "chemical-burn",
  "toxic-chemical", "airway-obstruction", "breathing-difficulties",
  "convulsion", "hypoglycemia", "dehydration", "fever", "dizziness",
  "bleeding-nose", "bleeding-ear", "abdominal-injury", "joint-bone-trauma",
  "amputation", "frostbite", "altitude-sickness", "cpr-aed",
  "general-guidelines", "oshwc-regulations"
];

const orderedTopics = SHUFFLED_ORDER
  .map((id) => firstAidTopics.find((t) => t.id === id))
  .filter(Boolean);

export default function Home() {
  return (
    <div className="app-bg min-h-screen">
      {/* Top right emergency pill */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
        <a
          href={`tel:${AMBULANCE_NUMBER}`}
          className="emergency-pill flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
        >
          <span className="text-base leading-none" aria-hidden="true">🚑</span>
          <span>{AMBULANCE_NUMBER}</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Hero - left-aligned, magazine-style */}
        <section className="grid md:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10 fade-up">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70 mb-6">
              <ShieldPlus className="w-3.5 h-3.5 text-sky-400" />
              <span>Workplace Safety</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight uppercase">
              First Aid Guidelines for
              <span className="block bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Common Medical Emergencies
              </span>
              at Workplace
            </h1>
          </div>
          <div className="md:col-span-4 md:pl-6 md:border-l border-white/10">
            <p className="text-white/65 text-sm md:text-base leading-relaxed">
              A concise reference of step‑by‑step DO's and DON'Ts for the most
              common medical emergencies a workforce may encounter. Tap any
              card to view the protocol.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{orderedTopics.length} evidence‑based protocols</span>
            </div>
          </div>
        </section>

        {/* Grid - horizontal cards with icon, title, arrow */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {orderedTopics.map((topic, idx) => {
            const Icon = Icons[topic.icon] || Icons.HeartPulse;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                style={{ animationDelay: `${Math.min(idx * 30, 600)}ms` }}
                className="row-card group rounded-2xl p-5 flex items-center gap-4 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${topic.color} border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono tracking-widest text-white/40 mb-1">{num}</div>
                  <h3 className="text-sm md:text-[15px] font-semibold text-white leading-snug truncate">
                    {topic.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </section>

        {/* Trademark */}
        <section className="mt-20 pt-10 border-t border-white/10">
          <div className="hero-card rounded-2xl px-6 py-8 md:px-10 md:py-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>Crafted by</span>
            </div>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Latoshi Satoshigene
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/40">&trade;</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-white/40">
          <p>For medical emergencies, call ambulance: <span className="text-white/70">{AMBULANCE_NUMBER}</span></p>
        </footer>
      </div>
    </div>
  );
}
