import PackageCard from "./PackageCard";
import { motion } from "motion/react";
import { globalPackages } from "@/data/countries";

const PackagesSection = () => {
  const packages = globalPackages.map((pkg, index) => ({
    title: `${pkg.data} / ${pkg.validity} / ${pkg.coverage}`,
    price: pkg.price,
    data: pkg.data,
    validity: pkg.validity,
    coverage: pkg.coverage,
    description: pkg.description,
    bonusData: pkg.bonusData,
    isOffer: pkg.isOffer,
    isPopular: index === 3,
    specialFeatures: pkg.specialFeatures,
    delay: index * 0.1,
    flagUrl: pkg.id === 'uk-special' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/eu.png",
    countryCode: "AL",
    packageId: pkg.id
  }));

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Zgjidh momentin, udhëto me besim
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thjesht kliko në një nga paketat, merr internet 4G/5G në të gjithë Evropën.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.packageId} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;