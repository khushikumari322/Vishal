import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating orbs animation
    gsap.to(orb1Ref.current, {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(orb2Ref.current, {
      y: 40,
      x: -30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(orb3Ref.current, {
      y: -20,
      x: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs - Subtle and professional */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orb1Ref}
          className="orb orb-cyan w-[500px] h-[500px] -top-40 -right-40 opacity-15"
        />
        <div
          ref={orb2Ref}
          className="orb orb-magenta w-[400px] h-[400px] -bottom-20 -left-40 opacity-12"
        />
        <div
          ref={orb3Ref}
          className="orb orb-purple w-[300px] h-[300px] top-1/3 left-1/4 opacity-10"
        />
      </div>

      {/* Glass effect overlay - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70 backdrop-blur-sm pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Vishal Kumawat</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                BCA Student & Python Enthusiast
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-4"
            >
              Building intelligent tools with Python · Image Processing · Web Fundamentals · Databases
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Currently pursuing BCA at Poornima University Jaipur with a strong interest in Python development 
              and practical experience building an award-winning image processing tool.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-neon-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-neon"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              {[
                { icon: Github, href: 'https://github.com/vishalkumawatx', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vishalkumawatx', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:xarvis320@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-card bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.12, type: 'spring', stiffness: 200 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
              {/* Glow ring - Subtle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 opacity-40 blur-2xl" />

              {/* Profile image */}
              <div className="absolute inset-4 rounded-full glass-card overflow-hidden neon-border">
                <img
                  src="/vishal.png"
                  alt="Vishal Kumawat portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-1/4 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-primary">Python</span>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-secondary">BCA</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5 group-hover:text-primary transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
