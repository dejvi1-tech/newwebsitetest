import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoverageSection from "@/components/CoverageSection";
import ComparisonSection from "@/components/ComparisonSection";

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <CoverageSection />
      <ComparisonSection />
    </div>
  );
};

export default HomePage;