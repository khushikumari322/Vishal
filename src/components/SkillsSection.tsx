import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  GitBranch, 
  Laptop, 
  BookOpen, 
  Zap, 
  Terminal, 
  FileJson, 
  Database,
  Cpu
} from 'lucide-react';

const skills = [
  { name: 'Python', level: 90, category: 'Programming', color: 'from-primary to-accent' },
  { name: 'HTML / CSS', level: 75, category: 'Web', color: 'from-secondary to-primary' },
  { name: 'JavaScript', level: 65, category: 'Web', color: 'from-accent to-secondary' },
  { name: 'Java', level: 60, category: 'Programming', color: 'from-primary to-secondary' },
  { name: 'MySQL / RDBMS', level: 70, category: 'Database', color: 'from-secondary to-accent' },
  { name: 'C', level: 45, category: 'Programming', color: 'from-accent to-primary' },
];

const technologies = [
  { name: 'Python', icon: Code2, color: 'from-blue-400 to-blue-600' },
  { name: 'Git', icon: GitBranch, color: 'from-red-400 to-red-600' },
  { name: 'VS Code', icon: Laptop, color: 'from-blue-500 to-cyan-500' },
  { name: 'Jupyter', icon: BookOpen, color: 'from-orange-400 to-orange-600' },
  { name: 'Linux', icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Image Processing', icon: Cpu, color: 'from-purple-400 to-purple-600' },
  { name: 'Automation', icon: Zap, color: 'from-yellow-400 to-orange-500' },
  { name: 'APIs', icon: FileJson, color: 'from-green-400 to-green-600' },
  { name: 'Databases', icon: Database, color: 'from-pink-400 to-pink-600' },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements - Professional, subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-magenta w-[400px] h-[400px] -top-40 left-1/4 opacity-12" />
        <div className="orb orb-cyan w-[300px] h-[300px] bottom-20 right-20 opacity-10" />
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
            Technical Skills
          </span>
          <h2 className="section-title mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Focused on Python development with growing expertise in web fundamentals and databases.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 border border-white/10 backdrop-blur-md bg-background/50"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.08, type: 'spring', stiffness: 200 }}
                  className="group h-full"
                  whileHover={{ y: -12, scale: 1.08 }}
                >
                  <div className="glass-card p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 border border-white/10 backdrop-blur-md bg-background/50">
                    <motion.div
                      className={`bg-gradient-to-br ${tech.color} p-4 rounded-xl mb-4 inline-flex items-center justify-center w-16 h-16 transition-transform duration-300`}
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.08 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </motion.div>
                    <p className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
