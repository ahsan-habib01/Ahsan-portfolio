import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home', isRoute: false },
    { name: 'About', id: 'about', isRoute: false },
    { name: 'Projects', id: 'projects', isRoute: false },
    { name: 'Contact', id: 'contact', isRoute: false },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ahsan-habib01',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahsan-habib01/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/home',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
  ];

  return (
    <footer className="relative glass border-t border-gray-200/50 dark:border-gray-700/50 mt-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#1a1f2e] dark:via-[#1f2937] dark:to-[#111827] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-primary/5 dark:from-blue-500/10 dark:to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 group">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">AH</span>
              </div>
              <h3 className="text-2xl font-display font-bold gradient-text">
                AhsanHabib
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Crafting elegant web experiences with modern technologies. Let's
              build something amazing together.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 dark:text-gray-400">
                Available for work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-accent font-semibold text-gray-900 dark:text-white flex items-center">
              Quick Links
              <span className="ml-2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-all duration-300 text-sm"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-primary rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={e => handleScrollToSection(e, link.id)}
                      className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-all duration-300 text-sm text-left"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-primary rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-accent font-semibold text-gray-900 dark:text-white flex items-center">
              Connect
              <span className="ml-2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl glass hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl glass border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-2">
              <span>© {currentYear} AhsanHabib.</span>
              <span className="hidden md:inline">•</span>
              <span>Crafted with</span>
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>and React</span>
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                Privacy Policy
              </button>
              <span className="text-gray-400">•</span>
              <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
