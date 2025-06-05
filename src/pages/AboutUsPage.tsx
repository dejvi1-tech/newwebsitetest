import { motion } from "motion/react";
import { Globe, Zap, Shield, Sparkles } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Future of Global Connectivity
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Founded in 2025, we're revolutionizing how people stay connected worldwide through innovative eSIM technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Digital Connectivity</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Using cutting-edge AI and blockchain technology to provide seamless, secure, and instant global connectivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Next-Gen Technology</h3>
              <p className="text-gray-600 mb-4">
                Our proprietary AI-powered network switching ensures you're always connected to the strongest signal, while blockchain technology guarantees secure and transparent transactions.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Launched in 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-600 mb-4">
                In our first year, we've already transformed how thousands of travelers stay connected, eliminating roaming fees and connection hassles across 200+ countries.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">200+ Countries Covered</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5M+", label: "Happy Customers", icon: Globe },
              { number: "0.1s", label: "Activation Time", icon: Zap },
              { number: "24/7", label: "AI Support", icon: Shield },
              { number: "99.9%", label: "Uptime", icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for 2026</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're building a future where staying connected is effortless, borderless, and accessible to everyone. Our innovative eSIM technology is just the beginning.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <p className="text-lg font-medium">
                "Our goal is to eliminate digital borders and make global connectivity as natural as breathing. We're not just connecting devices; we're connecting people, ideas, and possibilities."
              </p>
              <p className="mt-4 text-white/80">— GlobaleSIM Founder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;