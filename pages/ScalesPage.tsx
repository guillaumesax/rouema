
import React, { useState, useEffect } from 'react';
import { JamTrack, AccidentalPreference } from '../types';
import { transposeNote, formatScaleName, getScaleNotes } from '../utils/musicUtils';

interface ScalesPageProps {
  item: JamTrack;
  onBack: () => void;
}

const ScalesPage: React.FC<ScalesPageProps> = ({ item, onBack }) => {
  const [pref, setPref] = useState<AccidentalPreference>(() => {
    return (localStorage.getItem('accidental_pref') as AccidentalPreference) || 'auto';
  });

  // States for Impro Libre
  const [selectedChords, setSelectedChords] = useState("I - V - VI - IV");
  const [selectedRhythm, setSelectedRhythm] = useState("Chouchou (Accents 2 & 4)");
  const [selectedEmotion, setSelectedEmotion] = useState("Calme & Épuré");

  useEffect(() => {
    localStorage.setItem('accidental_pref', pref);
  }, [pref]);

  const chordOptions = [
    { label: "I - V - VI - IV (Standard Pop)", value: "I - V - VI - IV" },
    { label: "I - VI - IV - V (Sixties)", value: "I - VI - IV - V" },
    { label: "I - bVII - IV (Rock/Blues)", value: "I - bVII - IV" },
    { label: "Im7 - IV7 (Funk Groove)", value: "Im7 - IV7" },
    { label: "ii - V - I (Jazz Focus)", value: "ii - V - I" },
    { label: "IV - V - vi (Soul Power)", value: "IV - V - vi" }
  ];

  const rhythmOptions = [
    { label: "Chouchou (Accents 2 & 4)", value: "Chouchou (Accents 2 & 4)" },
    { label: "Notes Longues (Aérien)", value: "Notes Longues" },
    { label: "Croches Droites (Rock Pulse)", value: "Croches Droites" },
    { label: "Syncopes Funk", value: "Syncopes Funk" },
    { label: "Shuffle Blues", value: "Shuffle Blues" },
    { label: "Staccato Nerveux", value: "Staccato Nerveux" }
  ];

  const emotionOptions = [
    { label: "Calme & Épuré", value: "Calme & Épuré" },
    { label: "Énergique & Brillant", value: "Énergique & Brillant" },
    { label: "Flippant & Sombre", value: "Flippant & Sombre" },
    { label: "Aérien & Spatial", value: "Aérien & Spatial" },
    { label: "Dansant & Festive", value: "Dansant & Festive" },
    { label: "Mélancolique", value: "Mélancolique" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col p-4 md:p-8 animate-in fade-in duration-500 overflow-x-hidden">
      {/* Top Navigation - Extra Visible */}
      <nav className="flex items-center justify-between mb-8 shrink-0">
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-slate-400 hover:text-white transition-all font-black text-sm uppercase tracking-[0.2em]"
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-xl group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <span className="hidden sm:inline">Retour</span>
        </button>

        <div className="flex bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700 shadow-inner">
          {(['#', 'b', 'auto'] as AccidentalPreference[]).map(p => (
            <button
              key={p}
              onClick={() => setPref(p)}
              className={`px-6 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${
                pref === p ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {p === 'auto' ? 'Auto' : p}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Title Section */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-indigo-500/20">
            Partition Digitale
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2 leading-none">
            {item.title}
        </h1>
        {item.artist && (
          <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 tracking-tight">
            {item.artist}
          </div>
        )}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {item.tags.styles.map(s => (
            <span key={s} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest border border-slate-700">{s}</span>
          ))}
          <span className="px-4 py-2 rounded-xl bg-indigo-600/20 text-indigo-400 text-xs font-black uppercase tracking-widest border border-indigo-500/30">{item.tags.tempo}</span>
        </div>
      </header>

      {/* SPECIAL VIEW: IMPRO LIBRE */}
      {item.isSpecial ? (
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-in delay-200">
           {/* Section Accords */}
           <div className="bg-slate-800/40 rounded-[3rem] border border-slate-700/50 p-10 flex flex-col items-center justify-between text-center group hover:border-pink-500/50 transition-all duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-pink-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/20">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
               </div>
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Suite d'accords</h3>
               <div className="text-4xl font-black text-white tracking-tighter mb-8 min-h-[3rem] flex items-center">
                  {selectedChords}
               </div>
             </div>
             
             <div className="w-full relative z-20">
                <div className="text-[10px] font-black text-pink-500/60 uppercase tracking-[0.2em] mb-3 text-center">Faire son choix (cliquer ci-dessous)</div>
                <select 
                  value={selectedChords}
                  onChange={(e) => setSelectedChords(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white py-4 px-4 rounded-2xl text-sm font-bold appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  {chordOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
             </div>
           </div>

           {/* Section Rythmique */}
           <div className="bg-slate-800/40 rounded-[3rem] border border-slate-700/50 p-10 flex flex-col items-center justify-between text-center group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Rythmique</h3>
               <div className="text-4xl font-black text-white tracking-tighter mb-8 min-h-[3rem] flex items-center">
                  {selectedRhythm.split(' ')[0].toUpperCase()}
               </div>
             </div>

             <div className="w-full relative z-20">
                <div className="text-[10px] font-black text-cyan-500/60 uppercase tracking-[0.2em] mb-3 text-center">Faire son choix (cliquer ci-dessous)</div>
                <select 
                  value={selectedRhythm}
                  onChange={(e) => setSelectedRhythm(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white py-4 px-4 rounded-2xl text-sm font-bold appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  {rhythmOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
             </div>
           </div>

           {/* Section Émotions */}
           <div className="bg-slate-800/40 rounded-[3rem] border border-slate-700/50 p-10 flex flex-col items-center justify-between text-center group hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Émotion dominante</h3>
               <div className="text-3xl font-black text-white tracking-tighter mb-8 italic min-h-[3rem] flex items-center">
                  {selectedEmotion}
               </div>
             </div>

             <div className="w-full relative z-20">
                <div className="text-[10px] font-black text-amber-500/60 uppercase tracking-[0.2em] mb-3 text-center">Faire son choix (cliquer ci-dessous)</div>
                <select 
                  value={selectedEmotion}
                  onChange={(e) => setSelectedEmotion(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white py-4 px-4 rounded-2xl text-sm font-bold appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  {emotionOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
             </div>
           </div>
        </div>
      ) : (
        <div className="flex-grow grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* LARGE SCALE GRID */}
          {item.recommendedScales.map((scale, idx) => {
          const concertRoot = transposeNote(scale.root, 0, pref);
          const bbRoot = transposeNote(scale.root, 2, pref);
          const ebRoot = transposeNote(scale.root, 9, pref);
          const isPentatonic = scale.type.includes('pentatonic');

          return (
            <div key={idx} className={`bg-slate-800/40 rounded-[3rem] border p-8 md:p-12 shadow-2xl flex flex-col gap-8 transition-all duration-500 relative overflow-hidden group ${
              isPentatonic 
                ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-indigo-500/10' 
                : 'border-slate-700/50 hover:border-indigo-500/50'
            }`}>
              {/* Background Accent */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full transition-colors ${
                isPentatonic ? 'bg-indigo-600/20' : 'bg-indigo-600/5 group-hover:bg-indigo-600/10'
              }`}></div>
              
              {/* Scale Title - Concert Key */}
              <div className="relative z-10 border-b border-slate-700/50 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Concert / Piano</div>
                  {isPentatonic && (
                    <div className="px-3 py-1 rounded-full bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest shadow-lg animate-pulse">
                      CONSEILLÉ
                    </div>
                  )}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {formatScaleName(concertRoot, scale.type)}
                </h3>
                <div className="text-indigo-300 text-sm font-bold mt-1 tracking-wider">
                    {getScaleNotes(concertRoot, scale.type, pref)}
                </div>
                <p className="text-indigo-400/60 italic text-sm font-bold mt-4 tracking-wide">"{scale.reason}"</p>
              </div>

              {/* Transposition Blocks - HUGE TEXT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Bb Block */}
                <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-slate-700/30 group-hover:border-indigo-500/20 transition-all">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-indigo-500 font-black text-xs tracking-widest">TÉNOR / SOPRANO</span>
                      <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-black border border-indigo-500/20">Bb</span>
                   </div>
                   <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                      {bbRoot}<span className="text-indigo-500 text-3xl ml-1">{scale.type.split(' ')[0]}</span>
                   </div>
                   <div className="text-indigo-300/60 text-xs font-bold mt-1 mb-4 italic">
                      {getScaleNotes(bbRoot, scale.type, pref)}
                   </div>
                   <div className="text-slate-600 text-[10px] font-bold mt-4 uppercase tracking-widest truncate">
                      {scale.type}
                   </div>
                </div>

                {/* Eb Block */}
                <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-slate-700/30 group-hover:border-indigo-500/20 transition-all">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-amber-500 font-black text-xs tracking-widest">ALTO / BARYTON</span>
                      <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-[10px] font-black border border-amber-500/20">Eb</span>
                   </div>
                   <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                      {ebRoot}<span className="text-amber-500 text-3xl ml-1">{scale.type.split(' ')[0]}</span>
                   </div>
                   <div className="text-amber-300/60 text-xs font-bold mt-1 mb-4 italic">
                      {getScaleNotes(ebRoot, scale.type, pref)}
                   </div>
                   <div className="text-slate-600 text-[10px] font-bold mt-4 uppercase tracking-widest truncate">
                      {scale.type}
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* Visual Footer */}
      <footer className="mt-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-black text-[10px] uppercase tracking-[0.4em]">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>Bb Transpose +2</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Eb Transpose +9</span>
            </div>
        </div>
        <span>Jam Wheel Modern • Digital Stand Mode</span>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ScalesPage;
