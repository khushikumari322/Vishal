import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Award, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Image Processing Tool',
    subtitle: 'Background Removal & Image → PDF',
    description: 'A college project to automate background removal and batch image-to-PDF conversion using Python.',
    longDescription: 'This tool was built to solve real-world image processing challenges. It combines multiple Python libraries to provide seamless background removal and PDF generation capabilities.',
    tags: ['Python', 'OpenCV', 'PIL', 'Automation'],
    achievement: '🏆 2nd Rank in College',
    github: 'https://github.com/vishalkumawatx',
    featured: true,
    problem: 'Manual background removal and PDF conversion was time-consuming and required multiple tools.',
    approach: 'Built an automated pipeline using Python with OpenCV for image processing and PIL for PDF generation.',
    techStack: ['Python', 'OpenCV', 'Pillow', 'Tkinter'],
    result: 'Reduced processing time by 80% and won 2nd place in college project competition.',
  },
  {
    id: 2,
    title: 'Web Portfolio',
    subtitle: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/vishalkumawatx',
    featured: false,
  },
  {
    id: 3,
    title: 'Database Management System',
    subtitle: 'Student Records System',
    description: 'A MySQL-based student management system for academic record keeping.',
    tags: ['MySQL', 'Python', 'CRUD'],
    github: 'https://github.com/vishalkumawatx',
    featured: false,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements - Professional, subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[500px] h-[500px] -top-60 -right-60 opacity-10" />
        <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-0 opacity-8" />
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
            Portfolio
          </span>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my work in Python development, image processing, and web fundamentals.
          </p>
        </motion.div>

        {/* Featured project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group border border-white/10 backdrop-blur-md bg-background/50">
              {/* Achievement badge */}
              {project.achievement && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{project.achievement}</span>
                  </motion.div>
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project preview */}
                <div className="flex-1">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🖼️</div>
                      <p className="text-muted-foreground">Image Processing Tool</p>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-sm text-primary font-medium mb-2">Featured Project</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground/80 mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full glass-card text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="btn-neon-primary inline-flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Case Study
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon inline-flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 border border-white/10 backdrop-blur-md bg-background/50"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card hover:shadow-glow-cyan transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground/80 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-full glass-card"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl p-8 relative backdrop-blur-xl bg-background/90 neon-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-card hover:shadow-glow-cyan transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.subtitle}</p>

              {selectedProject.problem && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-2">Problem</h3>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>
              )}

              {selectedProject.approach && (
                <div className="mb-6">
                  <h3 className="font-semibold text-secondary mb-2">Approach</h3>
                  <p className="text-muted-foreground">{selectedProject.approach}</p>
                </div>
              )}

              {selectedProject.techStack && (
                <div className="mb-6">
                  <h3 className="font-semibold text-accent mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full glass-card text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.result && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-2">Result</h3>
                  <p className="text-muted-foreground">{selectedProject.result}</p>
                </div>
              )}

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-primary inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
