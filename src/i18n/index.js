import es from './es.js';

export const UI_LANGS = [
  { code: 'ES', key: 'es', name: 'Español' },
  { code: 'PT', key: 'pt', name: 'Português' },
  { code: 'EN', key: 'en', name: 'English' },
  { code: 'IT', key: 'it', name: 'Italiano' },
  { code: 'FR', key: 'fr', name: 'Français' },
];

const DICTS = { es };

export function makeT(langKey) {
  const dict = DICTS[langKey] || es;
  return (key) => dict[key] ?? es[key] ?? key;
}
