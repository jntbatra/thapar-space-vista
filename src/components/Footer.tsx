import { Satellite, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                <Satellite className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-gradient-blue">
                THAPAR-SAT
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A pioneering satellite project by Thapar Institute of Engineering
              & Technology, dedicated to real-time environmental monitoring of
              Northern India.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>TIET, Patiala, Punjab, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Team", href: "/team" },
                { label: "News", href: "/news" },
                { label: "Infrastructure", href: "/infra" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:mamta.gulati@thapar.edu" className="text-sm hover:text-primary transition-colors">
                  mamta.gulati@thapar.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-0 mb-4">
          <h4 className="text-center text-sm font-medium text-muted-foreground mb-4">
            In Collaboration With
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <a
              href="https://www.isro.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISRO
            </a>
            <span>•</span>
            <a
              href="https://www.datapatterns.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Patterns Chennai
            </a>
            <span>•</span>
            <a
              href="https://punjab.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Punjab Government
            </a>
            <span>•</span>
            <a
              href="https://www.pau.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PAU
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground flex flex-col items-center gap-2">
          <p>
            © {new Date().getFullYear()} ThaparSat. All rights reserved. |
            Inaugurated January 31, 2020
          </p>
          <p className="text-xs text-muted-foreground/60">
            Developed by Bhumit Gupta & Jayant Batra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
