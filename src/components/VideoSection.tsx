import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Play, Youtube } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Mock video data - will be replaced with backend data
  const videos = [
    {
      id: "1",
      title: "Introducing ThaparSat: Revolutionizing Space Tech in India | TIET",
      thumbnail: "https://img.youtube.com/vi/JbqprL_RKM8/sddefault.jpg",
      videoId: "JbqprL_RKM8",
      duration: "3:24",
    },
    {
      id: "2",
      title: "ThaparSat: Empowering Students Through Real-World Innovation | TIET",
      thumbnail: "https://img.youtube.com/vi/8cK-gyItGi4/sddefault.jpg",
      videoId: "8cK-gyItGi4",
      duration: "2:04",
    },
    {
      id: "3",
      title: "Inspiring Young Minds: ThaparSat Program Visit by School Students",
      thumbnail: "https://img.youtube.com/vi/ThOmnBMDzKo/sddefault.jpg",
      videoId: "ThOmnBMDzKo",
      duration: "1:20",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 mb-6">
            <Youtube className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              Video Gallery
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Watch Our <span className="text-gradient-blue">Journey</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore ThaparSat's mission through our comprehensive video
            collection showcasing technology, operations, and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/80 text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                  {video.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Video Modal Placeholder - would be implemented with actual YouTube embed */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveVideo(null)}
          >
            <div className="max-w-5xl w-full aspect-video bg-card rounded-lg overflow-hidden border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${
                  videos.find((v) => v.id === activeVideo)?.videoId
                }?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
