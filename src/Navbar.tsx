import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#tech" },
    { name: "Work", href: "#projects" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-all duration-300 ${
          isScrolled
            ? "bg-neo-white/90 backdrop-blur-md border-neo-black py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-360 mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* 1. LOGO / BRAND */}
          <a href="#" className="group flex items-center gap-2">
            <div className="bg-neo-black text-neo-white p-2 border-2 border-neo-black group-hover:bg-neo-teal group-hover:text-neo-black transition-colors">
              <Terminal size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl uppercase tracking-tighter">
                KARTIK.MENDU
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neo-grey">
                Full_Stack.dev
              </span>
            </div>
          </a>

          {/* 2. DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-mono text-sm font-bold uppercase tracking-wider hover:text-neo-teal transition-colors group"
              >
                // {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neo-black group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-neo-off-white border border-neo-black rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-[10px] font-bold text-gray-500">
                AVAILABLE
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2 bg-neo-black text-neo-white font-display font-bold uppercase border-2 border-neo-black hover:bg-neo-teal hover:text-neo-black hover:translate-x-1 hover:-translate-y-1 hover:shadow-neo-sm transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* 3. MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 border-2 border-neo-black bg-neo-white hover:bg-neo-yellow transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* 4. MOBILE MENU OVERLAY (The "Takeover") */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-60 bg-neo-yellow flex flex-col p-6 md:px-12"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center mb-12 border-b-2 border-neo-black pb-6">
              <span className="font-display font-bold text-2xl">MENU_01</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 border-2 border-neo-black bg-neo-white hover:bg-neo-black hover:text-neo-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6">
              {navLinks
                .concat({ name: "Contact", href: "#contact" })
                .map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center justify-between font-display text-5xl font-bold uppercase tracking-tight text-neo-black border-b border-neo-black/20 pb-4"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
            </div>

            {/* Background Texture for Menu */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-[-1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
