import { Server, Radio, Cpu, Camera, Package, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import groundStation from "@/assets/ground-station.jpg";
import satelliteTesting from "@/assets/satellite-testing.jpg";
import irCamera from "@/assets/ir-camera.jpg";
import satelliteMonitoring from "@/assets/satellite-monitoring.png";

const InfrastructureSection = () => {
  const groundComponents = [
    { icon: Server, name: "Ground Station System (GSS) with Simulator" },
    { icon: Radio, name: "Antenna Systems" },
    { icon: Cpu, name: "Mission Control Center (MCC)" },
    { icon: Package, name: "Operator Console" },
  ];

  const satelliteComponents = [
    { icon: Cpu, name: "On Board Computer" },
    { icon: Sun, name: "Solar Panel & Power System" },
    { icon: Radio, name: "V/UHF Transceiver Module" },
    { icon: Camera, name: "Payload Transmitter Module" },
    { icon: Package, name: "ADCS & Sun Sensors" },
  ];

  return (
    <section id="infrastructure" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Infrastructure
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fully equipped monitoring station and development center at TIET
            Patiala campus
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          <div className="elegant-card p-6 rounded-lg text-left">
            <div className="text-4xl font-bold text-foreground mb-2">
              ₹5.5Cr
            </div>
            <div className="text-sm text-muted-foreground">Project Cost</div>
          </div>
          <div className="elegant-card p-6 rounded-lg text-left">
            <div className="text-4xl font-bold text-foreground mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
          <div className="elegant-card p-6 rounded-lg text-left">
            <div className="text-4xl font-bold text-foreground mb-2">2-5μm</div>
            <div className="text-sm text-muted-foreground">mini IR Camera</div>
          </div>
          <div className="elegant-card p-6 rounded-lg text-left">
            <div className="text-4xl font-bold text-foreground mb-2">2020</div>
            <div className="text-sm text-muted-foreground">Inaugurated</div>
          </div>
        </div>

        {/* Monitoring Station */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Thapar Satellite Monitoring Station
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="elegant-card p-8 rounded-xl">
              <img
                src={satelliteMonitoring}
                alt="Satellite Monitoring Station"
                className="w-full rounded-lg mb-6"
              />
              <h4 className="text-2xl font-bold mb-4 text-foreground">
                Key Components
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {groundComponents.map((component, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <component.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">
                      {component.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="elegant-card">
                <CardContent className="p-6">
                  <img
                    src={groundStation}
                    alt="Ground Station"
                    className="w-full rounded-lg mb-4"
                  />
                  <h5 className="font-bold text-lg mb-2 text-foreground">
                    THAPARSAT Antenna
                  </h5>
                  <p className="text-muted-foreground text-sm">
                    High-precision antenna system for satellite communication
                    and data reception
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mid-infrared Camera */}
        <div className="elegant-card p-8 md:p-12 rounded-xl mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">
                  Advanced Technology
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Mid-infrared Camera
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Wavelength range of 2-5 μm, specifically designed for space
                applications from Singapore
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Detects greenhouse gases (CO₂, CH₄, N₂O, H₂O)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    High-resolution thermal imaging
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Space-grade durability and precision
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={irCamera}
                alt="IR Camera"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Development Center */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Thapar Satellite Development Center
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="elegant-card p-8 rounded-xl">
              <img
                src={satelliteTesting}
                alt="Satellite Testing Area"
                className="w-full rounded-lg mb-6"
              />
              <h4 className="text-xl font-bold mb-2 text-foreground">
                CUBESAT (THAPARSAT PROJECT)
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Inaugurated on January 31, 2020
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Inaugurated by:</strong>
                </p>
                <p>Dr. A. Sivathanu Pillai (D.R.D. Chair, IIT Madras)</p>
                <p>Prof. Prakash Gopalan (Director, TIET)</p>
              </div>
            </div>

            <div className="elegant-card p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-6 text-foreground">
                Main Satellite Components
              </h4>
              <div className="space-y-3">
                {satelliteComponents.map((component, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <component.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{component.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
