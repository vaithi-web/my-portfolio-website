import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "--neon-blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML / CSSQ", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      ,
    ],
  },
  {
    title: "Tools & AI",
    color: "--neon-purple",
    skills: [
      { name: "ChatGPT / Copilot", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI-Powered Dev", level: 82 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.2 }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3
                className="font-display text-sm tracking-widest mb-6 font-bold"
                style={{ color: `hsl(var(${cat.color}))` }}
              >
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-heading font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-display">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + ci * 0.2 + si * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(${cat.color})), hsl(var(${cat.color}) / 0.5))`,
                          boxShadow: `0 0 10px hsl(var(${cat.color}) / 0.5)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
