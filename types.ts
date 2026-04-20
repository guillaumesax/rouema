
export type Style = 'Pop' | 'Rock' | 'Funk' | 'Soul' | 'R&B' | 'Electro' | 'Reggae' | 'Metal' | 'Blues';
export type Tempo = 'Lent' | 'Medium' | 'Rapide';
export type Complexity = 'Séquence simple' | 'Plusieurs sections';
export type AccidentalPreference = '#' | 'b' | 'auto';

export interface ScaleRecommendation {
  root: string; // The note in Concert key (e.g., 'C', 'Eb')
  type: 'major' | 'minor' | 'blues' | 'pentatonic major' | 'pentatonic minor' | 'dorian' | 'mixolydian';
  reason: string;
}

export interface JamTrack {
  id: string;
  title: string;
  artist?: string;
  isSpecial?: boolean;
  tags: {
    styles: Style[];
    tempo: Tempo;
    complexity: Complexity;
  };
  recommendedScales: ScaleRecommendation[];
}

export interface Filters {
  styles: Style[];
  tempo: Tempo[];
  complexity: Complexity[];
}
