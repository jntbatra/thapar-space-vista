import { CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Monitoring Atmospheric Greenhouse Gases",
      excerpt:
        "Thapar Satellite Program (ThaparSat) is developing a Mid-Wave Infrared (MWIR) imaging payload to monitor atmospheric greenhouse gases.",
      date: "July 2026",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEC0xIwfExdIg/feedshare-shrink_800/B56Z9FOnCfIMAc-/0/1783572886071?e=2147483647&v=beta&t=3hUC6LZHQimQF5zHuQd5TKV3xdfhpbwTyJXNsWv1QYQ",
      category: "Innovation",
      link: "https://www.linkedin.com/posts/thaparinstitute-tiet-thaparsat-ugcPost-7480846898011009025-JJx2/"
    },
    {
      id: 2,
      title: "Journey to Low Earth Orbit",
      excerpt:
        "Built at TIET, monitored through the Patiala Ground Station, and tracked by ISRO via the Satish Dhawan Space Centre.",
      date: "July 2026",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQGn3wBF3qhh2A/feedshare-shrink_800/B56Z9FOmLcJoAg-/0/1783572882503?e=2147483647&v=beta&t=tk8DRmU3xoaazNRF3oRICoccQONIT6fBYD7SeioZIMA",
      category: "Mission",
      link: "https://www.linkedin.com/posts/thaparinstitute-tiet-thaparsat-ugcPost-7480846898011009025-JJx2/"
    },
    {
      id: 3,
      title: "Future Environmental Applications",
      excerpt:
        "Advancing research with future applications in soil moisture measurement and forest fire detection for meaningful environmental impact.",
      date: "July 2026",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEVbZWKBhRtRg/feedshare-shrink_800/B56Z9FOlF9HYAc-/0/1783572878012?e=2147483647&v=beta&t=2EzGhpymzu3fGbFvkbA-pjNCvMB55KTQKrYEIJjztrQ",
      category: "Research",
      link: "https://www.linkedin.com/posts/thaparinstitute-tiet-thaparsat-ugcPost-7480846898011009025-JJx2/"
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
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-card border border-border hover:border-accent/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
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
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-accent hover:text-accent/80"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
