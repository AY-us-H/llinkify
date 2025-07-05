import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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

      </section>
    </div>
  );
}


