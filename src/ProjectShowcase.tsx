import { motion } from "framer-motion";
import { Folder, Github, Cpu, Navigation } from "lucide-react";
import project0 from "./assets/project0.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

// --- DATA: NOTABLE COMMERCIAL PROJECTS ---
const notableProjects = [
  {
    id: "01",
    title: "Omni-Channel FinTech Ecosystem",
    company: "Programming.com",
    role: "Sr. Full Stack Developer",
    year: "2026",
    desc: "Architected an enterprise communication hub for automated SMS/WhatsApp/email alerts alongside high-conversion loan lead generation and precision calculation portals.",
    tech: ["Node.js", "TypeScript", "Next.js", "REST APIs", "Microservices"],
    color: "bg-neo-emerald",
    image: project0, // Replace with your new asset variable
    link: "#",
  },
  {
    id: "02",
    title: "AI Website Builder",
    company: "Mindinventory",
    role: "Full Stack Developer",
    year: "2024 — 2026",
    desc: "A platform enabling non-technical users to generate full websites via prompts. Built the engine that translates natural language into Next.js components.",
    tech: ["Next.js", "TypeScript", "Flask", "MongoDB", "Redis"],
    color: "bg-neo-teal",
    image: project1, // Replace with actual screenshot
    link: "#",
  },
  {
    id: "03",
    title: "Hospital SaaS Platform",
    company: "BrainerHub Solutions",
    role: "Full Stack Architect",
    year: "2023 — 2024",
    desc: "Comprehensive management system for patient records, staff scheduling, and analytics. Implemented Role-Based Access Control (RBAC) and real-time dashboards.",
    tech: ["React", "PostgreSQL", "Express", "TypeORM", "Chart.js"],
    color: "bg-neo-yellow",
    image: project2,
    link: "#",
  },
  {
    id: "04",
    title: "3D Furniture Showcase",
    company: "BrainerHub Solutions",
    role: "Frontend Lead",
    year: "2023",
    desc: "Interactive 3D visualization tool allowing users to rotate, customize, and place furniture in virtual rooms. High-performance rendering using WebGL.",
    tech: ["React", "Babylon.js", "WebGL", "TypeScript"],
    color: "bg-neo-white",
    image: project3,
    link: "#",
  },
];

// --- DATA: PERSONAL / EXPERIMENTAL ---
const personalProjects = [
  {
    title: "Slack Clone",
    desc: "Minimal team communication platform with workspaces and threads.",
    tech: ["MERN Stack", "Socket.io"],
    link: "https://github.com/kartik4599/Office-loom",
    live: "https://office-loom.vercel.app",
  },
  {
    title: "Form Builder",
    desc: "Interactive form designer inspired by Typeform with conditional logic.",
    tech: ["Next.js", "Zustand", "React Hook Form"],
    link: "https://github.com/kartik4599/form-builder",
    live: "https://form-builder-olive-two.vercel.app",
  },
  {
    title: "Chatting App",
    desc: "Lightweight real-time messenger with typing indicators & read receipts.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/kartik4599/Chat-Box-Backend",
    live: "https://chat-box-interchange.onrender.com",
  },
];

const ProjectShowcase = () => {
  return (
    <section
      id="projects"
      className="relative w-full border-b-2 border-neo-black overflow-hidden"
    >
      {/* 1. SECTION: COMMERCIAL OPS (Notable) */}
      <div className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 flex items-end gap-6 border-b-4 border-neo-black pb-4">
            <h2 className="font-display text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter">
              Selected <br />
              <span className="text-neo-teal text-stroke-2 stroke-neo-black">
                Works.
              </span>
            </h2>
            <div className="hidden md:block mb-2">
              <span className="bg-neo-black text-neo-white font-mono text-sm px-2 py-1">
                MODE: COMMERCIAL
              </span>
            </div>
          </div>

          {/* Projects Stack */}
          <div className="flex flex-col gap-24">
            {notableProjects.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECTION: THE LAB (Personal) */}
      <div className="bg-neo-black text-neo-white py-24 px-6 md:px-12 relative">
        {/* Grid Background for "Lab" feel */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className="w-8 h-8 text-neo-yellow" />
            <h3 className="font-display text-4xl font-bold uppercase">
              The Lab{" "}
              <span className="text-sm font-mono text-neo-yellow/50 align-top ml-2">
                // EXPERIMENTAL
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalProjects.map((project, i) => (
              <LabCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Featured Project (The "Big" Card) ---
const FeaturedProject = ({
  project,
  index,
}: {
  index: number;
  project: (typeof notableProjects)[0];
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center group`}
    >
      {/* 1. PROJECT VISUAL (Browser Window Style) */}
      <div className="w-full lg:w-3/5 relative">
        {/* Decorative Backdrop */}
        <div
          className={`absolute top-4 ${isEven ? "-left-4" : "-right-4"} w-full h-full bg-neo-black z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
        ></div>

        <div className="relative z-10 border-2 border-neo-black bg-neo-white overflow-hidden">
          {/* Browser Bar */}
          <div className="h-8 border-b-2 border-neo-black bg-neo-off-white flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-neo-black"></div>
            <div className="w-3 h-3 rounded-full border-2 border-neo-black"></div>
            <div className="flex-1 text-center font-mono text-[10px] uppercase tracking-widest opacity-50">
              {project.company}.com
            </div>
          </div>
          {/* Image Area */}
          <div className="aspect-video bg-gray-200 relative overflow-hidden group-hover:grayscale-0 grayscale transition-all duration-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. PROJECT DETAILS */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6">
        <div>
          <span
            className={`inline-block px-3 py-1 font-mono text-xs font-bold border-2 border-neo-black shadow-[4px_4px_0px_0px_#000] mb-4 ${project.color}`}
          >
            {project.role}
          </span>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase leading-none mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-neo-grey mb-4">
            {project.company} // {project.year}
          </p>
        </div>

        <p className="font-sans text-lg leading-relaxed border-l-4 border-neo-black pl-4">
          {project.desc}
        </p>

        {/* Tech Stack Mini-Grid */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-neo-off-white border border-neo-black text-xs font-mono font-bold uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: Lab Card (Personal) ---
const LabCard = ({ project }: { project: (typeof personalProjects)[0] }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: "8px 8px 0px 0px #fcf165" }}
    className="border-2 border-neo-white/20 bg-neo-grey p-6 flex flex-col gap-4 relative overflow-hidden group"
  >
    {/* Grid Background Overlay */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

    <div className="flex justify-between items-start">
      <Folder className="w-8 h-8 text-neo-teal group-hover:text-neo-yellow transition-colors" />
      <div className="flex gap-4 items-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-[#6cc644] opacity-50 hover:opacity-100 cursor-pointer" />
        </a>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Navigation className="w-5 h-5 text-teal-500 opacity-50 hover:opacity-100 cursor-pointer" />
        </a>
      </div>
    </div>

    <div>
      <h4 className="font-display text-2xl font-bold uppercase mb-2 group-hover:text-neo-teal transition-colors">
        {project.title}
      </h4>
      <p className="font-mono text-sm text-gray-400">{project.desc}</p>
    </div>

    <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
      {project.tech.map((t, i) => (
        <span
          key={i}
          className="text-[10px] font-mono text-neo-yellow px-1 border border-neo-yellow/30"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectShowcase;
