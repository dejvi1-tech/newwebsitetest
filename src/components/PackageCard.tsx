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
    console.log('PackageCard Buy Now clicked:', { countryCode, packageId });
    if (countryCode && packageId) {
      const checkoutUrl = `/checkout?country=${countryCode}&package=${packageId}`;
      console.log('Navigating to:', checkoutUrl);
      navigate(checkoutUrl);
    } else {
      console.error('Missing country code or package ID:', { countryCode, packageId });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative" data-id="n3fo1ejz9" data-path="src/components/PackageCard.tsx">

      <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col" data-id="1gay24yn8" data-path="src/components/PackageCard.tsx">
        {/* Popular badge */}
        {isPopular &&
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" data-id="2ite3jvbk" data-path="src/components/PackageCard.tsx">
            <Badge className="bg-pink-500 text-white px-4 py-1 font-semibold rounded-full" data-id="06ff7tzsu" data-path="src/components/PackageCard.tsx">
              {t('most_popular')}
            </Badge>
          </div>
        }
        
        {/* Offer badge */}
        {isOffer && !isPopular &&
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" data-id="cqhwgfhl8" data-path="src/components/PackageCard.tsx">
            <Badge className="bg-orange-500 text-white px-4 py-1 font-semibold rounded-full" data-id="7aj4132pa" data-path="src/components/PackageCard.tsx">
              OFERTË
            </Badge>
          </div>
        }
        
        <CardContent className="p-0 space-y-4 flex-1 flex flex-col" data-id="j7ylmvwgz" data-path="src/components/PackageCard.tsx">
          {/* Header with flag and title */}
          <div className="flex items-center gap-3 mb-4" data-id="ih13xs1ld" data-path="src/components/PackageCard.tsx">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-blue-600" data-id="z4ba2lb1o" data-path="src/components/PackageCard.tsx">
              {flagUrl ?
              <img src={flagUrl} alt="Flamuri" className="w-6 h-6 object-cover" data-id="aumr8p703" data-path="src/components/PackageCard.tsx" /> :

              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center" data-id="ne8u5cvdd" data-path="src/components/PackageCard.tsx">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full relative" data-id="t5wwimdfm" data-path="src/components/PackageCard.tsx">
                    <div className="absolute inset-0 flex items-center justify-center" data-id="12q7wa3xw" data-path="src/components/PackageCard.tsx">
                      <div className="w-3 h-1 bg-blue-600 rounded" data-id="84xtl3w27" data-path="src/components/PackageCard.tsx"></div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-3" data-id="hugdjmdhh" data-path="src/components/PackageCard.tsx">{title}</h3>
          </div>

          {/* Price */}
          <div className="mb-4" data-id="aocwmyknx" data-path="src/components/PackageCard.tsx">
            <span className="text-3xl font-bold text-gray-900" data-id="qv661sawf" data-path="src/components/PackageCard.tsx">{price}</span>
            {bonusData &&
            <div className="mt-1" data-id="nq8eq9mb4" data-path="src/components/PackageCard.tsx">
                <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1" data-id="5uaz99kt7" data-path="src/components/PackageCard.tsx">
                  {bonusData}
                </Badge>
              </div>
            }
          </div>

          {/* Features */}
          <div className="space-y-3 text-sm text-gray-600 flex-1" data-id="4ha1gxaau" data-path="src/components/PackageCard.tsx">
            <div className="flex items-center gap-2" data-id="xo5v0t3q1" data-path="src/components/PackageCard.tsx">
              <Wifi className="w-4 h-4" data-id="mchru5b3p" data-path="src/components/PackageCard.tsx" />
              <span className="text-xs font-medium" data-id="2njcq6xvp" data-path="src/components/PackageCard.tsx">{data}</span>
            </div>
            <div className="flex items-center gap-2" data-id="n6e2hg5pw" data-path="src/components/PackageCard.tsx">
              <Clock className="w-4 h-4" data-id="jkmr10oyo" data-path="src/components/PackageCard.tsx" />
              <span className="text-xs" data-id="zbxvsr8bj" data-path="src/components/PackageCard.tsx">{validity}</span>
            </div>
            <div className="flex items-start gap-2" data-id="qsbs58znt" data-path="src/components/PackageCard.tsx">
              <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" data-id="hufc3k7kk" data-path="src/components/PackageCard.tsx" />
              <span className="text-xs leading-relaxed" data-id="93wnm0ej0" data-path="src/components/PackageCard.tsx">{coverage}</span>
            </div>
            {description &&
            <div className="mt-2" data-id="swkctbha2" data-path="src/components/PackageCard.tsx">
                <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1" data-id="0628yz00l" data-path="src/components/PackageCard.tsx">
                  {description}
                </Badge>
              </div>
            }
            {specialFeatures && specialFeatures.length > 0 &&
            <div className="mt-3 space-y-1" data-id="kefttokei" data-path="src/components/PackageCard.tsx">
                {specialFeatures.map((feature, index) =>
              <div key={index} className="text-xs text-gray-500 leading-relaxed" data-id="5nhd6h0a9" data-path="src/components/PackageCard.tsx">
                    • {feature}
                  </div>
              )}
              </div>
            }
          </div>

          {/* Buy Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4 mt-auto" data-id="pychd1qqv" data-path="src/components/PackageCard.tsx">
            <Button
              onClick={handleBuyNow}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-full transition-colors" data-id="r8j9xu17g" data-path="src/components/PackageCard.tsx">
              {t('buy_now')}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default PackageCard;