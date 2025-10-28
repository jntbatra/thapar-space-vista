import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsSection = () => {
  // Mock news data - will be replaced with backend data
  const newsItems = [
    {
      id: 1,
      title: "ThaparSat Successfully Tracks Cyclone Formation",
      excerpt:
        "Our satellite successfully monitored and provided critical data during the June 2023 cyclone event over Northern India.",
      date: "June 25, 2023",
      image:
        "https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=2070",
      category: "Achievement",
    },
    {
      id: 2,
      title: "New Ground Station Capabilities Unveiled",
      excerpt:
        "Enhanced monitoring capabilities at TIET Patiala ground station enable real-time environmental data processing.",
      date: "May 15, 2023",
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070",
      category: "Technology",
    },
    {
      id: 3,
      title: "Partnership with Punjab Government Departments",
      excerpt:
        "ThaparSat data now integrated with state departments for agricultural and environmental policy decisions.",
      date: "April 8, 2023",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
      category: "Collaboration",
    },
  ];

  return (
    <section id="news" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Latest Updates
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            News & <span className="text-gradient-blue">Achievements</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with ThaparSat's latest developments, research
            findings, and contributions to environmental science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card border border-border hover:border-accent/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-accent hover:text-accent/80"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
