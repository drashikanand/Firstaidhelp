import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowLeft, Check, X, Phone } from "lucide-react";
import { firstAidTopics } from "../data/firstAidData";

const AMBULANCE_NUMBER = "9513945297";

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = firstAidTopics.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!topic) {
    return (
      <div className="app-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/80 text-lg">Topic not found.</p>
          <Link to="/" className="mt-4 inline-block text-sky-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = Icons[topic.icon] || Icons.HeartPulse;

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

      <div className="max-w-4xl mx-auto px-6 pt-20 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="back-pill mx-auto flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Previous Page</span>
        </button>

        <div className="mt-8 hero-card rounded-3xl p-8 md:p-12 fade-up">
          <div className="flex items-center gap-4 pb-6 border-b border-white/10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${topic.color} border border-white/10`}>
              <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{topic.title}</h1>
          </div>

          {/* DO section */}
          <div className="mt-8 do-block rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-emerald-400 text-lg">→</span>
              <h2 className="text-emerald-400 font-bold tracking-widest text-lg">DO</h2>
            </div>
            <ul className="space-y-3">
              {topic.dos.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'T section */}
          <div className="mt-6 dont-block rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-rose-400 text-lg">→</span>
              <h2 className="text-rose-400 font-bold tracking-widest text-lg">DON'T</h2>
            </div>
            <ul className="space-y-3">
              {topic.donts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/90">
                  <X className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="back-pill flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Previous Page</span>
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          For emergencies, call ambulance: <span className="text-white/70">{AMBULANCE_NUMBER}</span>
        </p>
      </div>
    </div>
  );
}
