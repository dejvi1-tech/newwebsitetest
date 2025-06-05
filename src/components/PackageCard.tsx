import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Clock, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

interface PackageCardProps {
  title: string;
  price: string;
  data: string;
  validity: string;
  coverage: string;
  isPopular?: boolean;
  delay?: number;
  flagUrl?: string;
  countryCode?: string;
  packageId?: string;
  bonusData?: string;
  isOffer?: boolean;
  description?: string;
  specialFeatures?: string[];
}

const PackageCard = ({
  title,
  price,
  data,
  validity,
  coverage,
  isPopular = false,
  delay = 0,
  flagUrl,
  countryCode,
  packageId,
  bonusData,
  isOffer = false,
  description,
  specialFeatures
}: PackageCardProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (countryCode && packageId) {
      navigate(`/checkout?country=${countryCode}&package=${packageId}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative">
      <Card className="h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Popular/Offer Badge */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              {t('most_popular')}
            </Badge>
          </div>
        )}
        {isOffer && !isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              OFERTË
            </Badge>
          </div>
        )}

        <CardContent className="p-4 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2">
            {flagUrl && (
              <img
                src={flagUrl}
                alt="Flag"
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{data}</h3>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{price}</div>
            {bonusData && (
              <Badge className="mt-1 bg-green-100 text-green-800 text-xs px-2">
                {bonusData}
              </Badge>
            )}
          </div>

          {/* Features */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Wifi className="w-4 h-4 text-blue-500" />
              <span>{data} High-Speed Data</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 text-green-500" />
              <span>{validity}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4 text-purple-500" />
              <span className="line-clamp-1">{coverage}</span>
            </div>
          </div>

          {/* Description */}
          {description && (
            <Badge className="w-full justify-center bg-blue-50 text-blue-700 font-normal">
              {description}
            </Badge>
          )}

          {/* Buy Button */}
          <Button
            onClick={handleBuyNow}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-lg transition-all duration-300">
            {t('buy_now')}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PackageCard;