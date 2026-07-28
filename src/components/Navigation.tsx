import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import thaparSatLogo from "@/assets/thaparsat-logo.png";
import thaparLogo from "@/assets/tiet-logo.png";
import tiLogo from "@/assets/ti-logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "News", href: "/news" },
    { name: "Infrastructure", href: "/infra" },
  ];

  return (
    <nav
      className={`
    absolute top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isHome ? "bg-transparent" : "bg-white"}
  `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={thaparSatLogo}
                alt="ThaparSAT logo"
                className={isHome ? "w-auto h-20" : "w-auto h-20"}
                width={320}
                height={80}
                decoding="async"
              />
            </Link>
            <a href="https://www.thapar.edu/" rel="noopener noreferrer">
              <img
                src={isHome ? thaparLogo : tiLogo}
                alt="Thapar Institute of Engineering and Technology logo"
                className={isHome ? "w-auto h-11" : "w-auto h-11"}
                width={220}
                height={44}
                decoding="async"
              />{" "}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors relative group ${
                  isHome
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-destructive hover:bg-destructive/90"
                aria-label="Contact ThaparSAT team"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isHome ? "text-white" : "text-black"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className={`md:hidden absolute left-4 right-4 top-full mt-2 p-6 rounded-2xl border shadow-2xl backdrop-blur-2xl animate-slide-in ${
              isHome ? "bg-black/60 border-white/10" : "bg-white/90 border-black/5"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 transition-colors ${
                    isHome
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="w-full">
                <Button
                  size="sm"
                  className="bg-destructive hover:bg-destructive/90 w-full"
                  aria-label="Contact ThaparSAT team"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
