import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Mail, label: 'Email', value: 'xarvis320@gmail.com', href: 'mailto:xarvis320@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'vishalkumawatx', href: 'https://github.com/vishalkumawatx' },
  { icon: Linkedin, label: 'LinkedIn', value: 'vishalkumawatx', href: 'https://www.linkedin.com/in/vishalkumawatx' },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent('xarvis320@gmail.com')}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          project_type: formData.projectType || 'Not specified',
          _cc: 'xarvis320@gmail.com',
          _subject: 'New portfolio contact',
        }),
      });

      if (!response.ok) {
        throw new Error(`FormSubmit error ${response.status}`);
      }

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '', projectType: '' });
    } catch (error) {
      toast({
        title: 'Sending failed',
        description: 'Please try again or reach me directly at the listed emails.',
        variant: 'destructive',
      });
      console.error('EmailJS error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[400px] h-[400px] -top-40 left-1/4 opacity-10" />
        <div className="orb orb-magenta w-[300px] h-[300px] bottom-0 -right-40 opacity-12" />
      </div>

      {/* Subtle glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60 backdrop-blur-sm pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Get in Touch
          </span>
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to internships, collaborations, and freelance projects related to Python scripting, 
            image processing, entry-level web development, and database tasks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 backdrop-blur-md bg-background/50 border border-white/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <motion.input
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:bg-white/8"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:bg-white/8"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type (Optional)
                </label>
                <motion.select
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all backdrop-blur-sm text-foreground appearance-none cursor-pointer focus:bg-white/8"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" className="bg-background text-foreground">Select project type</option>
                  <option value="python" className="bg-background text-foreground">Python Development</option>
                  <option value="image" className="bg-background text-foreground">Image Processing</option>
                  <option value="web" className="bg-background text-foreground">Web Development</option>
                  <option value="database" className="bg-background text-foreground">Database Work</option>
                  <option value="internship" className="bg-background text-foreground">Internship</option>
                  <option value="other" className="bg-background text-foreground">Other</option>
                </motion.select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:bg-white/8"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur-md bg-background/50 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                    initial={{ x: 30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.12, type: 'spring', stiffness: 200 }}
                    whileHover={{ x: 8, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-white/10 group-hover:bg-white/15 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <link.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.12 }}
                    >
                      <p className="font-medium group-hover:text-primary transition-colors">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
