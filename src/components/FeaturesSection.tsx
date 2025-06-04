import { motion } from "motion/react";
import { Shield, Zap, Globe, CreditCard, Headphones, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
  {
    icon: Globe,
    title: "Mbulim Global",
    description: "Qëndroni të lidhur në 200+ vende dhe territore në mbarë botën me partneritetet tona të gjera të rrjetit.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Aktivizim i Menjëhershëm",
    description: "Lidhuni online menjëherë pas blerjes. Pa pritje, pa dërgim fizik të kërkuar.",
    color: "yellow"
  },
  {
    icon: CreditCard,
    title: "Pa Tarifa të Fshehura",
    description: "Çmim transparent pa taksa surprizë, tarifa roaming, ose angazhime mujore.",
    color: "green"
  },
  {
    icon: Shield,
    title: "E Sigurt & e Besueshme",
    description: "Siguri në nivel ndërmarrjesh me garanci 99.9% kohe pune rrjeti për qetësi mendore.",
    color: "purple"
  },
  {
    icon: Smartphone,
    title: "Profile të Shumta",
    description: "Ruani profile të shumta eSIM në pajisjen tuaj dhe ndërroni mes tyre lehtësisht.",
    color: "indigo"
  },
  {
    icon: Headphones,
    title: "Mbështetje 24/7",
    description: "Ekipi ynë ekspert i mbështetjes është i disponueshëm 24 orë për t'ju mbajtur të lidhur.",
    color: "pink"
  }];


  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white" data-id="zsdh2vzuu" data-path="src/components/FeaturesSection.tsx">
      <div className="container mx-auto px-4" data-id="wck18ichy" data-path="src/components/FeaturesSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="nxlik73ne" data-path="src/components/FeaturesSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" data-id="vogl6gks4" data-path="src/components/FeaturesSection.tsx">
            Pse të Zgjidhni eSIM-in Tonë
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="wyxlp79zg" data-path="src/components/FeaturesSection.tsx">
            Përjetoni të ardhmen e lidhshmërisë mobile me shërbimin tonë premium eSIM të dizajnuar për udhëtarët modernë dhe nomadët dixhitalë.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" data-id="op8kjwuye" data-path="src/components/FeaturesSection.tsx">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white" data-id="f83kek76b" data-path="src/components/FeaturesSection.tsx">

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${getColorClasses(feature.color)}`} data-id="0jl3s2tyw" data-path="src/components/FeaturesSection.tsx">
                <feature.icon className="w-6 h-6" data-id="qzoyiisxt" data-path="src/components/FeaturesSection.tsx" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors" data-id="0jdcgqasz" data-path="src/components/FeaturesSection.tsx">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed" data-id="vrzh2hray" data-path="src/components/FeaturesSection.tsx">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16" data-id="4vwson86r" data-path="src/components/FeaturesSection.tsx">

          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto" data-id="0qi63iodv" data-path="src/components/FeaturesSection.tsx">
            <h3 className="text-2xl font-bold mb-4" data-id="ri1t5uz8v" data-path="src/components/FeaturesSection.tsx">
              Gati të Përjetoni Lidhshmëri të Qetë?
            </h3>
            <p className="text-gray-200 mb-6 text-lg" data-id="olyfws7ej" data-path="src/components/FeaturesSection.tsx">
              Bashkohuni me miliona udhëtarë që i besojnë shërbimit tonë eSIM për të dhëna globale të besueshme dhe të përballueshme.
            </p>
            <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300" data-id="ov050w1w8" data-path="src/components/FeaturesSection.tsx">
              Filloni Sot
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FeaturesSection;