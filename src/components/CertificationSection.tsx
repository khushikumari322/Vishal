import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Python Programming',
    issuer: 'Codecademy / Internal Course',
    date: '2023 - 2024',
    description: 'Comprehensive Python programming covering fundamentals, OOP, and advanced concepts',
    skills: ['Python', 'OOP', 'Automation', 'Data Structures'],
    featured: true,
  },
  {
    id: 2,
    title: 'Image Processing & Computer Vision',
    issuer: 'Self-Learning Project',
    date: '2024',
    description: 'Hands-on experience with OpenCV, PIL, and image manipulation techniques',
    skills: ['OpenCV', 'PIL', 'Image Processing', 'Background Removal'],
    featured: true,
  },
  {
    id: 3,
    title: 'Database Management & SQL',
    issuer: 'University Coursework',
    date: '2023 - 2024',
    description: 'MySQL and RDBMS fundamentals with practical database design projects',
    skills: ['MySQL', 'RDBMS', 'SQL Queries', 'Database Design'],
    featured: false,
  },
  {
    id: 4,
    title: 'Web Development Fundamentals',
    issuer: 'Self-Learning',
    date: '2023 - 2024',
    description: 'HTML, CSS, and JavaScript with responsive design principles',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    featured: false,
  },
  {
    id: 5,
    title: 'Version Control with Git',
    issuer: 'Practical Experience',
    date: '2023 - Present',
    description: 'Git and GitHub proficiency for collaborative development',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    featured: false,
  },
];

const CertificationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements - Professional, subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple w-[500px] h-[500px] -top-40 right-10 opacity-10" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-20 -left-40 opacity-8" />
      </div>

      {/* Glass effect overlay - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70 backdrop-blur-sm pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            <Award className="w-4 h-4 inline mr-2" />
            Certifications & Learning
          </span>
          <h2 className="section-title mb-4">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and validated expertise across multiple technologies and domains.
          </p>
        </motion.div>

        {/* Featured certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {certifications.filter((cert) => cert.featured).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 200 }}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/3 to-secondary/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative glass-card p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-background/50 hover:bg-background/60 transition-all duration-300 h-full group-hover:border-white/20">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-lg glass-card bg-primary/15"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.span 
                      className="px-3 py-1 rounded-full glass-card text-xs font-medium text-primary bg-primary/10 border border-primary/20"
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Featured
                    </motion.span>
                  </div>

                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.1 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center gap-2 text-muted-foreground mb-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.15 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">{cert.issuer}</span>
                  </motion.div>

                  <p className="text-muted-foreground/90 mb-6">{cert.description}</p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 rounded-full glass-card text-xs font-medium text-primary/90 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All certifications list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-md bg-background/50"
        >
          <h3 className="text-xl font-bold mb-6">Complete Certifications</h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-lg glass-card bg-white/5 hover:bg-white/8 transition-all duration-300 group border border-white/10"
              >
                <div className="p-2 rounded-lg glass-card bg-secondary/15 flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-secondary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-muted-foreground/70 flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-muted-foreground/80 mb-3">{cert.description}</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md glass-card text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;
