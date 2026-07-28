import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        page={{
          title: "Student Community and Campus Opportunities",
          description:
            "ThaparSAT is the TIET student community platform for campus events, clubs, hackathons, student opportunities, announcements, and campus resources in Patiala.",
          path: "/",
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <MissionSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
