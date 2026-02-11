import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "kartikmendu2@gmail.com"; // Replace with actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-neo-black text-neo-white pt-24 pb-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Decor: Radar Circles */}
      <div className="absolute top-0 right-0 w-125 h-125 border border-neo-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-175 h-175 border border-neo-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* LEFT: Call to Action */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block border border-neo-teal text-neo-teal px-3 py-1 font-mono text-xs uppercase tracking-widest mb-6"
              >
                ● Status: Open for Work
              </motion.div>

              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-[0.85] mb-8">
                Let's <br />
                <span className="text-neo-yellow">Build</span> <br />
                The Future.
              </h2>

              <p className="font-sans text-stone-500 text-lg max-w-md leading-relaxed mb-12">
                Currently specializing in React/Next, JS backend, AI-driven SaaS
                & 3D Web Experiences.
              </p>
            </div>

            {/* Email Interaction */}
            <div className="relative group cursor-pointer" onClick={handleCopy}>
              <div className="absolute inset-0 bg-neo-teal transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative bg-neo-white text-neo-black border-2 border-neo-teal p-6 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 transition-transform">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-500 uppercase mb-1">
                    {copied ? "Address Copied!" : "Initiate Contact"}
                  </span>
                  <span className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight break-all">
                    {email}
                  </span>
                </div>
                <div className="p-3 bg-neo-black text-neo-white rounded-full">
                  {copied ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Copy className="w-6 h-6" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Social Grid (Massive Buttons) */}
          <div className="flex flex-col gap-4 justify-center">
            <SocialButton
              label="LinkedIn"
              sub="Professional Profile"
              icon={<Linkedin className="w-6 h-6" />}
              href="https://www.linkedin.com/in/kartik-mendu-6a7496245"
              color="hover:bg-[#0077b5] hover:text-white"
            />
            <SocialButton
              label="GitHub"
              sub="Source Code"
              icon={<Github className="w-6 h-6" />}
              href="https://github.com/kartik4599"
              color="hover:bg-[#333] hover:text-white"
            />
            <SocialButton
              label="Download Resume"
              sub="PDF"
              icon={<FileText className="w-6 h-6" />}
              href="https://drive.google.com/file/d/1AvPmJ25NgnAH9qlsVrll2TiTbbi-R0NC/view"
              color="hover:bg-neo-yellow hover:text-neo-black"
              isPrimary
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: Social Button ---
const SocialButton = ({
  label,
  sub,
  icon,
  href,
  color,
  isPrimary = false,
}: {
  label: string;
  sub: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  isPrimary?: boolean;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`group relative block w-full`}
  >
    {/* Background Shadow */}
    <div
      className={`absolute inset-0 bg-neo-white/10 transform translate-x-0 translate-y-0 transition-all duration-200 group-hover:translate-x-2 group-hover:translate-y-2`}
    ></div>

    {/* Main Button */}
    <div
      className={`relative flex items-center justify-between p-6 border border-neo-white/20 bg-neo-black transition-colors duration-300 ${color} ${isPrimary ? "border-neo-teal/50" : ""}`}
    >
      <div className="flex items-center gap-6">
        <div
          className={`p-3 border border-neo-white/20 bg-neo-white/5 ${isPrimary ? "text-neo-teal" : "text-neo-white"} group-hover:border-transparent group-hover:bg-black/20`}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-display font-bold text-xl uppercase tracking-wider">
            {label}
          </h4>
          <p className="font-mono text-xs opacity-60 group-hover:opacity-100">
            {sub}
          </p>
        </div>
      </div>

      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </div>
  </motion.a>
);

export default ContactSection;
