import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Zap } from "lucide-react";

const timeline = [
  { title: "Started Web Development", desc: "Began exploring HTML, CSS, and JavaScript" },
  { title: "Frontend Frameworks", desc: "Deep-dived into React and modern tooling" },
  { title: "Professional Projects", desc: "Built production apps and refined skills" },
  { title: "AI Integration", desc: "Started leveraging AI tools in development workflow" },
  { title: "Full-Stack Growth", desc: "Expanding into full-stack and cloud technologies" },
];

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Lightbulb, label: "Creative Solutions", desc: "Thinking outside the box" },
  { icon: Rocket, label: "Performance", desc: "Optimized for speed and UX" },
  { icon: Zap, label: "AI-Powered", desc: "Leveraging AI for productivity" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate front-end developer who loves creating visually stunning and
            highly interactive web applications. I thrive on turning complex problems
            into elegant, user-friendly solutions.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel rounded-xl p-5 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:neon-border transition-all">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className={`relative flex items-center mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}>
                <div className="glass-panel rounded-xl p-4 inline-block">
                  <span className="font-display text-xs text-primary">{item.year}</span>
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 neon-border" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
