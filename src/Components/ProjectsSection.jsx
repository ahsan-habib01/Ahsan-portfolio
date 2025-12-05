import React, { useState } from 'react';
import project1 from '../assets/freelify.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Freelify – A freelancing marketplace',
      category: 'Full Stack',
      description:
        'Freelify – A freelancing marketplace web app built with React, React Router, and Firebase Authentication. Fully responsive UI with Tailwind CSS, allowing users to browse services, register/login, and explore freelancer-client features.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'MongoDB'],
      thumbnail: project1, // Add your image path here later
      link: 'https://freelance-market-place-7a5e9.web.app/',
      github:
        'https://github.com/ahsan-habib01/freelance-market-place-client.git',
      status: 'Live',
    },
    {
      id: 2,
      title: 'GreenNest - A plant care & shop',
      category: 'Frontend',
      description:
        'A nature-inspired e-commerce web app focused on sustainable and eco-friendly products. Designed with React and Tailwind CSS, ensuring responsive layout and smooth user experience.',
      tags: ['React', 'Express.js', 'Firebase', 'Tailwind'],
      thumbnail: project2,
      link: 'https://green-nest-indoor-plants.web.app/',
      github: 'https://github.com/ahsan-habib01/greenNest-indoor-plants.git',
      status: 'Live',
    },
    {
      id: 3,
      title: 'Hero Apps',
      category: 'Web App',
      description:
        'A responsive app library platform built with React and Tailwind CSS that showcases various hero-based applications. Designed to demonstrate multiple mini-app functionalities in one place with smooth UI and navigation',
      tags: ['React', 'API Integration', 'Charts'],
      thumbnail: project3,
      link: 'https://hero-apps-ahsan-habib.netlify.app/',
      github: 'https://github.com/ahsan-habib01/B12A08-Hero-Apps.git',
      status: 'Live',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-elegant group hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Project Thumbnail */}
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 aspect-video group-hover:shadow-2xl transition-shadow duration-500">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <span className="text-6xl font-display font-black text-primary/30">
                            {project.id}
                          </span>
                          <p className="text-xs text-base-content/40 font-accent">
                            Thumbnail Coming Soon
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white rounded-full text-xs font-accent font-bold shadow-lg">
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white hover:bg-base-100 rounded-lg hover:scale-110 transition-transform shadow-lg"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white hover:bg-base-100 rounded-lg hover:scale-110 transition-transform shadow-lg"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-accent font-bold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base-content/70 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-base-200 hover:bg-base-300 text-base-content rounded-lg text-sm font-accent font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-light text-white rounded-lg font-accent font-semibold text-sm transition-all hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 border-2 border-base-300 hover:border-primary hover:bg-base-200 rounded-lg font-accent font-semibold text-sm transition-all hover:scale-105"
                    >
                      <span>View Code</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="glass-effect rounded-3xl p-12 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold">
              More Projects Coming Soon
            </h3>
            <p className="text-base-content/70">
              I'm constantly working on new projects and improving existing
              ones. Check back soon or follow me on GitHub to see what I'm
              building next.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://github.com/ahsan-habib01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Follow on GitHub
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="btn btn-primary"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
