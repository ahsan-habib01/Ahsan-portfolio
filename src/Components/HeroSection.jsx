import React, { useEffect, useState } from 'react';
import ahsanImg from '../assets/ahsan.jpg';
import ahsanImg2 from '../assets/ahsan-photo.png';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Web Developer', 'Full Stack Developer', 'React Specialist'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 mt-16 bg-gradient-to-br from-white to-gray-200  dark:from-[#1f2933] dark:to-[#374151]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            {/* Greeting */}
            <div className="inline-block">
              <span className="text-base-content/60 font-accent text-sm tracking-[0.3em] uppercase font-semibold">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  {' '}
                  <br />
                  Ahsan Habib
                </span>
              </h1>

              {/* Rotating Roles */}
              <div className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-accent font-semibold text-base-content/80">
                  A
                </span>
                <span className="text-2xl lg:text-3xl font-accent font-bold text-primary transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-xl">
              Crafting elegant and performant web experiences with modern
              technologies. Passionate about building user-centric applications
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn bg-primary text-white"
              >
                View My Work
              </button>
              <a
                href="/Ahsan_Habib_Resume.pdf"
                download="Ahsan_Habib_Resume.pdf"
                className="btn bg-secondary text-white inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Quick Stats */}
            {/* <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-1">
                <h3 className="text-3xl font-display font-bold text-primary">
                  10+
                </h3>
                <p className="text-sm text-base-content/60 font-accent uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-display font-bold text-primary">
                  3+
                </h3>
                <p className="text-sm text-base-content/60 font-accent uppercase tracking-wider">
                  Years Exp
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-display font-bold text-primary">
                  50+
                </h3>
                <p className="text-sm text-base-content/60 font-accent uppercase tracking-wider">
                  Happy Clients
                </p>
              </div>
            </div> */}
          </div>

          {/* Right Side - Visual Element */}
          <div
            className={`relative ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary via-primary to-secondary p-1 animate-float">
                <div className="w-full h-160 rounded-[2.8rem] bg-base-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={ahsanImg2}
                    alt="ahsan-image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl rotate-12 animate-float"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -rotate-12 animate-float"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
