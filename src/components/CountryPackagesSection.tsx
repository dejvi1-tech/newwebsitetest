import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Wifi, Clock, Globe } from 'lucide-react';
import CountrySearch from '@/components/CountrySearch';
import { Country, Package } from '@/data/countries';
import { useLanguage } from '@/contexts/LanguageContext';

const CountryPackagesSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleBuyNow = (packageItem: Package) => {
    if (selectedCountry) {
      navigate(`/checkout?country=${selectedCountry.code}&package=${packageItem.id}`);
    }
  };

  return (
    <section id="country-packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-id="qvalnghlf" data-path="src/components/CountryPackagesSection.tsx">
      <div className="container mx-auto px-4" data-id="rcygzcvgt" data-path="src/components/CountryPackagesSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="alypkjr07" data-path="src/components/CountryPackagesSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="nt75tfjsi" data-path="src/components/CountryPackagesSection.tsx">
            Select Your Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" data-id="4pai7lstn" data-path="src/components/CountryPackagesSection.tsx">
            Choose your destination country and select the perfect data plan for your trip
          </p>

          {/* Country Search */}
          <CountrySearch
            onCountrySelect={setSelectedCountry}
            selectedCountry={selectedCountry} data-id="310qa4gcj" data-path="src/components/CountryPackagesSection.tsx" />

        </motion.div>

        {/* Package Cards */}
        {selectedCountry &&
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto" data-id="5vknopfh6" data-path="src/components/CountryPackagesSection.tsx">

            <div className="text-center mb-8" data-id="ff38nkn9d" data-path="src/components/CountryPackagesSection.tsx">
              <h3 className="text-2xl font-bold text-gray-900 mb-2" data-id="rgicu6u1e" data-path="src/components/CountryPackagesSection.tsx">
                eSIM Plans for {selectedCountry.name[language]}
              </h3>
              <p className="text-gray-600" data-id="x69mqybfm" data-path="src/components/CountryPackagesSection.tsx">
                Choose the perfect data plan for your trip
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="3gm2sdsca" data-path="src/components/CountryPackagesSection.tsx">
              {selectedCountry.packages.map((packageItem, index) =>
            <motion.div
              key={packageItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative" data-id="f5freg2o8" data-path="src/components/CountryPackagesSection.tsx">

                  <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-full" data-id="u8cnlqp65" data-path="src/components/CountryPackagesSection.tsx">
                    {/* Popular badge for middle package */}
                    {index === 1 &&
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" data-id="tlro5ggrc" data-path="src/components/CountryPackagesSection.tsx">
                        <Badge className="bg-pink-500 text-white px-4 py-1 font-semibold rounded-full" data-id="0pi09x35o" data-path="src/components/CountryPackagesSection.tsx">
                          {t('most_popular')}
                        </Badge>
                      </div>
                }
                    
                    {/* Offer badge */}
                    {packageItem.isOffer && index !== 1 &&
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" data-id="4z9dtkygd" data-path="src/components/CountryPackagesSection.tsx">
                        <Badge className="bg-orange-500 text-white px-4 py-1 font-semibold rounded-full" data-id="ra6huxvrl" data-path="src/components/CountryPackagesSection.tsx">
                          OFERTË
                        </Badge>
                      </div>
                }
                    
                    <CardContent className="p-0 space-y-4 h-full flex flex-col" data-id="1sthj7hz8" data-path="src/components/CountryPackagesSection.tsx">
                      {/* Header with flag and data amount */}
                      <div className="flex items-center gap-3 mb-4" data-id="ltvc72jp4" data-path="src/components/CountryPackagesSection.tsx">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-blue-600" data-id="2nasemjyg" data-path="src/components/CountryPackagesSection.tsx">
                          <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name[language]}
                        className="w-10 h-8 object-cover rounded" data-id="iv2ru6q6p" data-path="src/components/CountryPackagesSection.tsx" />

                        </div>
                        <div data-id="r22e34aer" data-path="src/components/CountryPackagesSection.tsx">
                          <h3 className="text-2xl font-bold text-gray-900" data-id="9enrtzqhn" data-path="src/components/CountryPackagesSection.tsx">{packageItem.data}</h3>
                          <p className="text-sm text-gray-500" data-id="2lg1pefhu" data-path="src/components/CountryPackagesSection.tsx">Data Plan</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6" data-id="f1470ebf0" data-path="src/components/CountryPackagesSection.tsx">
                        <span className="text-4xl font-bold text-blue-600" data-id="k6soklury" data-path="src/components/CountryPackagesSection.tsx">{packageItem.price}</span>
                        <span className="text-gray-500 ml-2" data-id="uu2soi5kb" data-path="src/components/CountryPackagesSection.tsx">one-time</span>
                        {packageItem.bonusData &&
                    <div className="mt-2" data-id="9v8vadxhs" data-path="src/components/CountryPackagesSection.tsx">
                            <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1" data-id="1bs6k7d7s" data-path="src/components/CountryPackagesSection.tsx">
                              {packageItem.bonusData}
                            </Badge>
                          </div>
                    }
                      </div>

                      {/* Features */}
                      <div className="space-y-3 text-sm text-gray-600 flex-grow" data-id="9v1gdokq1" data-path="src/components/CountryPackagesSection.tsx">
                        <div className="flex items-center gap-3" data-id="nmvebos3k" data-path="src/components/CountryPackagesSection.tsx">
                          <Wifi className="w-5 h-5 text-blue-500" data-id="iqakx1y31" data-path="src/components/CountryPackagesSection.tsx" />
                          <span className="font-medium" data-id="97r40n3ms" data-path="src/components/CountryPackagesSection.tsx">{packageItem.data} High-Speed Data</span>
                        </div>
                        <div className="flex items-center gap-3" data-id="u55t0xgpi" data-path="src/components/CountryPackagesSection.tsx">
                          <Clock className="w-5 h-5 text-green-500" data-id="t8j0dnb1a" data-path="src/components/CountryPackagesSection.tsx" />
                          <span data-id="3h3y9zei2" data-path="src/components/CountryPackagesSection.tsx">Valid for {packageItem.validity}</span>
                        </div>
                        <div className="flex items-start gap-3" data-id="cuuih4xln" data-path="src/components/CountryPackagesSection.tsx">
                          <Globe className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" data-id="cuy2k6gv8" data-path="src/components/CountryPackagesSection.tsx" />
                          <span className="leading-relaxed" data-id="35g790wiv" data-path="src/components/CountryPackagesSection.tsx">{packageItem.coverage}</span>
                        </div>
                        {packageItem.description &&
                    <div className="mt-2" data-id="18cv3cfv7" data-path="src/components/CountryPackagesSection.tsx">
                            <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1" data-id="j4f2ef9rz" data-path="src/components/CountryPackagesSection.tsx">
                              {packageItem.description}
                            </Badge>
                          </div>
                    }
                        {packageItem.specialFeatures && packageItem.specialFeatures.length > 0 ?
                    <div className="pt-2 space-y-1 text-xs text-gray-500" data-id="7ekcsjidu" data-path="src/components/CountryPackagesSection.tsx">
                            {packageItem.specialFeatures.map((feature, featureIndex) =>
                      <div key={featureIndex} data-id="7yygk9gp0" data-path="src/components/CountryPackagesSection.tsx">• {feature}</div>
                      )}
                          </div> :

                    <div className="pt-2 space-y-2 text-xs text-gray-500" data-id="i0lhs5p8z" data-path="src/components/CountryPackagesSection.tsx">
                            <div data-id="mng8zl1v2" data-path="src/components/CountryPackagesSection.tsx">✓ Instant activation</div>
                            <div data-id="efmt7w5mr" data-path="src/components/CountryPackagesSection.tsx">✓ No physical SIM required</div>
                            <div data-id="kd3ro22ok" data-path="src/components/CountryPackagesSection.tsx">✓ 24/7 customer support</div>
                            <div data-id="1c6g0vw39" data-path="src/components/CountryPackagesSection.tsx">✓ Hotspot sharing enabled</div>
                          </div>
                    }
                      </div>

                      {/* Buy Button */}
                      <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6 mt-auto" data-id="rd921id7e" data-path="src/components/CountryPackagesSection.tsx">

                        <Button
                      onClick={() => handleBuyNow(packageItem)}
                      className={`w-full font-semibold py-4 rounded-full transition-all duration-300 ${
                      index === 1 ?
                      'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' :
                      'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'}`
                      } data-id="e5y2jgaj5" data-path="src/components/CountryPackagesSection.tsx">

                          {t('buy_now')}
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
            )}
            </div>

            {/* Additional Info */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center" data-id="e9ai1n3d3" data-path="src/components/CountryPackagesSection.tsx">

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto" data-id="tzyeyv1o9" data-path="src/components/CountryPackagesSection.tsx">
                <h4 className="text-xl font-bold text-gray-900 mb-4" data-id="c9yblha8n" data-path="src/components/CountryPackagesSection.tsx">Why Choose Our eSIM?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600" data-id="v0lsg3zpz" data-path="src/components/CountryPackagesSection.tsx">
                  <div className="flex flex-col items-center" data-id="mzp6pc3nh" data-path="src/components/CountryPackagesSection.tsx">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3" data-id="lu57ib73g" data-path="src/components/CountryPackagesSection.tsx">
                      <Wifi className="w-6 h-6 text-blue-600" data-id="nczg7qex0" data-path="src/components/CountryPackagesSection.tsx" />
                    </div>
                    <p className="font-medium" data-id="i90yqprge" data-path="src/components/CountryPackagesSection.tsx">Lightning Fast</p>
                    <p className="text-xs" data-id="ktb1tnl5e" data-path="src/components/CountryPackagesSection.tsx">High-speed 4G/5G networks</p>
                  </div>
                  <div className="flex flex-col items-center" data-id="9l3rb9hue" data-path="src/components/CountryPackagesSection.tsx">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3" data-id="10whicdxn" data-path="src/components/CountryPackagesSection.tsx">
                      <Clock className="w-6 h-6 text-green-600" data-id="n34t2lkup" data-path="src/components/CountryPackagesSection.tsx" />
                    </div>
                    <p className="font-medium" data-id="a6dzqswhe" data-path="src/components/CountryPackagesSection.tsx">Instant Setup</p>
                    <p className="text-xs" data-id="6exnik29z" data-path="src/components/CountryPackagesSection.tsx">Active within minutes</p>
                  </div>
                  <div className="flex flex-col items-center" data-id="6t8bq838u" data-path="src/components/CountryPackagesSection.tsx">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3" data-id="63e3c075h" data-path="src/components/CountryPackagesSection.tsx">
                      <Globe className="w-6 h-6 text-purple-600" data-id="6rul2puwg" data-path="src/components/CountryPackagesSection.tsx" />
                    </div>
                    <p className="font-medium" data-id="r202hwouz" data-path="src/components/CountryPackagesSection.tsx">Global Coverage</p>
                    <p className="text-xs" data-id="u6es2fgkm" data-path="src/components/CountryPackagesSection.tsx">200+ countries supported</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </div>
    </section>);

};

export default CountryPackagesSection;