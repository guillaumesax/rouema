
import { AccidentalPreference } from '../types';

const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTES_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const SOLFEGE_MAP: Record<string, string> = {
  'C': 'Do', 'C#': 'Do#', 'Db': 'Réb',
  'D': 'Ré', 'D#': 'Ré#', 'Eb': 'Mib',
  'E': 'Mi',
  'F': 'Fa', 'F#': 'Fa#', 'Gb': 'Solb',
  'G': 'Sol', 'G#': 'Sol#', 'Ab': 'Lab',
  'A': 'La', 'A#': 'La#', 'Bb': 'Sib',
  'B': 'Si'
};

const SCALE_INTERVALS: Record<string, number[]> = {
  'major': [0, 2, 4, 5, 7, 9, 11],
  'minor': [0, 2, 3, 5, 7, 8, 10],
  'dorian': [0, 2, 3, 5, 7, 9, 10],
  'mixolydian': [0, 2, 4, 5, 7, 9, 10],
  'pentatonic major': [0, 2, 4, 7, 9],
  'pentatonic minor': [0, 3, 5, 7, 10],
  'blues': [0, 3, 5, 6, 7, 10]
};

const FLAT_ROOTS = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];

export const getNoteIndex = (note: string): number => {
  const sharpIndex = NOTES_SHARP.indexOf(note);
  if (sharpIndex !== -1) return sharpIndex;
  return NOTES_FLAT.indexOf(note);
};

export const transposeNote = (
  root: string, 
  semitones: number, 
  pref: AccidentalPreference
): string => {
  const index = getNoteIndex(root);
  if (index === -1) return root;

  const newIndex = (index + semitones) % 12;
  
  let useFlats = false;
  if (pref === 'b') {
    useFlats = true;
  } else if (pref === 'auto') {
    // If we're transposing TO a flat-heavy key, use flats
    // This is a simplification but works for our scope
    const baseNote = NOTES_SHARP[newIndex];
    if (FLAT_ROOTS.includes(baseNote) || (semitones === 2 && ['Bb', 'Eb', 'Ab'].includes(root))) {
       useFlats = true;
    }
    // Specific common jazz keys
    if (['F', 'Bb', 'Eb', 'Ab', 'C'].includes(NOTES_FLAT[newIndex])) useFlats = true;
  }

  return useFlats ? NOTES_FLAT[newIndex] : NOTES_SHARP[newIndex];
};

export const getScaleNotes = (root: string, type: string, pref: AccidentalPreference): string => {
  const rootIndex = getNoteIndex(root);
  const intervals = SCALE_INTERVALS[type] || [];
  
  const notes = intervals.map(interval => {
    const noteIndex = (rootIndex + interval) % 12;
    let useFlats = false;
    
    if (pref === 'b') {
      useFlats = true;
    } else if (pref === 'auto') {
      if (FLAT_ROOTS.includes(root)) useFlats = true;
    }

    const noteName = useFlats ? NOTES_FLAT[noteIndex] : NOTES_SHARP[noteIndex];
    return SOLFEGE_MAP[noteName] || noteName;
  });

  return notes.join(' ').toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
};

export const formatScaleName = (root: string, type: string): string => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  return `${root} ${capitalizedType}`;
};
