import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Server,
  Box,
  Cpu,
  Terminal,
  Command,
} from "lucide-react";

// --- DATA STRUCTURE ---
const techData = [
  {
    id: "frontend",
    title: "Frontend.ui",
    icon: <Layout className="w-6 h-6" />,
    description: "Pixel-perfect interfaces & 3D interactions",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Babylon.js",
      "Angular",
    ],
    color: "bg-neo-white",
    colSpan: "lg:col-span-2",
  },
  {
    id: "backend",
    title: "Backend.api",
    icon: <Server className="w-6 h-6" />,
    description: "Scalable runtimes & secure logic",
    tags: [
      "Node.js",
      "Express",
      "Nest.js",
      "Hono",
      "Python (Flask)",
      "Socket.IO",
      "JWT/Auth",
    ],
    color: "bg-neo-off-white",
    colSpan: "lg:col-span-1",
  },
  {
    id: "database",
    title: "Data_Store.db",
    icon: <Database className="w-6 h-6" />,
    description: "Optimized queries & caching strategies",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM", "Mongoose"],
    color: "bg-neo-off-white",
    colSpan: "lg:col-span-1",
  },
  {
    id: "special",
    title: "Special_Ops.exe",
    icon: <Cpu className="w-6 h-6" />,
    description: "High-impact integrations defined in projects",
    tags: [
      "AI Integration",
      "3D Rendering",
      "Website Builders",
      "Performance Opt.",
    ],
    color: "bg-neo-teal", // Highlight color
    colSpan: "lg:col-span-1",
  },
  {
    id: "tools",
    title: "DevOps_Tools.sh",
    icon: <Box className="w-6 h-6" />,
    description: "Deployment & version control",
    tags: ["Docker", "Git/GitHub", "Firebase", "Stripe", "Postman", "Swagger"],
    color: "bg-neo-yellow", // Secondary highlight
    colSpan: "lg:col-span-1",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative w-full py-24 px-6 md:px-12 border-b-2 border-neo-black overflow-hidden"
    >
      {/* Background: Subtle Diagonal Lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-neo-black bg-neo-yellow px-3 py-1 shadow-neo-sm"
          >
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              Stack_Inventory
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold uppercase leading-none"
          >
            Tech{" "}
            <span className="text-stroke-2 text-transparent bg-clip-text bg-neo-black stroke-neo-black hover:text-neo-teal transition-colors duration-300">
              Arsenal
            </span>
          </motion.h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techData.map((category) => (
            <TechCard key={category.id} data={category} />
          ))}
        </motion.div>

        {/* BOTTOM MARQUEE DECORATION */}
        <div className="mt-16 border-t-2 border-b-2 border-neo-black py-4 bg-neo-black overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap text-neo-teal font-mono font-bold uppercase tracking-widest text-sm"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {Array(10)
              .fill(
                " // FULL STACK ARCHITECTURE // REACT // NODE // MONGODB // REDIS // NEXTJS // TYPESCRIPT",
              )
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: The Tech Card ---
const TechCard = ({ data }: { data: (typeof techData)[0] }) => {
  return (
    <motion.div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      variants={cardVariants as any}
      className={`relative group ${data.colSpan} h-full`}
    >
      {/* Hover Shadow Effect */}
      <div className="absolute top-2 left-2 w-full h-full bg-neo-black z-0 transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3"></div>

      {/* Main Card */}
      <div
        className={`relative z-10 h-full border-2 border-neo-black ${data.color} p-6 md:p-8 flex flex-col justify-between transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1`}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 border-2 border-neo-black bg-white shadow-sm">
              {data.icon}
            </div>
            <Command className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-1">
            {data.title}
          </h3>
          <p className="font-mono text-xs text-gray-600 border-l-2 border-neo-black pl-2">
            {data.description}
          </p>
        </div>

        {/* Tags Grid */}
        <div className="flex flex-wrap gap-2 content-start">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="relative px-3 py-1.5 text-xs font-bold border-2 border-neo-black bg-white hover:bg-neo-black hover:text-neo-white transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Corner Decoration */}
        <div className="absolute bottom-2 right-2 flex gap-0.5">
          <div className="w-1 h-1 bg-neo-black rounded-full"></div>
          <div className="w-1 h-1 bg-neo-black rounded-full"></div>
          <div className="w-1 h-1 bg-neo-black rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
