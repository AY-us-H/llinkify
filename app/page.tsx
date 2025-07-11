import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, BarChart3, Palette, Shield, Smartphone, Users, Zap, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Fully Customizable",
    description: "Make your link page uniquesly yours with custom themes, colors and layouts that match your brand."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Track clicks, understand your audience, and optimize your content with detailed insights and reports."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Optimized",
    description: "Your link page looks perfect on every device, from desktop computers to mobile phones."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with instant loading times and seamless user experience"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee to keep your links always accessible"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Work together with your team to manage and optimize your link pages collaboratively"
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Content Creator",
    content: "Linkify has completely transformed how I share my content. The analytics help me understand what my audience loves, and the customization options are incredible. My engagement has increased by 40% since switching!",
    rating: 5
  },
  {
    name: "Arjun Patel",
    role: "Digital Marketing Manager",
    content: "As a marketing professional, I need tools that are both powerful and easy to use. Linkify delivers on both fronts. The team collaboration features make it perfect for our agency's needs.",
    rating: 5
  },
  {
    name: "Aisha Khan",
    role: "Influencer",
    content: "I've tried many link-in-bio tools, but Linkify is by far the best. The mobile optimization is flawless, and my followers love how fast and beautiful my page loads. Highly recommended!",
    rating: 5
  }
]

export default async function Home() {

  const { userId } = await auth();
  if(userId){
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header isFixed={true}/>
      {/* creating Hero section */}
      <section className="px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                One link,
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Infinite Possibilities
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto">
              </div>

              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Create a beautiful, customizable link-in-bio page that showcases your important links in one place.Perfect for creators, businesses, and anyone looking to share multiple links effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto border-0">
                  <Link href="/dashboard" className="flex items-center gap-2 text-white">
                    Start building free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-6 h-auto">
                  <Link href="#features">See how it works</Link>
                </Button>
              </div>

              <div className="pt-12">
                <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ creators worldwide</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-2xl font-bold text-gray-400">Creator</div>
                  <div className="text-2xl font-bold text-gray-400">Business</div>
                  <div className="text-2xl font-bold text-gray-400">Influencer</div>
                  <div className="text-2xl font-bold text-gray-400">Artist</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything you need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed to help you share your content and grow your audience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What our users say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied creators who trust Linkify for their link-in-bio needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">Ready to get started</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of creators who trust Linkify to showcase their content. Create your beautiful link page in minutes not hours.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              >
                <Link href="/dashboard" className="flex items-center gap-2">
                  Create your linkify
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4"/>Free to start
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4"/>No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4"/>Setup in 15 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 px-4 lg:px-8 py-12">
            <div className="mx-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-9">
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-gray-900">
                    Linkify
                  </div>
                    <p className="text-gray-600">The easiest way to share all your links in one beautiful page</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Analytics</div>
                    <div>Integration</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>About</div>
                    <div>Blog</div>
                    <div>Careers</div>
                    <div>Contact</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>Help Center</div>
                    <div>Documentation</div>
                    <div>Community</div>
                    <div>Status</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
                  <p>&copy; 2025 Linkify. All rights reserved.....bla bla</p>
              </div>
            </div>
      </footer>
    </div>
  );
}


