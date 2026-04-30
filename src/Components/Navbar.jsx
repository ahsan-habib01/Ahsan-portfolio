import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTheme = checked => {
    setTheme(checked ? 'dark' : 'light');
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    {
      name: 'Home',
      id: 'home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      name: 'About',
      id: 'about',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      name: 'Skills',
      id: 'skills',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    {
      name: 'Projects',
      id: 'projects',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    },
    {
      name: 'Contact',
      id: 'contact',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-base-100/90 backdrop-blur-xl border-b border-base-content/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-base-content opacity-0 transition-opacity duration-300"
        style={{ opacity: isScrolled ? 1 : 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Animation */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center space-x-3"
          >
            <div className="relative">
              <div className="relative w-10 h-10 bg-base-content flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <span className="text-[var(--color-base-100)] font-bold text-lg font-body">
                  AH
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-body font-black uppercase tracking-tighter text-base-content group-hover:scale-105 transition-transform duration-300">
                Ahsan<span className="text-base-content/50">Habib.</span>
              </h1>
            </div>
          </button>

          {/* Desktop Navigation with Enhanced Design */}
          <div className="hidden lg:flex items-center">
            <div className={`flex items-center space-x-4 p-1.5`}>
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`group relative px-2 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-base-content border-b-2 border-base-content'
                      : 'text-base-content/60 hover:text-base-content'
                  }`}
                >
                  <span className="relative flex items-center space-x-2">
                    <span>{link.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Theme Toggle with Minimal Design */}
            <label className="relative cursor-pointer group flex items-center gap-2">
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${theme === 'light' ? 'text-base-content' : 'text-base-content/40'}`}
              >
                LT
              </span>
              <div
                className={`w-10 h-5 border border-base-content rounded-full relative transition-colors bg-base-100 flex items-center`}
                onClick={() => handleTheme(theme === 'light')}
              >
                <div
                  className={`absolute w-3 h-3 rounded-full bg-base-content transition-transform duration-300 ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </div>
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${theme === 'dark' ? 'text-base-content' : 'text-base-content/40'}`}
              >
                DK
              </span>
            </label>

            {/* CTA Button - Desktop Only  */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-base-content text-[var(--color-base-100)] font-body font-semibold text-sm hover:opacity-80 transition-opacity duration-300"
            >
              <span>Contact me</span>
            </button>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? 'max-h-[600px] opacity-100 mt-6'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`group relative px-5 py-3 rounded-xl font-accent text-sm font-semibold tracking-wide transition-all duration-300 text-left ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary to-primary-600 text-[var(--color-base-100)] shadow-lg shadow-primary/30'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={link.icon}
                      />
                    </svg>
                    <span>{link.name}</span>
                    {activeSection === link.id && (
                      <svg
                        className="w-4 h-4 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-6 flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-primary to-primary-600 text-[var(--color-base-100)] rounded-xl font-accent font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            {/* Mobile Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Available for freelance opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
