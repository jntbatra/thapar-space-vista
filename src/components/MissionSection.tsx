import React, { useEffect, useRef } from "react";
import { Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import stubbleImg from "@/assets/stubble-burning.webp";
import unsustainImg from "@/assets/unsustainable-agriculture.jpg";
import wasteImg from "@/assets/industrial-solid-waste.jpg";
import lowWaterImg from "@/assets/low-water-table.png";
import cycloneImg from "@/assets/soil_moisture.jpg";
import groundStationImg from "@/assets/pollution.jpg";
import satelliteMonitoringImg from "@/assets/forestfire.webp";
import satelliteTestingImg from "@/assets/galciar.webp";
import irCameraImg from "@/assets/gas.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  const applicationImages = [
    cycloneImg,
    groundStationImg,
    satelliteMonitoringImg,
    satelliteTestingImg,
    irCameraImg,
    stubbleImg,
  ];

  const applications = [
    {
      title: "Soil Moisture Content",
      description:
        "Identify cultivation patterns and monitor soil quality to support sustainable agriculture.",
      color: "text-primary",
      image: applicationImages[0],
    },
    {
      title: "Real-time Pollution Monitoring",
      description:
        "Collect day-to-day data on greenhouse gas emissions and air quality trends.",
      color: "text-primary",
      image: applicationImages[1],
    },
    {
      title: "Forest Fire Detection",
      description:
        "Enable early alerts for forest fires and stubble burning using satellite data.",
      color: "text-destructive",
      image: applicationImages[2],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Track temperature variations in water bodies for weather prediction and sea surface studies.",
      color: "text-secondary",
      image: applicationImages[3],
    },
    {
      title: "Industrial Leak Detection",
      description:
        "Detect gas leaks and emissions from pipelines and refineries to reduce hazards.",
      color: "text-primary",
      image: applicationImages[4],
    },
    {
      title: "Greenhouse Gas Tracking",
      description:
        "Monitor methane, CO₂, and N₂O emissions across agricultural and industrial zones.",
      color: "text-secondary",
      image: applicationImages[5],
    },
  ];

  const issueCards = [
    {
      img: stubbleImg,
      title: "Stubble Burning",
      description:
        "Crop residue burning during harvest seasons causes major air pollution and health hazards.",
    },
    {
      img: unsustainImg,
      title: "Unsustainable Agriculture",
      description:
        "Excessive fertilizer use and monocropping degrade soil fertility and biodiversity.",
    },
    {
      img: wasteImg,
      title: "Industrial & Solid Waste",
      description:
        "Untreated waste and industrial effluents contaminate water sources and agricultural land.",
    },
    {
      img: lowWaterImg,
      title: "Falling Water Table",
      description:
        "Overextraction of groundwater leads to scarcity and reduced agricultural resilience.",
    },
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const el = carouselRef.current;
    const slides = el.querySelectorAll(".swiper-slide");
    const totalSlides = slides.length + 0.5;

    if (totalSlides === 0) return;

    // Calculate slide width and container visible width for exact scroll distance
    const slideWidth = slides[0].offsetWidth;
    const visibleWidth = el.offsetWidth;

    // Calculate total scroll distance minus visible width to prevent empty scrolls
    const totalScrollDistance = slideWidth * totalSlides - visibleWidth;

    gsap.to(el.querySelector(".swiper-wrapper"), {
      x: -totalScrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + totalScrollDistance,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="py-10 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Applications
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Applications of ThaparSat
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering research in environmental monitoring and space technology
            to support sustainable policy-making in Punjab and neighboring
            regions.
          </p>
        </header>

        <div
          ref={carouselRef}
          className="swiper-container elegant-card p-6 rounded-xl mx-auto mb-8 overflow-hidden relative"
          style={{ touchAction: "pan-y" }}
        >
          {/* Removed top border div */}

          <div className="swiper-wrapper flex">
            {applications.map(({ title, description, color, image }, i) => (
              <div
                key={i}
                className="swiper-slide flex-shrink-0 px-4 cursor-pointer group"
                style={{ width: "320px", height: "400px" }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 h-full overflow-hidden relative">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/40 to-transparent group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-start p-6 z-10">
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="elegant-card p-8 md:p-12 rounded-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            ThaparSat: Tackling Punjab's Environmental Challenges
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {issueCards.map(({ img, title, description }, i) => (
              <Card
                key={i}
                className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MissionSection;
