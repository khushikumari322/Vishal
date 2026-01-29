import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden backdrop-blur-sm bg-background/60">
      {/* Glass effect overlay - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40 pointer-events-none" />      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-3xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              VK
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vishal Kumawat </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item.toLowerCase()}`);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/vishalkumawatx', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vishalkumawatx', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:xarvis320@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-card bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary/20 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
            </motion.span>
            and Python
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
