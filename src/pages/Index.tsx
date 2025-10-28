import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import InfrastructureSection from "@/components/InfrastructureSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MissionSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
