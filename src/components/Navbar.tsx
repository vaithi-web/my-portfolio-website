import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY);
      setLastY(y);

      // Determine active section
      for (const s of [...links].reverse()) {
        const el = document.getElementById(s.toLowerCase());
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass-panel rounded-full px-6 py-3 flex items-center gap-6"
        >
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="font-display text-lg font-bold text-primary neon-glow tracking-wider">
            VK
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`px-3 py-1.5 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                  active === l
                    ? "bg-primary/10 text-primary neon-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-5 h-0.5 bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </motion.nav>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-4 right-4 z-40 glass-panel rounded-2xl p-4 md:hidden"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-heading text-lg transition-colors ${
                active === l ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
