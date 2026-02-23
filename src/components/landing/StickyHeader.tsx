import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://calendly.com/ailiberty/30min";

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-foreground font-mono text-sm tracking-widest"
            >
              AI-LIBERTY
            </button>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02]"
            >
              Réserver mon créneau
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
