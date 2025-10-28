import { Users, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import mentorPillai from "@/assets/mentor-pillai.jpg";
import mentorKrishnaswamy from "@/assets/mentor-krishnaswamy.jpg";
import mamtaGulati from "@/assets/dr-mamta-gulati.jpg";
import vineetSrivastava from "@/assets/dr-vineet-srivastava.jpeg";
import prashantRana from "@/assets/dr-prashant-singh-rana.jpg";
import rajeshKhanna from "@/assets/dr-rajesh-khanna.webp";
import hemJoshi from "@/assets/dr-hem-dutt-joshi.webp";
import bharatGarg from "@/assets/dr-bharat-garg.jpg";
import { Calendar, ArrowRight } from "lucide-react";

const TeamSection = () => {
  const mentors = [
    {
      name: "Dr. A Sivathanu Pillai",
      role: "Founder CEO & MD, BrahMos Aerospace Pvt. Ltd",
      image: mentorKrishnaswamy,
    },
    {
      name: "Dr. M Krishnaswamy",
      role: "Former Scientist, URSC, ISRO",
      image: mentorPillai,
    },
  ];

  const facultyMentors = [
    {
      name: "Dr. Mamta Gulati",
      image: mamtaGulati,
    },
    {
      name: "Dr. Vineet Srivastava",
      image: vineetSrivastava,
    },
    {
      name: "Dr. Prashant Singh Rana",
      image: prashantRana,
    },
    {
      name: "Dr. Rajesh Khanna",
      image: rajeshKhanna,
    },
    {
      name: "Dr. Hem Dutt Joshi",
      image: hemJoshi,
    },
    {
      name: "Dr. Bharat Garg",
      image: bharatGarg,
    },
  ];

  const stakeholders = [
    "Department of Agriculture",
    "Department of Environment & Climate Change",
    "Department of Local Government",
    "Punjab Agriculture University (PAU)",
    "Punjab State Council for Science and Technology (PSCST)",
    "Punjab Remote Sensing Centre (PRSC)",
    "Punjab Pollution Control Board (PPCB)",
  ];

  return (
    <section id="team" className="py-12 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project Mentors & Collaborators
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by distinguished scientists and supported by industry
            partnerships
          </p>
        </div>

        {/* Key Mentors */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="elegant-card overflow-hidden hover:shadow-xl transition-all"
            >
              <CardContent className="p-0">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {mentor.name}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {mentor.role}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Faculty Mentors */}
          <Card className="elegant-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Faculty Mentors from TIET
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {facultyMentors.map((faculty, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Avatar className="w-20 h-20 mb-3">
                      <AvatarImage src={faculty.image} alt={faculty.name} />
                      <AvatarFallback>
                        {faculty.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-foreground text-base text-center">
                      {faculty.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Government Stakeholders */}
          <Card className="elegant-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Government Stakeholders
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Collaboration with Punjab Government for satellite data sharing
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {stakeholders.map((stakeholder, index) => (
                  <Badge key={index} variant="outline">
                    {stakeholder}
                  </Badge>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex  gap-3 pb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-foreground">
                  Industry Collaboration
                </h4>
              </div>
              <p className="text-sm font-bold text-primary mb-1">
                Data Patterns, Chennai
              </p>
              <p className="text-xs text-muted-foreground">
                Leading aerospace and defense systems integrator
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Student Contribution */}
        <div className="elegant-card p-8 md:p-12 rounded-xl text-center max-w-2xl mx-auto">
          <div className="text-6xl font-bold text-gradient mb-4">100+</div>
          <p className="text-xl text-foreground font-medium mb-2">
            Students Involved
          </p>
          <p className="text-muted-foreground">
            Over a period of 3 years, more than 100 students have contributed to
            the ThaparSat project, gaining hands-on experience in satellite
            technology and space science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
