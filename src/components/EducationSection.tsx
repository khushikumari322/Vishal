import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Poornima University',
    location: 'Jaipur, Rajasthan',
    year: 'Ongoing',
    status: 'current',
    highlights: ['Focus on Python Development', 'Database Management', 'Web Technologies'],
  },
  {
    id: 2,
    degree: '12th Grade (Senior Secondary)',
    institution: 'RBSE Board',
    year: '2023',
    grade: 'PCM: 78.80% / PCB: 80.00%',
    status: 'completed',
  },
  {
    id: 3,
    degree: '10th Grade (Secondary)',
    institution: 'RBSE Board',
    year: '2021',
    grade: '96%',
    status: 'completed',
  },
];

const achievements = [
  {
    icon: Award,
    title: '2nd Rank - College Project',
    description: 'Image Processing Tool - Background Removal & Image to PDF Conversion',
    year: '2024',
  },
];

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements - Professional, subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-magenta w-[400px] h-[400px] top-20 -right-40 opacity-10" />
        <div className="orb orb-cyan w-[300px] h-[300px] bottom-40 -left-20 opacity-8" />
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
            Education & Achievements
          </span>
          <h2 className="section-title mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My educational background and notable accomplishments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 200 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0">
                    <motion.div
                      className={`w-5 h-5 rounded-full border-4 border-background ${
                        edu.status === 'current'
                          ? 'bg-primary shadow-lg shadow-primary/50'
                          : 'bg-accent'
                      }`}
                      animate={edu.status === 'current' ? { scale: [1, 1.3, 1], boxShadow: ['0 0 0 0 rgba(var(--primary), 0.7)', '0 0 0 10px rgba(var(--primary), 0)'] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content card */}
                  <motion.div 
                    className={`glass-card p-6 rounded-2xl backdrop-blur-md border transition-all ${
                      edu.status === 'current' ? 'bg-background/60 border-primary/30 shadow-lg shadow-primary/20' : 'bg-background/50 border-white/10'
                    }`}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground/60">{edu.location}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-card">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{edu.year}</span>
                      </div>
                    </div>

                    {edu.grade && (
                      <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-sm font-medium text-accent mb-3">
                        {edu.grade}
                      </div>
                    )}

                    {edu.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <motion.span
                            key={highlight}
                            className="px-3 py-1 rounded-full text-xs font-medium glass-card bg-white/5 border border-white/10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + hIndex * 0.08 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-semibold flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-primary" />
              Achievements
            </motion.h3>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15, type: 'spring', stiffness: 200 }}
                className="glass-card p-6 rounded-2xl border-secondary/20 relative overflow-hidden group backdrop-blur-md bg-background/50 border border-white/10 hover:border-white/20"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-2 rounded-lg bg-secondary/15"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <achievement.icon className="w-5 h-5 text-secondary" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative glow */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-secondary/15 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
