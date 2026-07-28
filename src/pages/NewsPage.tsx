import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const NewsPage = () => {
  return (
    <div className="min-h-screen pt-28">
      <SeoHead
        page={{
          title: "Campus Events, Announcements and Achievements",
          description:
            "Read ThaparSAT campus events, student opportunities, announcements, and technology updates from Thapar Institute of Engineering and Technology.",
          path: "/news",
          ogType: "article",
        }}
      />
      <Navigation />
      <main>
        <h1 className="sr-only">ThaparSAT News and Campus Events</h1>
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
