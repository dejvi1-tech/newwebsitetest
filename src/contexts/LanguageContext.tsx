import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    al: string;
    en: string;
  };
}

const translations: Translations = {
  // Hero Section
  hero_badge: { al: "🌍 I besuar nga 5M+ udhëtarë në botë", en: "🌍 Trusted by 5M+ travelers worldwide" },
  hero_title_1: { al: "Qëndro i Lidhur", en: "Stay Connected" },
  hero_title_2: { al: "Kudo", en: "Anywhere" },
  hero_description: { al: "Merr lidhjen e të dhënave menjëherë në 200+ vende me planet tona premium eSIM. Pa karta SIM fizike, pa tarifa roaming, pa telashe. Vetëm lidhje e qetë.", en: "Get instant data connectivity in 200+ countries with our premium eSIM plans. No physical SIM cards, no roaming fees, no hassle. Just seamless connection." },
  hero_cta_main: { al: "SHIKO PAKETAT", en: "VIEW PACKAGES" },
  hero_cta_secondary: { al: "Si Funksionon", en: "How It Works" },

  // Navigation
  back_to_english: { al: "English", en: "Shqip" },
  packages: { al: "Paketat", en: "Packages" },
  how_it_works: { al: "Si Funksionon", en: "How It Works" },
  about_us: { al: "Rreth Nesh", en: "About Us" },
  support: { al: "Mbështetja", en: "Support" },

  // Features Section
  why_choose_esim: { al: "Pse të Zgjidhni eSIM-in Tonë", en: "Why Choose Our eSIM" },
  instant_activation: { al: "Aktivizim i Menjëhershëm", en: "Instant Activation" },
  global_coverage: { al: "Mbulim Global", en: "Global Coverage" },
  cost_effective: { al: "Kosto Efektive", en: "Cost Effective" },
  secure_reliable: { al: "I Sigurt & i Besueshëm", en: "Secure & Reliable" },

  // Coverage Section
  coverage_title: { al: "Mbulim Global i Rrjetit", en: "Global Network Coverage" },
  coverage_description: { al: "Qëndroni të lidhur në më shumë se 200 vende me partneritetin tonë të rrjetit premium.", en: "Stay connected across 200+ countries with our premium network partnerships." },
  
  // Package Selection
  select_destination: { al: "Zgjidhni Destinacionin", en: "Select Destination" },
  choose_plan: { al: "Zgjidhni Planin", en: "Choose Plan" },
  most_popular: { al: "Më i Popullarizuar", en: "Most Popular" },
  buy_now: { al: "BLEJ TANI", en: "BUY NOW" },

  // Support
  need_help: { al: "Ju Nevojitet Ndihmë?", en: "Need Help?" },
  contact_support: { al: "Kontaktoni Mbështetjen", en: "Contact Support" },
  faq_title: { al: "Pyetje të Shpeshta", en: "Frequently Asked Questions" },

  // Checkout
  checkout: { al: "Blerja", en: "Checkout" },
  payment_details: { al: "Detajet e Pagesës", en: "Payment Details" },
  complete_purchase: { al: "Përfundo Blerjen", en: "Complete Purchase" },
  card_number: { al: "Numri i Kartës", en: "Card Number" },
  expiry_date: { al: "Data e Skadimit", en: "Expiry Date" },
  cvv: { al: "CVV", en: "CVV" },
  cardholder_name: { al: "Emri i Mbajtësit të Kartës", en: "Cardholder Name" },

  // About Us
  about_title: { al: "Rreth Nesh", en: "About Us" },
  our_mission: { al: "Misioni Ynë", en: "Our Mission" },
  our_values: { al: "Vlerat Tona", en: "Our Values" },
  our_team: { al: "Ekipi Ynë", en: "Our Team" },

  // WhatsApp
  contact_whatsapp: { al: "Na Kontaktoni në WhatsApp", en: "Contact us on WhatsApp" },
  whatsapp_message: { al: "Përshëndetje! Kam nevojë për ndihmë me eSIM.", en: "Hello! I need help with eSIM." }
};

interface LanguageContextType {
  language: 'al' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode;}> = ({ children }) => {
  const [language, setLanguage] = useState<'al' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferred-language') as 'al' | 'en' || 'al';
    }
    return 'al';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'al' ? 'en' : 'al';
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-language', newLang);
      }
      return newLang;
    });
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};