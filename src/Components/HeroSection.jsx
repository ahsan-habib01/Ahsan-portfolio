import React, { useEffect, useState } from 'react';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
// import ahsanPhoto from '../assets/ahsan-photo2.png';
import ahsanPhoto from '../assets/ahsan-navy.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Web Developer', 'Full Stack Developer', 'React Specialist'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const techStack = [
    'React',
    'Node.js',
    'MongoDB',
    'JavaScript',
    'Express',
    'Next.js',
    'NextAuth',
    'Firebase',
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-base-100 pt-32 pb-16 lg:pt-40 lg:pb-20"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating Orbs Removed for minimal look */}

      {/* Main Content */}
      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-content/20 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-base-content" />
              <span className="text-sm font-accent font-semibold text-base-content">
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="space-y-0">
                <h1 className="text-xl sm:text-2xl font-body font-medium leading-none tracking-tight flex items-center gap-2 mb-2">
                  <span className="text-2xl">Hey, I am Ahsan Habib</span> and I
                  am a
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-body font-black leading-none tracking-tighter text-base-content uppercase">
                  Web{' '}
                  <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-body font-black leading-none tracking-tighter text-outline-theme uppercase mt-[-1rem]">
                    Developer
                  </span>
                </h1>
              </div>

              {/* Typing Effect Role */}
              {/* <div className="flex items-center gap-3 min-h-[40px]">
                <span className="text-xl lg:text-2xl font-accent text-base-content/70">
                  A
                </span>
                <div className="relative">
                  <span className="text-xl lg:text-2xl font-accent font-bold text-primary">
                    {displayText}
                  </span>
                  <span className="animate-blink text-xl lg:text-2xl text-primary">
                    |
                  </span>
                </div>
              </div> */}
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl">
              Crafting elegant, performant, and user-centric web experiences
              with modern technologies. Turning ideas into pixel-perfect
              realities.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-base-100 border border-base-content/20 
                           hover:bg-base-content hover:text-[var(--color-base-100)] transition-all duration-300
                           cursor-default shadow-sm"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <span className="text-sm font-accent font-semibold flex-1">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-base-content text-[var(--color-base-100)] 
                         font-accent font-bold overflow-hidden transition-all duration-300
                         hover:shadow-xl hover:scale-105 border border-base-content"
              >
                <span className="relative z-10">View My Work</span>
              </button>

              <a
                href="/Ahsan_Habib_Resume.pdf"
                download="Ahsan_Habib_Resume.pdf"
                className="group px-8 py-4 bg-transparent text-base-content border-2 border-base-content
                         font-accent font-bold inline-flex items-center gap-2
                         hover:bg-base-content hover:text-[var(--color-base-100)] transition-all duration-300
                         hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/ahsan-habib01',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/ahsan-habib01',
                  label: 'LinkedIn',
                },
                {
                  icon: Mail,
                  href: 'mailto:ahsanhabiib00@gmail.com',
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-base-100 border border-base-content/20
                           flex items-center justify-center text-base-content
                           hover:bg-base-content hover:text-[var(--color-base-100)] hover:border-base-content
                           hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Image with Modern Effects */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center">
              {/* Main Image Container */}
              <div
                className="relative aspect-square overflow-hidden border-2 border-base-content/10 bg-base-200"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 0.3
                  }deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="w-full h-full bg-base-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                  <img
                    src={ahsanPhoto}
                    alt="Ahsan Habib"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 bg-base-content
                         rotate-12 flex items-center justify-center text-[var(--color-base-100)] font-bold border border-[var(--color-base-100)]"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0s',
                }}
              >
                <span className="text-2xl">✨</span>
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-base-100 border-2 border-base-content
                         -rotate-12 flex items-center justify-center text-base-content"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold font-display">8+</div>
                  <div className="text-xs font-semibold uppercase tracking-widest">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-accent font-semibold text-base-content/50 group-hover:text-base-content transition-colors tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-8 h-14 rounded-full border-2 border-base-content/50 flex justify-center p-2 group-hover:border-base-content transition-colors">
            <div className="w-1 h-3 bg-base-content rounded-full animate-bounce" />
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
