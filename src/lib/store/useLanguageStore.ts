import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, translations } from '../i18n/translations';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'vi',
      setLanguage: (lang) => set({ language: lang }),
      t: (key) => {
        const { language } = get();
        const keys = key.split('.');
        let result: any = translations[language];
        
        for (const k of keys) {
          if (result && typeof result === 'object' && k in result) {
            result = result[k];
          } else {
            return key; // Fallback to key if not found
          }
        }
        return typeof result === 'string' ? result : key;
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
