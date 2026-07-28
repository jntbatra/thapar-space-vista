import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Mail, MapPin, User, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-28 flex flex-col">
      <SeoHead
        page={{
          title: "Contact Us - ThaparSAT",
          description:
            "Get in touch with the ThaparSAT team at Thapar Institute of Engineering and Technology, Patiala.",
          path: "/contact",
          ogType: "website",
        }}
      />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-blue">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about the ThaparSAT mission or want to collaborate? 
            Reach out to our project coordinator and team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl animate-fade-in animation-delay-200">
          <Card className="elegant-card h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-foreground">
                <User className="w-6 h-6 text-primary" />
                Project Coordinator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Dr. Mamta Gulati</h3>
                <p className="text-muted-foreground">Assistant Professor, School of Mathematics</p>
                <p className="text-muted-foreground">Head of Thapar Satellite Program</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:mamta.gulati@thapar.edu" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  mamta.gulati@thapar.edu
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="elegant-card h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-foreground">
                <Building className="w-6 h-6 text-secondary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Thapar Satellite Monitoring Station</h3>
                <p className="text-muted-foreground">Thapar Institute of Engineering and Technology</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <address className="not-italic text-muted-foreground leading-relaxed">
                  Bhadson Road,<br />
                  Patiala - 147004,<br />
                  Punjab, India
                </address>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
