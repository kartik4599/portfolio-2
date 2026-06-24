import { useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Cuboid, Cpu, Network, Layers } from "lucide-react";

// --- DATA: Structured from your resume ---
const experienceData = [
  {
    id: "01",
    role: "Sr. Full Stack Developer",
    company: "Programming.com",
    location: "Pune, IN", // Typically their HQ, adjust if you are remote/Ahmedabad
    period: "2026.02 — Present",
    duration: "5 Months",
    type: "full-time",
    highlight: "FinTech & Omni-Channel Systems",
    description: [
      "Engineered a centralized Communication Hub orchestrating automated emails, WhatsApp messages, and SMS notifications organization-wide.",
      "Developed a high-conversion loan lead generation portal, optimizing user journeys to scale application intake.",
      "Architected core loan calculation engines and portals to ensure precision financial computations and real-time processing.",
    ],
    tech: [
      "Next.Js",
      "Nest JS",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "MongoDB",
      "Redis",
    ],
    color: "bg-neo-emerald",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: "02",
    role: "Full Stack Web Developer",
    company: "Mindinventory",
    location: "Ahmedabad, IN",
    period: "2024.10 — 2026.01",
    duration: "15 Months",
    type: "contract", // visual tag
    highlight: "AI-Powered Platforms",
    description: [
      "Architected a Next.js/Redis engine for an AI website builder.",
      "Automated generation workflows, cutting user launch time by ~60%.",
      "Optimized MongoDB schemas for high-concurrency read/writes.",
    ],
    tech: ["Next.js", "TypeScript", "Redis", "MongoDB", "AI Integration"],
    color: "bg-neo-teal",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "03",
    role: "Full Stack Developer",
    company: "BrainerHub Solutions",
    location: "Ahmedabad, IN",
    period: "2023.04 — 2024.08",
    duration: "17 Months",
    type: "full_time",
    highlight: "SaaS & 3D Interactive",
    description: [
      "Led development of a Hospital SaaS (React/Node/PostgreSQL).",
      "Built a 3D furniture visualizer using Babylon.js techniques.",
      "Mentored 3 juniors & managed sprint cycles from April 2024.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "TypeORM", "3D/WebGL"],
    color: "bg-neo-yellow",
    icon: <Cuboid className="w-6 h-6" />,
  },
  {
    id: "04",
    role: "Junior Full Stack Dev",
    company: "Soulful Mind",
    location: "Bangalore (Remote)",
    period: "2021.09 — 2023.03",
    duration: "19 Months",
    type: "promotion",
    highlight: "API Architecture",
    description: [
      "Promoted from Intern to Junior due to high-impact delivery.",
      "Engineered RESTful APIs connecting disparate data services.",
      "Established core frontend-backend data exchange protocols.",
    ],
    tech: ["JavaScript", "Express", "REST API", "React", "Git"],
    color: "bg-neo-white",
    icon: <Network className="w-6 h-6" />,
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden border-b-2 border-neo-black"
    >
      {/* Background Decor: Brutalist vertical lines */}
      <div className="absolute inset-0 flex justify-between px-[10%] opacity-10 pointer-events-none">
        <div className="w-px h-full bg-neo-black border-r border-dashed border-neo-black"></div>
        <div className="w-px h-full bg-neo-black border-r border-dashed border-neo-black"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-neo-black text-neo-white px-3 py-1 font-mono text-sm uppercase mb-4"
          >
            // 03. Timeline
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight"
          >
            System{" "}
            <span className="text-neo-teal underline decoration-4 underline-offset-8 decoration-neo-black">
              Log
            </span>
          </motion.h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-neo-black transform md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {experienceData.map((job, index) => (
              <TimelineItem key={job.id} job={job} index={index} />
            ))}
          </div>

          {/* End cap of timeline */}
          <div className="absolute bottom-0 left-4 md:left-1/2 w-4 h-4 bg-neo-black transform -translate-x-1/2 translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: The Card ---
const TimelineItem = ({
  job,
  index,
}: {
  index: number;
  job: (typeof experienceData)[0];
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* 1. THE DATE/MARKER (Desktop: Opposite side of card) */}
      <div className="hidden md:flex w-1/2 justify-center px-8">
        <div
          className={`font-mono text-neo-grey text-sm tracking-widest ${isEven ? "text-left" : "text-right"}`}
        >
          <span className="block font-bold text-neo-black text-xl">
            {job.period}
          </span>
          <span className="block">{job.duration}</span>
        </div>
      </div>

      {/* 2. THE CONNECTOR NODE (Center) */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-neo-white border-2 border-neo-black z-10 transform -translate-x-1/2 flex items-center justify-center">
        <div className={`w-3 h-3 ${job.color}`}></div>
      </div>

      {/* 3. THE CARD (Content) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -2 : 2 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="w-[calc(100%-3rem)] md:w-1/2 ml-12 md:ml-0 md:px-8"
      >
        <div className="relative group">
          {/* Brutalist Shadow Box */}
          <div className="absolute top-2 left-2 w-full h-full bg-neo-black z-0 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div className="relative z-10 bg-neo-white border-2 border-neo-black p-6 md:p-8 flex flex-col gap-4">
            {/* Card Header */}
            <div className="border-b-2 border-neo-black pb-4 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-bold border border-neo-black ${job.color}`}
                  >
                    {job.id}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase leading-none">
                    {job.role}
                  </h3>
                </div>
                <p className="font-mono text-sm text-neo-grey font-bold">
                  @ {job.company}
                </p>

                {/* Mobile Date Display */}
                <p className="md:hidden font-mono text-xs text-neo-grey mt-2">
                  {job.period} • {job.duration}
                </p>
              </div>
              <div className="hidden sm:block p-2 border border-neo-black bg-neo-off-white">
                {job.icon}
              </div>
            </div>

            {/* Highlights Tag */}
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-xs font-bold bg-neo-black text-neo-white px-1">
                FOCUS: {job.highlight}
              </span>
            </div>

            {/* Description List */}
            <ul className="space-y-2">
              {job.description.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-sans text-sm md:text-base text-neo-grey leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 bg-neo-teal shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech Stack Chips */}
            <div className="pt-4 flex flex-wrap gap-2">
              {job.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono font-bold border border-neo-black hover:bg-neo-yellow transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-neo-black clip-path-polygon-[100%_0,0_0,100%_100%]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
