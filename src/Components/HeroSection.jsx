import React, { useEffect, useState } from 'react';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import ahsanPhoto from '../assets/ahsan-photo2.png';

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
            : currentRole.substring(0, displayText.length + 1)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-base-100 via-base-200 to-base-100 py-16 mt-16"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--p) / 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--p) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10 mx-10">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-accent font-semibold text-primary">
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-black leading-none tracking-tight">
                  Hi, I'm
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                    Ahsan Habib
                  </span>
                </h1>
              </div>

              {/* Typing Effect Role */}
              <div className="flex items-center gap-3 min-h-[40px]">
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
              </div>
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
                  className="px-4 py-2 rounded-full bg-base-200 border border-base-300 
                           hover:border-primary hover:bg-primary/5 transition-all duration-300
                           hover:scale-105 cursor-default"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <span className="text-sm font-accent font-semibold text-base-content">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3 rounded bg-primary text-primary-content 
                         font-accent font-bold overflow-hidden transition-all duration-300
                         hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>

              <a
                href="/Ahsan_Habib_Resume.pdf"
                download="Ahsan_Habib_Resume.pdf"
                className="group px-6 py-3 rounded bg-secondary border-2 border-base-300
                         text-base-content font-accent font-bold inline-flex items-center gap-2
                         hover:border-primary hover:bg-primary/5 transition-all duration-300
                         hover:shadow-lg hover:scale-105"
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
                  href: 'mailto:ahsanhabib01@gmail.com',
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-xl bg-base-200 border border-base-300
                           flex items-center justify-center text-base-content
                           hover:bg-primary hover:text-primary-content hover:border-primary
                           hover:scale-110 hover:rotate-6 transition-all duration-300"
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
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <div
                className="relative aspect-square rounded-[3rem] overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 0.3
                  }deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent p-1 rounded-[3rem] animate-gradient">
                  <div className="w-full h-full bg-base-100 rounded-[2.8rem] overflow-hidden">
                    {/* Replace with your image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      {/* <div className="text-6xl">👨‍💻</div> */}
                      <img src={ahsanPhoto} alt="Ahsan Habib" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl -z-10 scale-95" />
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary to-secondary 
                         rounded-2xl rotate-12 flex items-center justify-center text-white font-bold
                         shadow-2xl shadow-primary/50"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0s',
                }}
              >
                <span className="text-2xl">✨</span>
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary to-accent 
                         rounded-2xl -rotate-12 flex items-center justify-center text-white
                         shadow-2xl shadow-secondary/50"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-xs font-semibold">Projects</div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-1/4 -left-12 space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary/50"
                    style={{
                      animation: `pulse 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 text-base-content/60 hover:text-primary transition-colors">
          <span className="text-xs font-accent uppercase tracking-wider">
            Scroll Down
          </span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

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
