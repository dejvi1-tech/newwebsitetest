import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1517498327491-f903e1e281cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTI3cyUyMGZhY2UlMkMlMjBsaWtlbHklMjBhJTIwcG9ydHJhaXQufGVufDB8fHx8MTc0ODg5MjM5Mnww&ixlib=rb-4.1.0&q=80&w=200$w=100",
    rating: 5,
    text: "GlobaleSIM has been a game-changer for my travels! I've used it in over 15 countries and the connection is always reliable. No more hunting for local SIM cards or dealing with expensive roaming fees.",
    highlight: "Used in 15+ countries"
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As someone who travels frequently for business, having instant connectivity is crucial. GlobaleSIM's Business Pro plan gives me the speed and reliability I need for video calls and large file transfers.",
    highlight: "Perfect for business travel"
  },
  {
    name: "Emma Rodriguez",
    role: "Digital Nomad",
    location: "Barcelona, Spain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The setup process is incredibly simple - just scan and go! I love being able to switch between different eSIM profiles for different regions. Customer support is also fantastic.",
    highlight: "Super easy setup"
  },
  {
    name: "David Park",
    role: "Photographer",
    location: "Seoul, South Korea",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I need fast upload speeds to share my work with clients while traveling. GlobaleSIM's 5G network access has been perfect for uploading high-resolution photos and videos from remote locations.",
    highlight: "Excellent for content creators"
  },
  {
    name: "Lisa Thompson",
    role: "Travel Consultant",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I recommend GlobaleSIM to all my clients. The coverage is extensive, prices are competitive, and the customer service is outstanding. It's made international travel so much more convenient.",
    highlight: "Recommended by professionals"
  },
  {
    name: "Alex Kumar",
    role: "Software Developer",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working remotely while traveling requires stable internet. GlobaleSIM has never let me down - whether I'm in a bustling city or a remote beach location, the connection is always solid.",
    highlight: "Perfect for remote work"
  }];


  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30" data-id="gz4ielmhx" data-path="src/components/TestimonialsSection.tsx">
      <div className="container mx-auto px-4" data-id="49lgy7yw5" data-path="src/components/TestimonialsSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="uwag7pmk6" data-path="src/components/TestimonialsSection.tsx">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" data-id="v0rcti4qi" data-path="src/components/TestimonialsSection.tsx">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="gqvzy3ux3" data-path="src/components/TestimonialsSection.tsx">
            Join over 5 million happy customers who trust GlobaleSIM for their connectivity needs around the globe.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" data-id="wzqi75gxr" data-path="src/components/TestimonialsSection.tsx">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }} data-id="yygjls71d" data-path="src/components/TestimonialsSection.tsx">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg" data-id="i844z6dqr" data-path="src/components/TestimonialsSection.tsx">
                <CardContent className="p-6 relative" data-id="8fr2gfwzf" data-path="src/components/TestimonialsSection.tsx">
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" data-id="ol7ecf7uv" data-path="src/components/TestimonialsSection.tsx" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4" data-id="okzr2e4sw" data-path="src/components/TestimonialsSection.tsx">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" data-id="q84hzzzic" data-path="src/components/TestimonialsSection.tsx" />
                  )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed" data-id="lyprykflt" data-path="src/components/TestimonialsSection.tsx">
                    "{testimonial.text}"
                  </p>

                  {/* Highlight Badge */}
                  <div className="mb-4" data-id="geknhojlk" data-path="src/components/TestimonialsSection.tsx">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full" data-id="0fx7ux3w6" data-path="src/components/TestimonialsSection.tsx">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center" data-id="aekrdm30t" data-path="src/components/TestimonialsSection.tsx">
                    <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" data-id="8c8j5j6n1" data-path="src/components/TestimonialsSection.tsx" />

                    <div data-id="4u7yxe2le" data-path="src/components/TestimonialsSection.tsx">
                      <div className="font-semibold text-gray-900" data-id="ygnraiyuc" data-path="src/components/TestimonialsSection.tsx">{testimonial.name}</div>
                      <div className="text-sm text-gray-600" data-id="okwa696yu" data-path="src/components/TestimonialsSection.tsx">{testimonial.role}</div>
                      <div className="text-xs text-gray-500" data-id="zq06bhyza" data-path="src/components/TestimonialsSection.tsx">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16" data-id="ccy4srf9e" data-path="src/components/TestimonialsSection.tsx">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100" data-id="y5nc2zc34" data-path="src/components/TestimonialsSection.tsx">
            <h3 className="text-2xl font-bold mb-6 text-gray-900" data-id="w0ivqdxbm" data-path="src/components/TestimonialsSection.tsx">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60" data-id="tjo5jtmpi" data-path="src/components/TestimonialsSection.tsx">
              <div className="text-2xl font-bold text-gray-400" data-id="g79bm94tk" data-path="src/components/TestimonialsSection.tsx">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400" data-id="mafw01dmk" data-path="src/components/TestimonialsSection.tsx">GlobalTech</div>
              <div className="text-2xl font-bold text-gray-400" data-id="0mbtf51id" data-path="src/components/TestimonialsSection.tsx">StartupXYZ</div>
              <div className="text-2xl font-bold text-gray-400" data-id="o9dyhxmj5" data-path="src/components/TestimonialsSection.tsx">Enterprise Co</div>
            </div>
            <div className="mt-6 text-center" data-id="isb40jkc5" data-path="src/components/TestimonialsSection.tsx">
              <div className="text-sm text-gray-500 mb-2" data-id="0fwdh1ivs" data-path="src/components/TestimonialsSection.tsx">Average Rating</div>
              <div className="flex items-center justify-center" data-id="z05nb0bv8" data-path="src/components/TestimonialsSection.tsx">
                <div className="flex items-center mr-2" data-id="fmpvuwx6a" data-path="src/components/TestimonialsSection.tsx">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" data-id="7pvyblfiu" data-path="src/components/TestimonialsSection.tsx" />
                  )}
                </div>
                <span className="text-2xl font-bold text-gray-900" data-id="evc8rckaq" data-path="src/components/TestimonialsSection.tsx">4.9</span>
                <span className="text-gray-500 ml-1" data-id="3zgejn3ve" data-path="src/components/TestimonialsSection.tsx">(12,847 reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TestimonialsSection;