import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  
  {
    title: "Portfolio Website",
    desc: "A sleek, modern portfolio site showcasing my work and skills.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion","Vite","EmailJS"],
    color: "--neon-green",
  },
  {
    title: "Restaurant Website",
    desc: "A modern responsive restaurant site with menu, reservation form, and animated UI.",
    tech: ["HTML", "CSS", "JavaScript", "EmailJS"],
    color: "--neon-purple",
    link: "https://vaithi-web.github.io/ss/",
  },
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects I've built with passion and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Preview area */}
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${project.color}) / 0.15), hsl(var(${project.color}) / 0.05))`,
                }}
              >
                <span
                  className="font-display text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: `hsl(var(${project.color}))` }}
                >
                  {project.title.split(" ").map(w => w[0]).join("")}
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, hsl(var(${project.color}) / 0.1), transparent)` }}
                />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-display px-2 py-1 rounded-md bg-muted"
                      style={{ color: `hsl(var(${project.color}))` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
