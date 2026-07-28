import InfrastructureSection from "@/components/InfrastructureSection";
import Navigation from "@/components/Navigation";
import SeoHead from "@/components/SeoHead";

const Infrastructure = () => {
  return (
    <div>
      <SeoHead
        page={{
          title: "Infrastructure and Campus Resources",
          description:
            "Explore ThaparSAT infrastructure, labs, monitoring facilities, and campus resources at TIET Patiala supporting student research and innovation.",
          path: "/infra",
        }}
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <h1 className="sr-only">ThaparSAT Infrastructure and Facilities</h1>
        <InfrastructureSection />
      </main>
    </div>
  );
};

export default Infrastructure;