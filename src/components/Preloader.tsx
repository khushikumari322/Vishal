import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo first
    tl.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    });

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
      onUpdate: function () {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
      },
    });

    // Fade out preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        onComplete();
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="preloader"
    >
      {/* Floating orbs */}
      <div className="orb orb-cyan w-64 h-64 -top-20 -left-20 float" />
      <div className="orb orb-magenta w-48 h-48 -bottom-10 -right-10 float-delayed" />
      <div className="orb orb-purple w-32 h-32 top-1/4 right-1/4 float-slow" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name */}
        <div ref={logoRef} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            VK
          </h1>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Loading Experience
          </p>
        </div>

        {/* Progress bar container */}
        <div className="w-64 md:w-80">
          <div className="progress-container">
            <div ref={progressBarRef} className="progress-bar" />
          </div>
          <div className="mt-4 text-center">
            <span ref={percentRef} className="text-2xl font-bold gradient-text">
              {progress}%
            </span>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
