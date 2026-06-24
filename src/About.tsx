/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code, Cpu, Layers } from "lucide-react";
import profile2 from "./assets/profile2.png";

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for floating shapes
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 overflow-hidden border-b-2 border-neo-black"
    >
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-grid-pattern bg-size-[40px_40px] pointer-events-none opacity-40" />

      {/* Floating Geometric Decorations (Animated) */}
      <motion.div
        style={{ y: yCircle }}
        className="absolute top-20 -left-20 w-64 h-64 bg-neo-yellow rounded-full border-2 border-neo-black opacity-50 hidden md:block"
      />
      <motion.div
        style={{ rotate: rotateShape }}
        className="absolute bottom-40 -right-20 w-40 h-40 bg-neo-teal border-2 border-neo-black opacity-50 hidden md:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <span className="font-mono text-sm font-bold bg-neo-black text-neo-white px-2 py-1 mb-4 inline-block tracking-widest uppercase">
              // 02. About Me
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tight">
              Beyond The <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-neo-black to-neo-black stroke-neo-black">
                Syntax
                {/* SVG Underline Animation */}
                <svg
                  className="absolute -bottom-2 w-full h-3 text-neo-teal"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* Decorative Monospace Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="hidden md:block text-right"
          >
            <p className="font-mono text-xs text-neo-grey">
              LOC: INDIA
              <br />
              EXP: Almost 5 YEARS
              <br />
              STATUS: ONLINE
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* LEFT COLUMN: Visual/Image */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {/* Back Decor Shapes */}
            <div className="absolute top-4 -left-4 w-full h-full bg-neo-teal border-2 border-neo-black z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Pop-up Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-neo-yellow border-2 border-neo-black z-20 flex items-center justify-center font-display font-bold text-2xl shadow-neo-sm"
            >
              9.3 <span className="text-xs ml-1 font-mono">CGPA</span>
            </motion.div>

            {/* Main Image Frame */}
            <div className="relative z-10 w-full aspect-4/5 bg-neo-white border-2 border-neo-black shadow-neo transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-neo-hover overflow-hidden">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neo-black z-30"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neo-black z-30"></div>

              <img
                src={profile2}
                alt="Profile"
                className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 bg-neo-black text-neo-white px-4 py-2 font-mono text-sm border-t-2 border-r-2 border-neo-black">
                FULL_STACK.tsx
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants as any}
              className="font-display text-3xl md:text-4xl font-bold leading-tight"
            >
              Building scalable SaaS & <br />
              <span className="bg-neo-yellow px-1">
                interactive experiences.
              </span>
            </motion.h3>
            <motion.p
              variants={itemVariants as any}
              className="font-sans text-lg md:text-xl text-neo-grey leading-relaxed"
            >
              I’m a Full Stack Developer with over{" "}
              <span className="font-bold text-neo-black">
                Almost 5 years of experience
              </span>{" "}
              turning complex problems into elegant, brutalist code. From
              mentoring juniors to architecting high-performance SaaS platforms,
              I bridge the gap between backend logic and frontend magic.
            </motion.p>
            <motion.p
              variants={itemVariants as any}
              className="font-sans text-base text-neo-grey leading-relaxed border-l-4 border-neo-teal pl-4"
            >
              Recently, I've been diving deep into{" "}
              <span className="font-bold text-neo-black">
                AI-powered web builders
              </span>{" "}
              and{" "}
              <span className="font-bold text-neo-black">3D visualization</span>{" "}
              (Babylon.js), pushing the boundaries of what the web can do.
            </motion.p>
            {/* Tech Specs / Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <SpecCard
                icon={<Code className="w-5 h-5" />}
                label="Core Stack"
                value="React, Next.js, Node"
                variants={itemVariants}
              />
              <SpecCard
                icon={<Layers className="w-5 h-5" />}
                label="Focus"
                value="SaaS, AI Integrations"
                variants={itemVariants}
              />
              <SpecCard
                icon={<Cpu className="w-5 h-5" />}
                label="Specialty"
                value="3D & Interactive UI"
                variants={itemVariants}
              />
              <SpecCard
                icon={<ArrowUpRight className="w-5 h-5" />}
                label="Leadership"
                value="Mentoring & Code Reviews"
                variants={itemVariants}
              />
            </div>
            {/* CTA Button */}
            <motion.div
              variants={itemVariants as unknown as any}
              className="pt-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  x: -4,
                  y: -4,
                  boxShadow: "12px 12px 0px 0px #000000",
                }}
                whileTap={{
                  scale: 0.95,
                  x: 0,
                  y: 0,
                  boxShadow: "4px 4px 0px 0px #000000",
                }}
                className="group relative px-8 py-4 bg-neo-teal text-neo-black font-display font-bold text-lg uppercase tracking-wider border-2 border-neo-black shadow-neo transition-colors duration-200"
              >
                Download Resume
                <span className="absolute bottom-1 right-1 w-2 h-2 bg-neo-black group-hover:bg-white transition-colors"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for the "Specs" grid
const SpecCard = ({
  icon,
  label,
  value,
  variants,
}: {
  icon: any;
  variants: any;
  label: string;
  value: string;
}) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -4, boxShadow: "4px 4px 0px 0px #000000" }}
    className="flex items-center gap-4 p-4 border-2 border-neo-black bg-neo-white transition-all cursor-default"
  >
    <div className="bg-neo-yellow p-2 border-2 border-neo-black shadow-[2px_2px_0px_0px_#000]">
      {icon}
    </div>
    <div>
      <h4 className="font-mono text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </h4>
      <p className="font-display font-bold text-md leading-none mt-1">
        {value}
      </p>
    </div>
  </motion.div>
);

export default AboutSection;
