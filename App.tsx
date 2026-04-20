
import React, { useState, useEffect } from 'react';
import WheelPage from './pages/WheelPage';
import ScalesPage from './pages/ScalesPage';
import { JamTrack } from './types';
import { JAM_TRACKS } from './data/tunes';

const App: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<JamTrack | null>(null);

  useEffect(() => {
    // Basic persistent storage for the current session's selected track
    const savedId = localStorage.getItem('last_selected_track_id');
    if (savedId) {
      const found = JAM_TRACKS.find(s => s.id === savedId);
      if (found) setSelectedTrack(found);
    }
  }, []);

  const handleSelect = (item: JamTrack) => {
    setSelectedTrack(item);
    localStorage.setItem('last_selected_track_id', item.id);
  };

  const handleBack = () => {
    setSelectedTrack(null);
    localStorage.removeItem('last_selected_track_id');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {selectedTrack ? (
        <ScalesPage item={selectedTrack} onBack={handleBack} />
      ) : (
        <WheelPage onSelect={handleSelect} />
      )}
      
      <style>{`
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-short {
          animation: bounce-short 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
