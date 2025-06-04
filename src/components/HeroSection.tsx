import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Play, ArrowRight, Smartphone, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" data-id="gg0h8lnko" data-path="src/components/HeroSection.tsx">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0" data-id="4h2jipub3" data-path="src/components/HeroSection.tsx">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4ODkyOTgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djEwaDEwdi0xMHptMC0ydjEwaDEwVjMyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" data-id="91v3cw8o1" data-path="src/components/HeroSection.tsx"></div>
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" data-id="7wk3fehan" data-path="src/components/HeroSection.tsx" />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl" data-id="f2b9buksx" data-path="src/components/HeroSection.tsx" />

      </div>
      
      <div className="container mx-auto px-4 relative z-10" data-id="alfsz98vs" data-path="src/components/HeroSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto" data-id="2pqgauvod" data-path="src/components/HeroSection.tsx">

          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8" data-id="7jigkahyw" data-path="src/components/HeroSection.tsx">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 text-base font-medium rounded-full shadow-lg animate-pulse" data-id="2tce6e590" data-path="src/components/HeroSection.tsx">
              🌍 I besuar nga 5M+ udhëtarë në botë
            </Badge>
          </motion.div>
          
          {/* Enhanced Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight" data-id="w3lpj5xwy" data-path="src/components/HeroSection.tsx">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent" data-id="hubn0hoxk" data-path="src/components/HeroSection.tsx">
              Qëndro i Lidhur
            </span>
            <br data-id="j7kubc15s" data-path="src/components/HeroSection.tsx" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-id="m51pjtjqh" data-path="src/components/HeroSection.tsx">
              Kudo
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              className="inline-block ml-4 text-4xl" data-id="rcktcr8hw" data-path="src/components/HeroSection.tsx">🌍</motion.span>
          </motion.h1>
          
          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto" data-id="qbbs42yv8" data-path="src/components/HeroSection.tsx">
            Merr lidhjen e të dhënave menjëherë në <span className="font-bold text-blue-600" data-id="4zita7p4g" data-path="src/components/HeroSection.tsx">200+ vende</span> me planet tona premium eSIM. 
            <br className="hidden md:block" data-id="6aoqhuvxt" data-path="src/components/HeroSection.tsx" />
            Pa karta SIM fizike, pa tarifa roaming, pa telashe. <span className="font-semibold" data-id="kvjsvtcyw" data-path="src/components/HeroSection.tsx">Vetëm lidhje e qetë.</span>
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-500" data-id="lxlded6qd" data-path="src/components/HeroSection.tsx">
            <div className="flex items-center" data-id="bwn083qdi" data-path="src/components/HeroSection.tsx">✓ Aktivizim i menjëhershëm</div>
            <div className="flex items-center" data-id="spzvtpd1o" data-path="src/components/HeroSection.tsx">✓ Mbështetje 24/7</div>
            <div className="flex items-center" data-id="qdkdmv19m" data-path="src/components/HeroSection.tsx">✓ Garanci kthimi parash</div>
            <div className="flex items-center" data-id="dpa89juzo" data-path="src/components/HeroSection.tsx">✓ Pa kontrata</div>
          </motion.div>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-id="76ebhn5cg" data-path="src/components/HeroSection.tsx">
            <Button
              onClick={() => scrollToSection('country-packages')}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105" data-id="g478isi4t" data-path="src/components/HeroSection.tsx">
              {t('hero_cta_main')}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" data-id="t6go045si" data-path="src/components/HeroSection.tsx" />
            </Button>
            <Button
              onClick={() => scrollToSection('how-it-works')}
              variant="outline"
              size="lg"
              className="group border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300" data-id="ymst54n1o" data-path="src/components/HeroSection.tsx">
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" data-id="pudrvmd7a" data-path="src/components/HeroSection.tsx" />
              Si Funksionon
            </Button>
          </motion.div>
          
          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-id="i0s5hsqeo" data-path="src/components/HeroSection.tsx">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20" data-id="legqy4ygl" data-path="src/components/HeroSection.tsx">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" data-id="rzxxpnnot" data-path="src/components/HeroSection.tsx" />
              <div className="text-4xl font-black text-blue-600 mb-2" data-id="tws0y2sz4" data-path="src/components/HeroSection.tsx">200+</div>
              <div className="text-gray-600 font-semibold" data-id="7xk5afnor" data-path="src/components/HeroSection.tsx">Vende të Mbuluara</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20" data-id="efagkigh9" data-path="src/components/HeroSection.tsx">
              <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-3" data-id="6a9b0n0tl" data-path="src/components/HeroSection.tsx" />
              <div className="text-4xl font-black text-purple-600 mb-2" data-id="u413vp213" data-path="src/components/HeroSection.tsx">5M+</div>
              <div className="text-gray-600 font-semibold" data-id="veioc9xe1" data-path="src/components/HeroSection.tsx">Udhëtarë të Kënaqur</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20" data-id="er13hy3ne" data-path="src/components/HeroSection.tsx">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-3" data-id="jqfjpe33j" data-path="src/components/HeroSection.tsx" />
              <div className="text-4xl font-black text-green-600 mb-2" data-id="qp945siiw" data-path="src/components/HeroSection.tsx">24/7</div>
              <div className="text-gray-600 font-semibold" data-id="h1loryoze" data-path="src/components/HeroSection.tsx">Mbështetje Eksperte</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl" data-id="2jk8emz5h" data-path="src/components/HeroSection.tsx" />

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" data-id="4yob8bv8t" data-path="src/components/HeroSection.tsx" />

      <motion.div
        animate={{
          x: [-10, 10, -10],
          y: [10, -10, 10]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-25 blur-lg" data-id="prwbn0oke" data-path="src/components/HeroSection.tsx" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-id="ils2g5in2" data-path="src/components/HeroSection.tsx">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm font-medium" data-id="nmxukbtm5" data-path="src/components/HeroSection.tsx">
          Lëviz poshtë për të eksploruar ↓
        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;