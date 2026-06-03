import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Phone } from "lucide-react";
import { firstAidTopics } from "../data/firstAidData";
import { Input } from "../components/ui/input";

const AMBULANCE_NUMBER = "9513945297";

const LANGUAGES = [
  "English", "Assamese (অসমীয়া)", "Bengali (বাংলা)", "Bodo (बड़ो)", "Dogri (डोगरी)",
  "Goan Konkani (गोवा कोंकणी)", "Gujarati (ગુજરાતી)", "Hindi (हिन्दी)",
  "Kannada (ಕನ್ನಡ)", "Kashmiri (कश्मीरी)", "Maithili (मैथिली)", "Malayalam (മലയാളം)",
  "Manipuri (মণিপুরী)", "Marathi (मराठी)", "Nepali (नेपाली)", "Odia (ଓଡ଼ିଆ)",
  "Punjabi (ਪੰਜਾਬੀ)", "Sanskrit (संस्कृत)", "Santali (संताली)", "Sindhi (سنڌي)",
  "Tamil (தமிழ்)", "Telugu (తెలుగు)", "Urdu (اردو)"
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return firstAidTopics;
    return firstAidTopics.filter((t) => t.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="app-bg min-h-screen">
      {/* Top right pills */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="pill flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm"
          >
            <Globe className="w-4 h-4 text-sky-400" />
            <span>Translate</span>
            <span className="ml-1 text-xs text-white/60">अ/A</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-[#0f0f17]/95 backdrop-blur-md shadow-2xl py-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLanguage(l); setLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${language === l ? "text-sky-400" : "text-white/80"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white leading-tight tracking-tight">
            Evidence-Based Guidelines of First Aid for
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent"> Common Medical Emergencies </span>
            at Workplace
          </h1>
          <p className="mt-5 text-center text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Quick, reliable first aid guidance for workplace safety. Tap any card below to view step-by-step DO's and DON'Ts.
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
          {filtered.map((topic, idx) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              style={{ animationDelay: `${Math.min(idx * 40, 600)}ms` }}
              className="card-glow rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[160px] cursor-pointer"
            >
              <div className="text-4xl mb-3" aria-hidden="true">
                {topic.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white leading-tight">
                {topic.title}
              </h3>
            </Link>
          ))}
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
