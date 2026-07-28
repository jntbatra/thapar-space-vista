import Navigation from "@/components/Navigation";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const TeamPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SeoHead
        page={{
          title: "Team, Mentors and Student Clubs",
          description:
            "Meet the ThaparSAT mentors, faculty experts, TIET collaborators, and student contributors building a stronger Thapar University student community.",
          path: "/team",
        }}
      />
      <Navigation />
      <main>
        <h1 className="sr-only">ThaparSAT Team and Mentors</h1>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
