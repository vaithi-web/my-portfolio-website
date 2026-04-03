import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mgopnewd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        e.currentTarget.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Send me a message 🚀
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-heading font-medium mb-2 text-muted-foreground">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-heading font-medium mb-2 text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-heading font-medium mb-2 text-muted-foreground">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wider flex items-center gap-2 mx-auto neon-border transition-all duration-300"
            disabled={status === "Sending..."}
          >
            <Send size={16} />
            Send Message
          </motion.button>
          {status && (
            <p className={`text-center text-sm font-heading ${status.includes("✅") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </motion.form>
        

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center gap-4 mb-6">
            {[
              { icon: Github, href: "https://github.com/dashboard", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaitheeswaran-kannan-b62a00393", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kannanvaithi425@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm font-body">
            © 2026 <span className="font-display text-primary">VK</span> — Vaitheeswaran Kannan
          </p>
          <p className="text-muted-foreground/50 text-xs mt-1">
            Built with React, Tailwind CSS & Three.js
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
