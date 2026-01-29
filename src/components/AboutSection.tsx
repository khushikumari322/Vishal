import { useRef } from 'react';
import { motion, useInView, useViewportScroll, useTransform } from 'framer-motion';
import { Code2, Database, FileCode, Globe, Download, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollY } = useViewportScroll();
  const imageParallax = useTransform(scrollY, [0, 2000], [0, 100]);

  const highlights = [
    { icon: Code2, label: 'Python Developer', color: 'text-primary' },
    { icon: Globe, label: 'Web Fundamentals', color: 'text-secondary' },
    { icon: Database, label: 'Database Design', color: 'text-accent' },
    { icon: FileCode, label: 'Image Processing', color: 'text-primary' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements - Professional, subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple w-[400px] h-[400px] -top-40 -right-40 opacity-10" />
        <div className="orb orb-cyan w-[300px] h-[300px] -bottom-20 -left-20 opacity-8" />
      </div>

      {/* Glass effect overlay - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70 backdrop-blur-sm pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
            style={{ y: imageParallax }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Background glow - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-accent/8 to-secondary/12 rounded-full blur-3xl" />
              
              {/* Main image container */}
              <motion.div
                className="relative glass-card rounded-full p-4 h-full"
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/vishal.png"
                    alt="Vishal Kumawat portrait"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
                About Me
              </span>
              <h2 className="section-title mb-4">
                Passionate about <span className="gradient-text">Python</span> & Problem Solving
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm Vishal Kumawat, a BCA student at Poornima University Jaipur with a passion for 
              Python and image processing. I build practical tools and enjoy learning full-stack 
              web fundamentals and databases.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground/80"
            >
              My journey in programming started with curiosity about automation and has evolved 
              into building real-world solutions. I believe in writing clean, efficient code 
              that solves actual problems.
            </motion.p>

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4 rounded-lg flex items-center gap-3 group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-white/5 border border-white/10"
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className={`p-2 rounded-lg glass-card bg-primary/15 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/resume.docx"
                download
                className="btn-neon-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-neon inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
