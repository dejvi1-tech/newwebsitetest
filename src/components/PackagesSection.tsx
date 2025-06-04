import PackageCard from "./PackageCard";
import { motion } from "motion/react";
import { globalPackages } from "@/data/countries";

const PackagesSection = () => {
  // Convert global packages to the format expected by PackageCard
  const packages = globalPackages.map((pkg, index) => ({
    title: `${pkg.data} / ${pkg.validity} / ${pkg.coverage} / ${pkg.description || 'Data Only'}`,
    price: pkg.price,
    data: pkg.data,
    validity: pkg.validity,
    coverage: pkg.coverage,
    description: pkg.description,
    bonusData: pkg.bonusData,
    isOffer: pkg.isOffer,
    isPopular: index === 3, // Make the 4th package popular (10GB package)
    specialFeatures: pkg.specialFeatures,
    delay: index * 0.1,
    flagUrl: pkg.id === 'uk-special' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/eu.png",
    countryCode: "AL", // Use Albania as the default country code for global packages
    packageId: pkg.id
  }));



  return (
    <section id="packages" className="py-20 bg-gray-50" data-id="suum9abxo" data-path="src/components/PackagesSection.tsx">
      <div className="container mx-auto px-4" data-id="y332v50hd" data-path="src/components/PackagesSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="ay93kvs9d" data-path="src/components/PackagesSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" data-id="r125nd7la" data-path="src/components/PackagesSection.tsx">
            Zgjidh momentin, udhëto me besim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4" data-id="mg9b2h9aj" data-path="src/components/PackagesSection.tsx">
            VIA eSIM, shpejtësi dhe liri në lëvizje!
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" data-id="12isz7hvd" data-path="src/components/PackagesSection.tsx">
            Thjesht kliko në një nga paketat, merr internet 4G/5G në të gjithë Evropën.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-full mx-auto" data-id="viktqmcgf" data-path="src/components/PackagesSection.tsx">
          {packages.map((pkg, index) =>
          <PackageCard key={pkg.packageId} {...pkg} data-id="o75julfzk" data-path="src/components/PackagesSection.tsx" />
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12" data-id="ubd9elso8" data-path="src/components/PackagesSection.tsx">

          <p className="text-gray-600 mb-4" data-id="kp5lsoyy3" data-path="src/components/PackagesSection.tsx">Keni nevojë për një plan të personalizuar për ekipin ose organizatën tuaj?</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors" data-id="6ury7l5rd" data-path="src/components/PackagesSection.tsx">
            Kontaktoni për zgjidhje ndërmarrjesh
          </button>
        </motion.div>
      </div>
    </section>);

};

export default PackagesSection;