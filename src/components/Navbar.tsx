"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GlassWater, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Profile", path: "/profile" },
  ];

  const isHomePage = pathname === "/";
  const shouldUseWhite = !isScrolled && isHomePage && !isOpen;

  // Don't render standard navbar in admin
  if (pathname.startsWith("/admin")) {
    return (
      <nav className="sticky top-0 w-full z-50 bg-card border-b border-border/50 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Babylonia" className="h-12 object-contain" />
          <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase ml-2">Admin</span>
        </Link>
        <Link href="/admin">
          <div className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
            <ShieldCheck className="w-4 h-4 text-gold" />
            Dashboard
          </div>
        </Link>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#fff8f5]/95 backdrop-blur-md py-3 border-b border-border/20 shadow-sm" 
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Babylonia" 
              className="h-16 md:h-20 object-contain transform scale-[1.8] translate-y-[6px] origin-left transition-all duration-300" 
              style={{ filter: shouldUseWhite ? "invert(1)" : "none" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-sans text-xs font-bold tracking-widest uppercase relative py-2 transition-colors duration-300 ${
                    isActive
                      ? shouldUseWhite
                        ? "text-amber-400"
                        : "text-primary"
                      : shouldUseWhite
                      ? "text-white hover:text-white/80"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute left-0 bottom-0 w-full h-[1px] ${
                        shouldUseWhite ? "bg-gold" : "bg-primary"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/reservations">
              <button className="bg-primary text-white font-sans text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-DEFAULT hover:bg-opacity-90 transition-all duration-300">
                Book A Table
              </button>
            </Link>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu" 
              className={`focus:outline-none transition-colors duration-300 ${
                shouldUseWhite ? "text-white" : "text-foreground"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#fff8f5] pt-24 px-6 flex flex-col justify-start space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-xl font-medium tracking-wider uppercase py-2 border-b border-border/30 ${pathname === item.path ? "text-primary font-bold" : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/reservations" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-primary text-white font-sans text-base font-bold tracking-widest uppercase py-4 rounded-DEFAULT hover:bg-opacity-90 transition-all mt-4">
                Book A Table
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
