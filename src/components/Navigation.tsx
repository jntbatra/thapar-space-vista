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
                alt="ThaparSat"
                className={isHome ? "w-auto h-20" : "w-auto h-20"}
              />
            </Link>
            <a href="https://www.thapar.edu/">
              <img
                src={isHome ? thaparLogo : tiLogo}
                alt="Thapar Institute"
                className={isHome ? "w-auto h-11" : "w-auto h-11"}
              />{" "}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative group ${
                  isHome
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Button
              size="sm"
              className="bg-destructive hover:bg-destructive/90"
              onClick={() => {
                window.location.href =
                  "mailto:contact@thapar.edu?cc=mamta.gulati@thapar.edu";
              }}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isHome ? "text-white" : "text-black"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className={`md:hidden py-4 border-t animate-slide-in ${
              isHome ? "border-white/10" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-2 transition-colors ${
                    isHome
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-destructive hover:bg-destructive/90 w-full"
                onClick={() => {
                  window.location.href =
                    "mailto:contact@thapar.edu?cc=mamta.gulati@thapar.edu";
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
