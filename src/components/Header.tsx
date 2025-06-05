import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Smartphone, X, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { name: language === 'al' ? 'Paketat' : 'Packages', href: '/packages' },
    { name: language === 'al' ? 'Si Funksionon' : 'How It Works', href: '/how-it-works' },
    { name: language === 'al' ? 'Recensionet' : 'Reviews', href: '/reviews' },
    { name: language === 'al' ? 'Mbështetja' : 'Support', href: '/support' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GlobaleSIM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-blue-600' : ''
                }`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50">
              <Languages className="w-4 h-4" />
              {t('back_to_english')}
            </Button>
            
            <Link to="/packages">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 rounded-full">
                {t('hero_cta_main')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    GlobaleSIM
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 py-3 border-b border-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-8 space-y-4">
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full justify-start font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50">
                  <Languages className="w-4 h-4 mr-2" />
                  {t('back_to_english')}
                </Button>
                
                <Link to="/packages" onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                    {t('hero_cta_main')}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;