import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
{ label: "Home", path: "/" },
{ label: "About Us", path: "/about" },
{ label: "Products", path: "/products" },
{ label: "Media", path: "/media" },
{ label: "Contact Us", path: "/contact" }];


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#e9e9e9] border-b border-[#d0d0d0] mb-5">
      <div className="container mx-auto flex items-center justify-between h-11 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Infinity - Strong | Reliable | Beautiful" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
            location.pathname === item.path ?
            "text-primary bg-primary/10" :
            "text-muted-foreground hover:text-primary hover:bg-primary/5"}`
            }>
            
              {item.label}
            </Link>
          )}
        </nav>

        <button
          className="md:hidden p-1.5 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen &&
      <div className="md:hidden border-t border-border bg-background">
          {navItems.map((item) =>
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setMobileOpen(false)}
          className={`block px-6 py-3 text-sm font-medium border-b border-border/50 ${
          location.pathname === item.path ?
          "text-primary bg-primary/5" :
          "text-muted-foreground hover:text-primary"}`
          }>
          
              {item.label}
            </Link>
        )}
        </div>
      }
    </header>);

};

export default Header;