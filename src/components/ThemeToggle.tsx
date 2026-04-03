import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          scale: dark ? 1 : 0.8,
          rotate: dark ? 0 : 180,
        }}
        transition={{ duration: 0.4 }}
        className="text-xl"
      >
        {dark ? (
          <span className="text-primary neon-glow" style={{ fontSize: '1.2rem' }}>💡</span>
        ) : (
          <span style={{ fontSize: '1.2rem' }}>🌙</span>
        )}
      </motion.div>
      {dark && (
        <div className="absolute inset-0 rounded-full animate-pulse-neon"
          style={{ boxShadow: '0 0 15px hsl(var(--neon-blue) / 0.4)' }}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
