import { useState, useEffect } from "react";
import { Code, Terminal, Database, Zap } from "lucide-react";
import profile from "./assets/profile.png";
const skills = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Frontend Development",
    tech: "React, TypeScript, Next.js",
    metric: "5+",
    label: "Years Experience",
  },
  {
    icon: <Terminal className="w-12 h-12" />,
    title: "Backend Development",
    tech: "Node.js, Python, Go",
    metric: "4+",
    label: "Years Experience",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Database Management",
    tech: "PostgreSQL, MongoDB, Redis",
    metric: "10+",
    label: "Projects",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Cloud & DevOps",
    tech: "AWS, Docker, CI/CD",
    metric: "3+",
    label: "Years Experience",
  },
];

const BentoPortfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentProj = skills[currentProject];

  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center py-4 mt-14 md:py-0"
    >
      <div className="relative w-full max-w-5xl px-2 sm:px-4">
        {/* Main Bento Container */}
        <div className="relative">
          {/* Background Layers */}
          <div
            className="hidden md:block absolute -top-8 -left-8 w-32 h-32 bg-stone-200 transform -rotate-3 floating"
            style={{ animationDelay: "0s" }}
          />

          {/* Main Card */}
          <div className="relative bg-white shadow-2xl overflow-hidden grain">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Section */}
              <div
                className="
                  md:col-span-7 col-span-1
                  relative
                  overflow-hidden
                  order-2 md:order-1
                  bg-neo-teal
                "
              >
                <div className="p-4 md:p-8 relative z-10 h-full flex flex-col justify-between min-h-100">
                  {/* Large Typography */}
                  <div>
                    <div className="flex items-start gap-3 md:gap-6 mb-3 md:mb-6">
                      <div className="w-1 h-10 md:h-16 bg-black" />
                      <div className="w-1 h-8 md:h-12 bg-black opacity-50" />
                    </div>
                    <h1 className="font-mono font-black text-3xl md:text-[60px] leading-none text-black mb-2 md:mb-3 tracking-tight">
                      Kartik Mendu
                    </h1>
                    <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
                      <span className="font-['Space_Mono'] text-xs text-black/60 tracking-wider">
                        {currentProj.title.toUpperCase()}
                      </span>
                      <span className="font-['Space_Mono'] text-xs text-black/60">
                        0.{currentProject + 1}
                      </span>
                    </div>
                  </div>
                  {/* Center Circle with Icon */}
                  <div className="flex justify-center items-center my-4 md:my-6">
                    <div className="relative">
                      {/* Outer rings */}
                      <div className="hidden md:block absolute inset-0 border-2 border-black w-36 h-36 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                      {/* Main circle */}
                      <div
                        className={`w-20 h-20 md:w-32 md:h-32 bg-white/25 flex items-center justify-center relative project-transition ${isAnimating ? "slide-up-enter" : ""}`}
                        style={{
                          animation: "slideRotate 4s ease-in-out infinite",
                        }}
                      >
                        <div className="text-black transform transition-all duration-300">
                          {currentProj.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Checkered Pattern */}
                  <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-1 md:gap-0">
                    <div className="checkered-pattern w-24 md:w-48 h-4 md:h-6" />
                    <div className="font-['Space_Mono'] text-xs text-black/60">
                      {currentProj.tech}
                    </div>
                  </div>
                </div>
                {/* Decorative vertical lines */}
                <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-black/10" />
                <div className="hidden md:block absolute top-0 right-4 w-px h-full bg-black/5" />
              </div>
              {/* Right Section */}
              <div className="md:col-span-5 col-span-1 relative bg-stone-800 order-1 md:order-2 h-52 md:h-auto">
                <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
                  <img
                    src={profile}
                    className="w-60 md:w-auto md:h-auto object-contain shadow-md"
                  />
                </div>
                {/* Overlay UI Elements */}
                <div className="absolute top-3 right-3 md:top-6 md:right-6 flex flex-col gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-2 h-2 md:w-3 md:h-3 border border-white/50" />
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-white/70 text-xs">◑</div>
                  </div>
                </div>
                {/* Yellow Accent Bar */}
                <div
                  className="absolute top-0 right-0 w-1.5 md:w-2 h-full"
                  style={{ backgroundColor: "#fcf165" }}
                />
                {/* Side Text */}
                <div className="hidden md:block absolute right-2 top-20 -translate-y-1/2 -rotate-90 origin-center">
                  <div className="font-['Space_Mono'] text-xs text-white/40 tracking-[0.3em] whitespace-nowrap">
                    FULL-STACK
                  </div>
                </div>
                {/* Bottom metrics */}
                <div className="hidden md:flex absolute bottom-8 right-8 flex-col items-end gap-2">
                  <div className="w-16 h-12 flex flex-col justify-end">
                    {[8, 12, 6, 10, 14, 9, 11].map((height, i) => (
                      <div key={i} className="flex gap-0.5">
                        <div
                          className="w-1.5 bg-white/30"
                          style={{ height: `${height}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-stone-200">
              {/* Left side icons */}
              <div
                className="md:col-span-7 col-span-1 flex items-center justify-between p-4 md:p-6"
                style={{ backgroundColor: "#62e3be" }}
              >
                <div className="flex gap-3 md:gap-6">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-black flex items-center justify-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 border border-black" />
                  </div>
                  <div className="border-l-2 border-black/20 pl-3 md:pl-6">
                    <div className="font-['Space_Mono'] text-xs text-black/60">
                      Almost 5 years of experience
                    </div>
                  </div>
                </div>
                <div className="w-8 h-4 md:w-16 md:h-6 bg-black" />
              </div>
              {/* Right side counter */}
              <div className="md:col-span-5 col-span-1 bg-stone-800 flex items-center justify-end p-4 md:p-6">
                <div className="text-white/40 font-['Space_Mono'] text-xs tracking-wider">
                  • {currentProj.metric}
                </div>
              </div>
            </div>
            {/* Absolute positioned elements */}
            <div className="absolute top-2 left-2 md:top-8 md:left-8 font-['Space_Mono'] text-xs text-black/40 tracking-wider rotate-90 origin-top-left">
              DEV
            </div>
          </div>
          {/* Yellow Accent Card Behind */}
          <div
            className="hidden md:block absolute -bottom-8 bg-amber-300 -right-4 w-28 h-28 transform rotate-6 z-0"
            style={{
              animation: "3s ease-in-out infinite",
            }}
          />
        </div>
        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentProject(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`transition-all duration-300 ${
                currentProject === index
                  ? "w-8 md:w-12 h-2 md:h-3"
                  : "w-2 md:w-3 h-2 md:h-3 hover:scale-125"
              }`}
              style={{
                backgroundColor:
                  currentProject === index ? "#62e3be" : "#282522",
                opacity: currentProject === index ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoPortfolio;
