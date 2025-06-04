import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Smartphone, X, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigationItems = [
  { name: language === 'al' ? 'Paketat' : 'Packages', href: '#packages' },
  { name: language === 'al' ? 'Si Funksionon' : 'How It Works', href: '#how-it-works' },
  { name: language === 'al' ? 'Mbulimi' : 'Coverage', href: '#coverage' },
  { name: language === 'al' ? 'Recensionet' : 'Reviews', href: '#testimonials' },
  { name: language === 'al' ? 'Mbështetja' : 'Support', href: '#faq' }];


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" data-id="rehmses78" data-path="src/components/Header.tsx">

      <div className="container mx-auto px-4" data-id="flldixu36" data-path="src/components/Header.tsx">
        <div className="flex items-center justify-between h-16" data-id="wxrr4o6d8" data-path="src/components/Header.tsx">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-id="v5qfxvgpl" data-path="src/components/Header.tsx">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl" data-id="2teq262zd" data-path="src/components/Header.tsx">
              <Smartphone className="w-6 h-6 text-white" data-id="22zcrbuiy" data-path="src/components/Header.tsx" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="kr8srxbkf" data-path="src/components/Header.tsx">
              GlobaleSIM
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-id="j8d99ri0b" data-path="src/components/Header.tsx">
            {navigationItems.map((item) =>
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" data-id="nm8lys461" data-path="src/components/Header.tsx">

                {item.name}
              </button>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4" data-id="7ma9jstfz" data-path="src/components/Header.tsx">
            {/* Language Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50" data-id="qmg98aym2" data-path="src/components/Header.tsx">

              <Languages className="w-4 h-4" data-id="j1l9k1nf1" data-path="src/components/Header.tsx" />
              {t('back_to_english')}
            </Button>
            
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 rounded-full"
              onClick={() => {
                const element = document.getElementById('country-packages');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} data-id="bcemgn1px" data-path="src/components/Header.tsx">

              {t('hero_cta_main')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen} data-id="oaor92jas" data-path="src/components/Header.tsx">
            <SheetTrigger asChild className="md:hidden" data-id="jd4734yvi" data-path="src/components/Header.tsx">
              <Button variant="ghost" size="icon" data-id="3vndp7yea" data-path="src/components/Header.tsx">
                <Menu className="w-6 h-6" data-id="6zk48h72q" data-path="src/components/Header.tsx" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80" data-id="89d3a02xt" data-path="src/components/Header.tsx">
              <div className="flex items-center justify-between mb-8" data-id="uz7owoc2d" data-path="src/components/Header.tsx">
                <div className="flex items-center space-x-2" data-id="ljh2mrvfq" data-path="src/components/Header.tsx">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl" data-id="5i5o4ngla" data-path="src/components/Header.tsx">
                    <Smartphone className="w-6 h-6 text-white" data-id="si1dohxfp" data-path="src/components/Header.tsx" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="5b0xdtwg4" data-path="src/components/Header.tsx">
                    GlobaleSIM
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} data-id="zbesvg65h" data-path="src/components/Header.tsx">
                  <X className="w-6 h-6" data-id="vcxhl885n" data-path="src/components/Header.tsx" />
                </Button>
              </div>
              
              <nav className="space-y-4" data-id="4j481d015" data-path="src/components/Header.tsx">
                {navigationItems.map((item) =>
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 py-3 border-b border-gray-100 transition-colors" data-id="9d5q6k3rw" data-path="src/components/Header.tsx">

                    {item.name}
                  </button>
                )}
              </nav>
              
              <div className="mt-8 space-y-4" data-id="q7yfks9j6" data-path="src/components/Header.tsx">
                {/* Mobile Language Toggle */}
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full justify-start font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50" data-id="3ecw8a616" data-path="src/components/Header.tsx">

                  <Languages className="w-4 h-4 mr-2" data-id="2p7f8724n" data-path="src/components/Header.tsx" />
                  {t('back_to_english')}
                </Button>
                
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                  onClick={() => {
                    const element = document.getElementById('country-packages');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }} data-id="dix6fihil" data-path="src/components/Header.tsx">

                  {t('hero_cta_main')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>);

};

export default Header;