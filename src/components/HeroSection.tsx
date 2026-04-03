import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import avatarImg from "@/assets/avatar.png"; // Reverted to existing asset

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-display text-xs tracking-[0.3em] text-primary mb-4 uppercase"
          >
            
          </motion.p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-foreground">I'm </span>
            <span className="gradient-text">Vaitheeswaran</span>
            <br />
            <span className="text-foreground">Kannan</span>
          </h1>

          <h2 className="font-heading text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Front-End Developer <span className="text-primary">|</span> AI Tools Enthusiast
          </h2>

          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technologies.
            Passionate about building beautiful, performant interfaces that push
            the boundaries of web development.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-heading font-semibold text-sm tracking-wider bg-primary text-primary-foreground neon-border transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1oq5wChelrKW5C9MjmDrzMt1oQMPxMZUg/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-heading font-semibold text-sm tracking-wider border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/dashboard", label: "GitHub" },


              { icon: Linkedin, href: "https://www.linkedin.com/in/vaitheeswaran-kannan-b62a00393", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kannanvaithi425@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Avatar area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative">
            {/* Large background circle */}
            <div className="w-[420px] h-[420px] xl:w-[480px] xl:h-[480px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/20"
              style={{
                background: `radial-gradient(circle, hsl(var(--neon-blue) / 0.08), transparent 70%)`
              }}
            />
            {/* Smaller decorative circle */}
            <div className="w-[340px] h-[340px] xl:w-[380px] xl:h-[380px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/10" />

            {/* Avatar image - large, not clipped to tiny circle */}
            <div className="relative z-10 w-[350px] h-[420px] xl:w-[400px] xl:h-[480px] flex items-end justify-center">
              <img
                src={avatarImg}
                alt="Vaitheeswaran Kannan"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_0_40px_hsl(var(--neon-blue)/0.3)]"
              />
            </div>

            {/* Floating accents */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-lg glass-panel text-xs font-display text-neon-green"
            >
              React.js
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-4 z-20 px-3 py-1.5 rounded-lg glass-panel text-xs font-display text-neon-pink"
            >
              TypeScript
            </motion.div>
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-1/2 -right-8 z-20 px-3 py-1.5 rounded-lg glass-panel text-xs font-display text-neon-purple"
            >
              AI Tools
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-display tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
