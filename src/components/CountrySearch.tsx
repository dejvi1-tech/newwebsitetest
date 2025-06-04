import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin } from 'lucide-react';
import { europeanCountries, Country } from '@/data/countries';
import { useLanguage } from '@/contexts/LanguageContext';

interface CountrySearchProps {
  onCountrySelect: (country: Country) => void;
  selectedCountry?: Country | null;
}

const CountrySearch: React.FC<CountrySearchProps> = ({ onCountrySelect, selectedCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return europeanCountries;

    return europeanCountries.filter((country) =>
    country.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.name.al.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, language]);

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    setSearchTerm(country.name[language]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto" data-id="ot08lbzmt" data-path="src/components/CountrySearch.tsx">
      {/* Search Input */}
      <div className="relative" data-id="gz626v5a9" data-path="src/components/CountrySearch.tsx">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-id="hw5cwwyw1" data-path="src/components/CountrySearch.tsx">
          <MapPin className="h-5 w-5 text-gray-400" data-id="jsgkqd8yo" data-path="src/components/CountrySearch.tsx" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t('enter_country')}
          className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-blue-500 focus:outline-none bg-white shadow-md" data-id="0l2ozyysz" data-path="src/components/CountrySearch.tsx" />

        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none" data-id="dzjntyav0" data-path="src/components/CountrySearch.tsx">
          <Search className="h-5 w-5 text-gray-400" data-id="kc4md6tzo" data-path="src/components/CountrySearch.tsx" />
        </div>
      </div>

      {/* Selected Country Display */}
      {selectedCountry && !isOpen &&
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200" data-id="izh8jv234" data-path="src/components/CountrySearch.tsx">

          <div className="flex items-center gap-3" data-id="juqvopj04" data-path="src/components/CountrySearch.tsx">
            <img
            src={selectedCountry.flag}
            alt={selectedCountry.name[language]}
            className="w-8 h-6 object-cover rounded" data-id="xkgim7tj3" data-path="src/components/CountrySearch.tsx" />

            <span className="font-semibold text-blue-800" data-id="ce2j2vszq" data-path="src/components/CountrySearch.tsx">
              {selectedCountry.name[language]}
            </span>
          </div>
        </motion.div>
      }

      {/* Dropdown Results */}
      {isOpen &&
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto" data-id="44t99abng" data-path="src/components/CountrySearch.tsx">

          {filteredCountries.length > 0 ?
        <div className="py-2" data-id="tlf69w8xl" data-path="src/components/CountrySearch.tsx">
              {filteredCountries.map((country) =>
          <button
            key={country.code}
            onClick={() => handleCountrySelect(country)}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors" data-id="0t4zcmpkf" data-path="src/components/CountrySearch.tsx">

                  <div className="flex items-center gap-3" data-id="ehb2qydk8" data-path="src/components/CountrySearch.tsx">
                    <img
                src={country.flag}
                alt={country.name[language]}
                className="w-8 h-6 object-cover rounded" data-id="caqrt86n8" data-path="src/components/CountrySearch.tsx" />

                    <span className="font-medium text-gray-900" data-id="knxlyfrlp" data-path="src/components/CountrySearch.tsx">
                      {country.name[language]}
                    </span>
                  </div>
                </button>
          )}
            </div> :

        <div className="py-4 px-4 text-center text-gray-500" data-id="bhzcufgq5" data-path="src/components/CountrySearch.tsx">
              No countries found
            </div>
        }
        </motion.div>
      }

      {/* Overlay to close dropdown */}
      {isOpen &&
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)} data-id="a98yg81x7" data-path="src/components/CountrySearch.tsx" />

      }
    </div>);

};

export default CountrySearch;