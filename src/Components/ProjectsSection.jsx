import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  Rocket,
  ChevronDown,
  ChevronUp,
  Star,
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from 'react-icons/si';
import project1 from '../assets/freelify.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const techIcons = {
    React: { icon: FaReact, color: '#61DAFB' },
    'Node.js': { icon: FaNodeJs, color: '#339933' },
    MongoDB: { icon: SiMongodb, color: '#47A248' },
    'Express.js': { icon: SiExpress, color: '#000000' },
    Firebase: { icon: SiFirebase, color: '#FFCA28' },
    Tailwind: { icon: SiTailwindcss, color: '#06B6D4' },
  };

  const projects = [
    {
      id: 1,
      title: 'Freelify',
      subtitle: 'A freelancing marketplace',
      category: 'Full Stack',
      featured: true,
      description:
        'Freelify – A freelancing marketplace web app built with React, React Router, and Firebase Authentication. Fully responsive UI with Tailwind CSS, allowing users to browse services, register/login, and explore freelancer-client features.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'],
      thumbnail: project1, // Replace with actual import
      link: 'https://freelance-market-place-7a5e9.web.app/',
      github:
        'https://github.com/ahsan-habib01/freelance-market-place-client.git',
      status: 'Live',
      highlight: 'Full authentication & payment integration',
    },
    {
      id: 2,
      title: 'GreenNest',
      subtitle: 'A plant care & shop',
      category: 'Frontend',
      featured: true,
      description:
        'A nature-inspired e-commerce web app focused on sustainable and eco-friendly products. Designed with React and Tailwind CSS, ensuring responsive layout and smooth user experience.',
      tags: ['React', 'Express.js', 'Firebase', 'Tailwind'],
      thumbnail: project2,
      link: 'https://green-nest-indoor-plants.web.app/',
      github: 'https://github.com/ahsan-habib01/greenNest-indoor-plants.git',
      status: 'Live',
      highlight: 'Beautiful UI with plant care guides',
    },
    {
      id: 3,
      title: 'Hero Apps',
      subtitle: 'App library platform',
      category: 'Web App',
      featured: true,
      description:
        'A responsive app library platform built with React and Tailwind CSS that showcases various hero-based applications. Designed to demonstrate multiple mini-app functionalities in one place with smooth UI and navigation',
      tags: ['React', 'Tailwind', 'Firebase'],
      thumbnail: project3,
      link: 'https://hero-apps-ahsan-habib.netlify.app/',
      github: 'https://github.com/ahsan-habib01/B12A08-Hero-Apps.git',
      status: 'Live',
      highlight: 'Multi-app showcase platform',
    },
    // Additional projects (hidden initially)
    {
      id: 4,
      title: 'E-Commerce Dashboard',
      subtitle: 'Admin panel',
      category: 'Full Stack',
      featured: false,
      description:
        'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, product management, and order tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      thumbnail: null,
      link: '#',
      github: '#',
      status: 'In Progress',
      highlight: 'Real-time analytics',
    },
    {
      id: 5,
      title: 'Portfolio Builder',
      subtitle: 'Creator tool',
      category: 'Web App',
      featured: false,
      description:
        'An intuitive portfolio builder that helps developers and designers create stunning portfolios without coding.',
      tags: ['React', 'Firebase', 'Tailwind'],
      thumbnail: null,
      link: '#',
      github: '#',
      status: 'In Progress',
      highlight: 'Drag & drop interface',
    },
  ];

  const displayedProjects = showAll
    ? projects
    : projects.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s' }}
        />
        <div
          className="absolute bottom-40 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
      </div>

      <div className="section-container relative z-10 mx-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-accent font-semibold text-primary">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-black mb-3">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-base text-base-content/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`relative rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                           border border-base-300 overflow-hidden hover:border-primary 
                           transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 
                           ${
                             index % 2 === 0
                               ? 'hover:-translate-y-1'
                               : 'hover:translate-y-1'
                           }`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative h-64 lg:h-80 overflow-hidden ${
                      index % 2 === 0 ? '' : 'lg:col-start-2'
                    }`}
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <div
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r 
                                  from-yellow-400 to-orange-500 text-white shadow-lg"
                        >
                          <Star className="w-3 h-3 fill-white" />
                          <span className="text-xs font-accent font-bold">
                            Featured
                          </span>
                        </div>
                      </div>
                    )}
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div
                        className={`px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg font-accent font-bold text-xs ${
                          project.status === 'Live'
                            ? 'bg-green-500 text-white'
                            : 'bg-orange-500 text-white'
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="text-6xl font-display font-black text-primary/20">
                              {project.id}
                            </div>
                            <p className="text-xs text-base-content/40 font-accent">
                              Thumbnail Coming Soon
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-all duration-500 
                                  flex flex-col items-center justify-center gap-3"
                    >
                      <div className="text-white text-center space-y-2 px-6">
                        <Rocket className="w-12 h-12 mx-auto animate-bounce" />
                        <p className="text-base font-accent font-semibold">
                          {project.highlight}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn p-3 bg-white rounded-xl hover:scale-110 
                                   transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn p-3 bg-white rounded-xl hover:scale-110 
                                   transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          <Github className="w-5 h-5 text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`p-6 lg:p-8 flex flex-col justify-center ${
                      index % 2 === 0 ? '' : 'lg:col-start-1'
                    }`}
                  >
                    {/* Category */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                  bg-primary/10 border border-primary/20 w-fit mb-3"
                    >
                      <Code2 className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-accent font-bold text-primary">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl lg:text-3xl font-display font-black mb-1 
                                 group-hover:text-primary transition-colors duration-300"
                    >
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary/70 font-accent font-semibold mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-base-content/70 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack with Icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => {
                        const tech = techIcons[tag];
                        const Icon = tech?.icon;

                        return (
                          <div
                            key={tag}
                            className="group/tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                                     bg-base-200 border border-base-300 hover:border-primary 
                                     hover:bg-primary/5 transition-all duration-300 cursor-default
                                     hover:scale-105"
                          >
                            {Icon && (
                              <Icon
                                size={14}
                                style={{
                                  color:
                                    tech.color === '#000000'
                                      ? 'currentColor'
                                      : tech.color,
                                }}
                                className={
                                  tech.color === '#000000'
                                    ? 'text-gray-900 dark:text-white'
                                    : ''
                                }
                              />
                            )}
                            <span className="text-xs font-accent font-semibold">
                              {tag}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-lg 
                                 bg-primary text-primary-content font-accent font-bold text-sm
                                 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 
                                 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-lg 
                                 border-2 border-base-300 hover:border-primary hover:bg-primary/5 
                                 font-accent font-bold text-sm hover:scale-105 transition-all duration-300"
                      >
                        <span>View Code</span>
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {projects.length > 3 && (
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-gradient-to-r from-primary to-secondary text-white 
                       font-accent font-bold hover:shadow-xl hover:shadow-primary/50 
                       hover:scale-105 transition-all duration-300"
            >
              <span>{showAll ? 'Show Less' : 'See More Projects'}</span>
              {showAll ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 
                       border border-primary/20 overflow-hidden p-8"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto space-y-4">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl 
                           bg-gradient-to-br from-primary to-secondary mb-2 animate-bounce"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-display font-black">
                More Projects Coming Soon
              </h3>

              <p className="text-base text-base-content/70">
                I'm constantly working on new projects and improving existing
                ones. Check back soon or follow me on GitHub to see what I'm
                building next.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-3">
                <a
                  href="https://github.com/ahsan-habib01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl 
                           bg-primary text-primary-content font-accent font-bold 
                           hover:shadow-lg hover:shadow-primary/50 hover:scale-105 
                           transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>Follow on GitHub</span>
                </a>

                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl 
                           border-2 border-primary hover:bg-primary hover:text-primary-content 
                           font-accent font-bold hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Let's Collaborate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
