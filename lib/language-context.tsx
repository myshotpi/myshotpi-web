"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language =
  | "en"
  | "ko"
  | "jp"
  | "cn"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ru"
  | "ar"
  | "hi"
  | "th"
  | "vi"
  | "id"
  | "tr"
  | "pl"
  | "nl"
  | "sv"
  | "da"
  | "fi"
  | "cs"
  | "hu"
  | "ro"
  | "el";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}