import { createContext, useContext, useState } from 'react';
import { makeT } from '../i18n/index.js';

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = makeT(lang);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
