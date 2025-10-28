import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite } from "lucide-react";
import thaparLogo from "@/assets/thaparsat-logo.png";
import tietLogo from "@/assets/tiet-logo.png";
import videoSrc from "@/assets/videoplayback.webm";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to mute the video for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-5" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in">
          <Satellite className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">
            Thapar Satellite Program
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in animation-delay-200 text-white">
          THAPARSAT
        </h1>

        <p className="text-xl md:text-2xl text-white mb-4 animate-fade-in animation-delay-400 max-w-3xl font-medium">
          Real-time monitoring of pollution and soil moisture content in
          Northern India
        </p>

        <p className="text-base md:text-lg text-white/80 mb-12 animate-fade-in animation-delay-600 max-w-2xl">
          Nationwide first of its kind initiative by TIET (Deemed to be
          University)
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in animation-delay-800 mb-20">
          <Link to="/infra">
            <Button size="lg" className="text-lg px-8 py-6 group shadow-lg">
              Explore Mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
