import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const text = "WELCOME TO THE WORLD...";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      }
    }, 200);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-blue) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--neon-blue) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-display text-2xl md:text-4xl text-primary mb-4 neon-glow">
          {displayText}
          <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse-neon" />
        </h1>

        <div className="w-64 h-1 bg-muted rounded-full mx-auto mt-8 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, hsl(var(--neon-blue)), hsl(var(--neon-purple)), hsl(var(--neon-pink)))` }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-display text-xs text-muted-foreground mt-3 tracking-widest">
          {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
