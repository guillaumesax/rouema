import { JamTrack } from '../types';

export const JAM_TRACKS: JamTrack[] = [
  {
    id: 'another-brick-in-the-wall',
    title: 'Another Brick In The Wall',
    artist: 'Pink Floyd',
    tags: { styles: ['Rock'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'D', type: 'dorian', reason: 'Le riff mythique est en Ré Dorien' },
      { root: 'D', type: 'pentatonic minor', reason: 'Pour les solos blues-rock de Gilmour' }
    ]
  },
  {
    id: 'another-one-bites-the-dust',
    title: 'Another One Bites The Dust',
    artist: 'Queen',
    tags: { styles: ['Rock', 'Funk'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'E', type: 'minor', reason: 'Basse percutante en Mi mineur' },
      { root: 'E', type: 'pentatonic minor', reason: 'Indispensable pour le groove rock/funk' }
    ]
  },
  {
    id: 'born-in-the-usa',
    title: 'Born In The USA',
    artist: 'Bruce Springsteen',
    tags: { styles: ['Rock'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'B', type: 'major', reason: 'Tonalité épique en Si majeur' },
      { root: 'B', type: 'pentatonic major', reason: 'L\'approche sûre pour le rock US' }
    ]
  },
  {
    id: 'come-together',
    title: 'Come Together',
    artist: 'The Beatles',
    tags: { styles: ['Rock', 'Blues'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'D', type: 'minor', reason: 'Vibe bluesy en Ré mineur' },
      { root: 'D', type: 'pentatonic minor', reason: 'La base pour improviser sur ce riff sombre' },
      { root: 'D', type: 'blues', reason: 'Parfait pour le riff de basse et les solos' }
    ]
  },
  {
    id: 'hey-joe',
    title: 'Hey Joe',
    artist: 'Jimi Hendrix',
    tags: { styles: ['Rock', 'Blues'], tempo: 'Lent', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'E', type: 'pentatonic minor', reason: 'La base absolue du style Hendrix' },
      { root: 'E', type: 'blues', reason: 'Incontournable pour le style Hendrix' }
    ]
  },
  {
    id: 'no-woman-no-cry',
    title: 'No Woman No Cry',
    artist: 'Bob Marley',
    tags: { styles: ['Reggae'], tempo: 'Lent', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'C', type: 'major', reason: 'Tonalité pure et lumineuse en Do majeur' },
      { root: 'C', type: 'pentatonic major', reason: 'Pour une impro mélodique et joyeuse' }
    ]
  },
  {
    id: 'purple-rain',
    title: 'Purple Rain',
    artist: 'Prince',
    tags: { styles: ['Pop', 'Rock'], tempo: 'Lent', complexity: 'Plusieurs sections' },
    recommendedScales: [
      { root: 'Bb', type: 'major', reason: 'Ballade majestueuse en Sib majeur' },
      { root: 'Bb', type: 'pentatonic major', reason: 'Pour chanter avec votre guitare' }
    ]
  },
  {
    id: 'smells-like-teen-spirit',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    tags: { styles: ['Rock'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'F', type: 'minor', reason: 'L\'énergie grunge brute en Fa mineur' },
      { root: 'F', type: 'pentatonic minor', reason: 'Le son Kurt Cobain : simple et efficace' }
    ]
  },
  {
    id: 'still-got-the-blues',
    title: 'Still Got The Blues',
    artist: 'Gary Moore',
    tags: { styles: ['Blues', 'Rock'], tempo: 'Lent', complexity: 'Plusieurs sections' },
    recommendedScales: [
      { root: 'A', type: 'minor', reason: 'Mélodie lyrique en La mineur' },
      { root: 'A', type: 'pentatonic minor', reason: 'Pour le son blues-rock saturé typique' },
      { root: 'A', type: 'dorian', reason: 'Pour les accords plus sophistiqués' }
    ]
  },
  {
    id: 'billie-jean',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    tags: { styles: ['Pop', 'Funk'], tempo: 'Medium', complexity: 'Plusieurs sections' },
    recommendedScales: [
      { root: 'F#', type: 'dorian', reason: 'Basse mythique et accords en Fa# Dorien' },
      { root: 'F#', type: 'pentatonic minor', reason: 'Efficace sur le groove disco-funk' }
    ]
  },
  {
    id: 'cocaine',
    title: 'Cocaine',
    artist: 'Eric Clapton',
    tags: { styles: ['Rock', 'Blues'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'E', type: 'pentatonic minor', reason: 'Standard rock en Mi mineur pentatonique' },
      { root: 'E', type: 'blues', reason: 'Pour l\'aspect bluesy de Clapton' }
    ]
  },
  {
    id: 'imagine',
    title: 'Imagine',
    artist: 'John Lennon',
    tags: { styles: ['Pop'], tempo: 'Lent', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'C', type: 'major', reason: 'Hymne à la paix en Do majeur' },
      { root: 'C', type: 'pentatonic major', reason: 'Simplicité et émotion' }
    ]
  },
  {
    id: 'i-will-survive',
    title: 'I Will Survive',
    artist: 'Gloria Gaynor',
    tags: { styles: ['Pop', 'Soul'], tempo: 'Rapide', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'A', type: 'minor', reason: 'Cycle de quintes classique en La mineur' },
      { root: 'A', type: 'pentatonic minor', reason: 'Idéal pour improviser sans risque sur le tempo rapide' }
    ]
  },
  {
    id: 'sweet-dreams',
    title: 'Sweet Dreams',
    artist: 'Eurythmics',
    tags: { styles: ['Pop', 'Electro'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: [
      { root: 'C', type: 'minor', reason: 'Riff synthétique sombre en Do mineur' },
      { root: 'C', type: 'pentatonic minor', reason: 'Pour rester dans le drive du synthé' }
    ]
  },
  {
    id: 'while-my-guitar-gently-weeps',
    title: 'While My Guitar Gently Weeps',
    artist: 'The Beatles',
    tags: { styles: ['Rock'], tempo: 'Lent', complexity: 'Plusieurs sections' },
    recommendedScales: [
      { root: 'A', type: 'minor', reason: 'Transition entre La mineur et La majeur' },
      { root: 'A', type: 'pentatonic minor', reason: 'Parfait pour les solos à la Clapton' }
    ]
  },
  {
    id: 'impro-libre',
    title: 'Impro Libre',
    artist: 'Concept de Jam',
    isSpecial: true,
    tags: { styles: ['Blues', 'Funk', 'Rock', 'Soul'], tempo: 'Medium', complexity: 'Séquence simple' },
    recommendedScales: []
  }
];
