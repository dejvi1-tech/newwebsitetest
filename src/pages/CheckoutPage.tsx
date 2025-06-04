import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { europeanCountries } from '@/data/countries';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, CreditCard, Lock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CheckoutPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const countryCode = searchParams.get('country');
  const packageId = searchParams.get('package');

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Find the selected country and package with improved error handling
  console.log('Checkout params:', { countryCode, packageId });

  const selectedCountry = europeanCountries.find((c) => c.code === countryCode);
  console.log('Found country:', selectedCountry);

  const selectedPackage = selectedCountry?.packages.find((p) => {
    console.log('Comparing package ID:', p.id, 'with URL param:', packageId);
    return p.id === packageId;
  });
  console.log('Found package:', selectedPackage);

  if (!countryCode || !packageId) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="j33orjn47" data-path="src/pages/CheckoutPage.tsx">
        <div className="text-center" data-id="ak5c29ppe" data-path="src/pages/CheckoutPage.tsx">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" data-id="7pyit9el0" data-path="src/pages/CheckoutPage.tsx">Missing Parameters</h1>
          <p className="text-gray-600 mb-4" data-id="79xo9lht0" data-path="src/pages/CheckoutPage.tsx">Country code or package ID is missing from the URL.</p>
          <Button onClick={() => navigate('/')} data-id="bihj4sxbf" data-path="src/pages/CheckoutPage.tsx">Return to Home</Button>
        </div>
      </div>);

  }

  if (!selectedCountry) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="cbddbwm0j" data-path="src/pages/CheckoutPage.tsx">
        <div className="text-center" data-id="4fv33hzec" data-path="src/pages/CheckoutPage.tsx">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" data-id="etj6wmxcl" data-path="src/pages/CheckoutPage.tsx">Country not found</h1>
          <p className="text-gray-600 mb-4" data-id="33ogpydt5" data-path="src/pages/CheckoutPage.tsx">The country code "{countryCode}" was not found.</p>
          <Button onClick={() => navigate('/')} data-id="gdnhbiumw" data-path="src/pages/CheckoutPage.tsx">Return to Home</Button>
        </div>
      </div>);

  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="h72z5dz3z" data-path="src/pages/CheckoutPage.tsx">
        <div className="text-center" data-id="lrelfwveu" data-path="src/pages/CheckoutPage.tsx">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" data-id="ifc0ahvvy" data-path="src/pages/CheckoutPage.tsx">Package not found</h1>
          <p className="text-gray-600 mb-4" data-id="873we9mcr" data-path="src/pages/CheckoutPage.tsx">The package "{packageId}" was not found for {selectedCountry.name[language]}.</p>
          <p className="text-sm text-gray-500 mb-4" data-id="y6hvb54wm" data-path="src/pages/CheckoutPage.tsx">Available packages: {selectedCountry.packages.map((p) => p.id).join(', ')}</p>
          <Button onClick={() => navigate('/')} data-id="adv2zjh82" data-path="src/pages/CheckoutPage.tsx">Return to Home</Button>
        </div>
      </div>);

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (value.length > 19) value = value.substring(0, 19);
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (value.length > 5) value = value.substring(0, 5);
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) value = value.substring(0, 3);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Send confirmation email
      const emailContent = `
        <h2>eSIM Purchase Confirmation</h2>
        <p>Thank you for your purchase!</p>
        <h3>Order Details:</h3>
        <ul>
          <li><strong>Country:</strong> ${selectedCountry.name[language]}</li>
          <li><strong>Data Plan:</strong> ${selectedPackage.data}</li>
          <li><strong>Validity:</strong> ${selectedPackage.validity}</li>
          <li><strong>Price:</strong> ${selectedPackage.price}</li>
        </ul>
        <p>Your eSIM will be activated within 15 minutes. You will receive another email with activation instructions.</p>
      `;

      await window.ezsite.apis.sendEmail({
        from: 'support@ezsite.ai',
        to: [formData.email],
        subject: 'eSIM Purchase Confirmation',
        html: emailContent
      });

      toast({
        title: "Payment Successful!",
        description: "Your eSIM has been purchased. Check your email for details."
      });

      // Redirect to success page after a delay
      setTimeout(() => {
        navigate('/?success=true');
      }, 2000);

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" data-id="gn3ao2x40" data-path="src/pages/CheckoutPage.tsx">
      <div className="container mx-auto px-4 py-8" data-id="2wibzx8wb" data-path="src/pages/CheckoutPage.tsx">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8" data-id="e1aw0kkgx" data-path="src/pages/CheckoutPage.tsx">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-2" data-id="xepx65onx" data-path="src/pages/CheckoutPage.tsx">

            <ArrowLeft className="w-4 h-4" data-id="h5tshj0wb" data-path="src/pages/CheckoutPage.tsx" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-gray-900" data-id="mn6mf4lzk" data-path="src/pages/CheckoutPage.tsx">{t('checkout')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" data-id="mndh5fwcv" data-path="src/pages/CheckoutPage.tsx">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} data-id="h5pe7nwsr" data-path="src/pages/CheckoutPage.tsx">

            <Card className="sticky top-8" data-id="8ud6qt4p1" data-path="src/pages/CheckoutPage.tsx">
              <CardHeader data-id="awp17yx92" data-path="src/pages/CheckoutPage.tsx">
                <CardTitle className="flex items-center gap-2" data-id="6la3wvl33" data-path="src/pages/CheckoutPage.tsx">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name[language]}
                    className="w-8 h-6 object-cover rounded" data-id="7lcdf6v1m" data-path="src/pages/CheckoutPage.tsx" />

                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-id="ndw4rl2g4" data-path="src/pages/CheckoutPage.tsx">
                <div className="bg-gray-50 p-4 rounded-lg" data-id="3cvs01e7a" data-path="src/pages/CheckoutPage.tsx">
                  <h3 className="font-semibold text-lg mb-2" data-id="oacths1nf" data-path="src/pages/CheckoutPage.tsx">{selectedCountry.name[language]} eSIM</h3>
                  <div className="space-y-2 text-sm text-gray-600" data-id="r4yw5rsek" data-path="src/pages/CheckoutPage.tsx">
                    <div className="flex justify-between" data-id="llqwg3sxj" data-path="src/pages/CheckoutPage.tsx">
                      <span data-id="fdp8suozv" data-path="src/pages/CheckoutPage.tsx">Data:</span>
                      <span className="font-medium" data-id="q4rieh12a" data-path="src/pages/CheckoutPage.tsx">{selectedPackage.data}</span>
                    </div>
                    <div className="flex justify-between" data-id="f9nqlh6o3" data-path="src/pages/CheckoutPage.tsx">
                      <span data-id="lmtb2ok59" data-path="src/pages/CheckoutPage.tsx">Validity:</span>
                      <span className="font-medium" data-id="20abnr0j8" data-path="src/pages/CheckoutPage.tsx">{selectedPackage.validity}</span>
                    </div>
                    <div className="flex justify-between" data-id="ukn2hziv0" data-path="src/pages/CheckoutPage.tsx">
                      <span data-id="8rznh2obv" data-path="src/pages/CheckoutPage.tsx">Coverage:</span>
                      <span className="font-medium" data-id="b8n309qzm" data-path="src/pages/CheckoutPage.tsx">{selectedCountry.name[language]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4" data-id="syc6d1wto" data-path="src/pages/CheckoutPage.tsx">
                  <div className="flex justify-between items-center text-xl font-bold" data-id="8w216lqf4" data-path="src/pages/CheckoutPage.tsx">
                    <span data-id="v4jts0afx" data-path="src/pages/CheckoutPage.tsx">Total:</span>
                    <span className="text-blue-600" data-id="jusmq1ssr" data-path="src/pages/CheckoutPage.tsx">{selectedPackage.price}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-1" data-id="xfmiirzfl" data-path="src/pages/CheckoutPage.tsx">
                  <div className="flex items-center gap-2" data-id="5nyt78oic" data-path="src/pages/CheckoutPage.tsx">
                    <Shield className="w-4 h-4" data-id="d764w0bn7" data-path="src/pages/CheckoutPage.tsx" />
                    <span data-id="7wakf56qr" data-path="src/pages/CheckoutPage.tsx">Secure 256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2" data-id="rseln9ypv" data-path="src/pages/CheckoutPage.tsx">
                    <Lock className="w-4 h-4" data-id="39ol04pis" data-path="src/pages/CheckoutPage.tsx" />
                    <span data-id="zkg8wp2cv" data-path="src/pages/CheckoutPage.tsx">PCI DSS compliant payment processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} data-id="cgejs9j2m" data-path="src/pages/CheckoutPage.tsx">

            <Card data-id="qnk7u6zb5" data-path="src/pages/CheckoutPage.tsx">
              <CardHeader data-id="jg2rlxib3" data-path="src/pages/CheckoutPage.tsx">
                <CardTitle className="flex items-center gap-2" data-id="u0c5c4qpd" data-path="src/pages/CheckoutPage.tsx">
                  <CreditCard className="w-6 h-6" data-id="lnvzqmbuf" data-path="src/pages/CheckoutPage.tsx" />
                  {t('payment_details')}
                </CardTitle>
              </CardHeader>
              <CardContent data-id="kz22uyglq" data-path="src/pages/CheckoutPage.tsx">
                <form onSubmit={handleSubmit} className="space-y-6" data-id="e0mqbh8ra" data-path="src/pages/CheckoutPage.tsx">
                  {/* Email */}
                  <div data-id="1pngppbq0" data-path="src/pages/CheckoutPage.tsx">
                    <label className="block text-sm font-medium text-gray-700 mb-2" data-id="4gwsw9g4k" data-path="src/pages/CheckoutPage.tsx">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com" data-id="lu2tjfkhk" data-path="src/pages/CheckoutPage.tsx" />

                  </div>

                  {/* Card Number */}
                  <div data-id="x789ze9l6" data-path="src/pages/CheckoutPage.tsx">
                    <label className="block text-sm font-medium text-gray-700 mb-2" data-id="s0fz0b4x4" data-path="src/pages/CheckoutPage.tsx">
                      {t('card_number')} *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456" data-id="mp1mem7le" data-path="src/pages/CheckoutPage.tsx" />

                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4" data-id="8iatss5jq" data-path="src/pages/CheckoutPage.tsx">
                    <div data-id="sopifh6fo" data-path="src/pages/CheckoutPage.tsx">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="fg3fj6z1k" data-path="src/pages/CheckoutPage.tsx">
                        {t('expiry_date')} *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY" data-id="v86mjn5np" data-path="src/pages/CheckoutPage.tsx" />

                    </div>
                    <div data-id="gtemaj7em" data-path="src/pages/CheckoutPage.tsx">
                      <label className="block text-sm font-medium text-gray-700 mb-2" data-id="90xtcsvls" data-path="src/pages/CheckoutPage.tsx">
                        {t('cvv')} *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123" data-id="ue4u44avr" data-path="src/pages/CheckoutPage.tsx" />

                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div data-id="3q7zhx82m" data-path="src/pages/CheckoutPage.tsx">
                    <label className="block text-sm font-medium text-gray-700 mb-2" data-id="2585ufku0" data-path="src/pages/CheckoutPage.tsx">
                      {t('cardholder_name')} *
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe" data-id="4tsm316n6" data-path="src/pages/CheckoutPage.tsx" />

                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300" data-id="a8a6t4pl2" data-path="src/pages/CheckoutPage.tsx">

                    {isProcessing ?
                    <div className="flex items-center gap-2" data-id="wzocyliz7" data-path="src/pages/CheckoutPage.tsx">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" data-id="1gmxh068i" data-path="src/pages/CheckoutPage.tsx" />
                        Processing...
                      </div> :

                    <>
                        <Lock className="w-5 h-5 mr-2" data-id="8ph3zl1tr" data-path="src/pages/CheckoutPage.tsx" />
                        {t('complete_purchase')} {selectedPackage.price}
                      </>
                    }
                  </Button>

                  <p className="text-xs text-gray-500 text-center" data-id="ga9kexcf7" data-path="src/pages/CheckoutPage.tsx">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default CheckoutPage;