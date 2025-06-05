import CountryPackagesSection from "@/components/CountryPackagesSection";
import PackagesSection from "@/components/PackagesSection";

const PackagesPage = () => {
  return (
    <div className="pt-16">
      <CountryPackagesSection />
      <PackagesSection />
    </div>
  );
};

export default PackagesPage;