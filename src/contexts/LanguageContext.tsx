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
  hero_cta_main: { al: "Shiko Paketat", en: "VIEW PACKAGES" },
  hero_cta_secondary: { al: "Si Funksionon", en: "How It Works" },

  // Trust indicators
  instant_activation: { al: "Aktivizim i menjëhershëm", en: "Instant activation" },
  support_24_7: { al: "Mbështetje 24/7", en: "24/7 Support" },
  money_back: { al: "Garanci kthimi parash", en: "Money back guarantee" },
  no_contracts: { al: "Pa kontrata", en: "No contracts" },

  // Stats
  countries_covered: { al: "Vende të Mbuluara", en: "Countries Covered" },
  satisfied_travelers: { al: "Udhëtarë të Kënaqur", en: "Satisfied Travelers" },
  expert_support: { al: "Mbështetje Eksperte", en: "Expert Support" },

  // Package Cards
  most_popular: { al: "Më i Popullarizuar", en: "Most Popular" },
  buy_now: { al: "Bli tani", en: "BUY NOW" },

  // Search
  enter_country: { al: "Shkruaj vendin", en: "Enter country" },
  search_country: { al: "Kërko vendin", en: "Search country" },
  select_destination: { al: "Zgjidh Destinacionin Tënd", en: "Select Your Destination" },
  choose_destination: { al: "Zgjidh vendin e destinacionit dhe zgjedh planin perfekt të të dhënave për udhëtimin tënd", en: "Choose your destination country and select the perfect data plan for your trip" },
  esim_plans_for: { al: "Planet eSIM për", en: "eSIM Plans for" },
  choose_perfect_plan: { al: "Zgjidh planin perfekt të të dhënave për udhëtimin tënd", en: "Choose the perfect data plan for your trip" },

  // Navigation
  back_to_english: { al: "English", en: "Shqip" },
  packages: { al: "Paketat", en: "Packages" },
  how_it_works: { al: "Si Funksionon", en: "How It Works" },
  coverage: { al: "Mbulimi", en: "Coverage" },
  reviews: { al: "Recensionet", en: "Reviews" },
  support: { al: "Mbështetja", en: "Support" },

  // Checkout
  checkout: { al: "Blerja", en: "Checkout" },
  payment_details: { al: "Detajet e Pagesës", en: "Payment Details" },
  card_number: { al: "Numri i Kartës", en: "Card Number" },
  expiry_date: { al: "Data e Skadimit", en: "Expiry Date" },
  cvv: { al: "CVV", en: "CVV" },
  cardholder_name: { al: "Emri i Pronarit të Kartës", en: "Cardholder Name" },
  complete_purchase: { al: "Përfundo Blerjen", en: "Complete Purchase" },

  // Country Info Modal
  what_includes_packages: { al: "Çfarë përfshijnë paketat?", en: "What do the packages include?" },
  data_only_description: { al: "Paketat Data Only përfshijnë internet me shpejtësi të lartë në të gjithë Europën, duke përfshirë Zvicër, Angli dhe Turqi.", en: "Data Only packages include high-speed internet throughout Europe, including Switzerland, England and Turkey." },
  supported_countries: { al: "Shtetet e përfshira tek paketat Data Only (75 shtete):", en: "Countries included in Data Only packages (75 countries):" },
  view_all_countries: { al: "Shiko të gjitha vendet", en: "View all countries" },
  close: { al: "Mbyll", en: "Close" },

  // WhatsApp
  contact_whatsapp: { al: "Kontakto në WhatsApp", en: "Contact on WhatsApp" },
  whatsapp_message: { al: "Përshëndetje! Kam nevojë për ndihmë me eSIM planet.", en: "Hello! I need help with eSIM plans." },

  // Package features
  data_plan: { al: "Plan të Dhënash", en: "Data Plan" },
  one_time: { al: "një herë", en: "one-time" },
  high_speed_data: { al: "Të dhëna me shpejtësi të lartë", en: "High-Speed Data" },
  valid_for: { al: "E vlefshme për", en: "Valid for" },
  coverage_country: { al: "Mbulimi:", en: "Coverage:" },
  instant_activation_feature: { al: "✓ Aktivizim i menjëhershëm", en: "✓ Instant activation" },
  no_physical_sim: { al: "✓ Pa SIM fizik të kërkuar", en: "✓ No physical SIM required" },
  customer_support: { al: "✓ Mbështetje klienti 24/7", en: "✓ 24/7 customer support" },
  hotspot_sharing: { al: "✓ Ndarje hotspot e aktivizuar", en: "✓ Hotspot sharing enabled" },

  // Why choose section
  why_choose_esim: { al: "Pse të zgjidhësh eSIM-in tonë?", en: "Why Choose Our eSIM?" },
  lightning_fast: { al: "Shpejtësi Rrufesh", en: "Lightning Fast" },
  high_speed_networks: { al: "Rrjete 4G/5G me shpejtësi të lartë", en: "High-speed 4G/5G networks" },
  instant_setup: { al: "Konfigurimi i Menjëhershëm", en: "Instant Setup" },
  active_within_minutes: { al: "Aktiv brenda minutash", en: "Active within minutes" },
  global_coverage_title: { al: "Mbulim Global", en: "Global Coverage" },
  countries_supported: { al: "200+ vende të mbështetura", en: "200+ countries supported" },

  // Scroll indicator
  scroll_explore: { al: "Lëviz poshtë për të eksploruar ↓", en: "Scroll down to explore ↓" }
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
    <LanguageContext.Provider value={{ language, toggleLanguage, t }} data-id="ftfn7gt0r" data-path="src/contexts/LanguageContext.tsx">
      {children}
    </LanguageContext.Provider>);

};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};