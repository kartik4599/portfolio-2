import { motion } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Hero Section", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Project Showcase", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-neo-black text-neo-white overflow-hidden border-t-2 border-neo-teal">
      {/* 1. SCROLLING MARQUEE */}
      <div className="w-full bg-neo-teal text-neo-black py-3 border-b-2 border-neo-black overflow-hidden relative z-10">
        <motion.div
          className="flex whitespace-nowrap font-mono font-bold text-lg uppercase tracking-widest"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array(10)
            .fill(
              " // OPEN FOR OPPORTUNITIES // AVAILABLE FOR FREELANCE // LET'S BUILD SOMETHING BRUTAL",
            )
            .map((text, i) => (
              <span key={i} className="mx-4">
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8 relative z-10">
        {/* 2. MASSIVE CTA HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="font-mono text-neo-teal text-sm mb-4 block">
              &lt;status&gt; ONLINE & READY &lt;/status&gt;
            </span>
            <h2 className="font-display text-6xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tighter">
              Let's <br />
              <span className="text-stroke-2 stroke-neo-white text-neo-yellow/5 hover:text-neo-yellow transition-colors duration-300">
                Collaborate
              </span>
            </h2>
          </div>

          {/* "Back to Top" Button */}
          <button
            onClick={scrollToTop}
            className="group hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-neo-white hover:bg-neo-teal hover:border-neo-black hover:text-neo-black transition-all duration-300"
          >
            <ArrowUp className="w-8 h-8 group-hover:-translate-y-2 transition-transform duration-300" />
            <span className="font-mono text-xs mt-2 uppercase">Top</span>
          </button>
        </div>

        {/* 3. NAVIGATION GRID & SOCIALS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t-2 border-neo-grey pt-12">
          {/* Navigation Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group flex items-center gap-2 font-display text-xl uppercase hover:text-neo-teal transition-colors"
              >
                <span className="w-2 h-2 bg-neo-grey group-hover:bg-neo-teal transition-colors"></span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Social / Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="font-mono text-sm text-white uppercase">
              Connect_Nodes
            </h4>

            <div className="flex flex-col gap-4">
              <SocialLink icon={<Mail />} label="kartikmendu2@gmail.com" />
              <div className="flex gap-4">
                <SocialIcon href="#" icon={<Github />} />
                <SocialIcon href="#" icon={<Linkedin />} />
                <SocialIcon href="#" icon={<Twitter />} />
              </div>
            </div>
          </div>
        </div>

        {/* 4. COPYRIGHT BAR */}
        <div className="mt-24 pt-8 border-t-2 border-neo-grey flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-neo-teal">
          <p>© 2026 KARTIK MENDU. ALL SYSTEMS NOMINAL.</p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-neo-teal opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

// --- SUB-COMPONENTS ---

const SocialLink = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={`mailto:${label}`}
    className="flex items-center gap-4 group cursor-pointer border-2 border-transparent hover:border-neo-teal p-2 transition-all"
  >
    <div className="bg-neo-white text-neo-black p-2 group-hover:bg-neo-teal transition-colors">
      {icon}
    </div>
    <span className="font-mono text-sm md:text-base group-hover:text-neo-teal transition-colors">
      {label}
    </span>
  </a>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    className="w-12 h-12 flex items-center justify-center border-2 border-neo-white hover:bg-neo-yellow hover:text-neo-black hover:border-neo-black hover:shadow-[4px_4px_0px_0px_#fff] transition-all duration-200"
  >
    {icon}
  </a>
);

export default Footer;
