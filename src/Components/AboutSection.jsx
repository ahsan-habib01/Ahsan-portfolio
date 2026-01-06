import React, { useState, useEffect } from 'react';
import {
  Code,
  Lightbulb,
  Rocket,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Award,
  Sparkles,
} from 'lucide-react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    skills: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const targets = { projects: 8, experience: 1, skills: 10 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep <= steps) {
        setCounters({
          projects: Math.floor((targets.projects / steps) * currentStep),
          experience: Math.floor((targets.experience / steps) * currentStep),
          skills: Math.floor((targets.skills / steps) * currentStep),
        });
        currentStep++;
      } else {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const experience = [
    {
      year: '2025 – Present',
      title: 'React & MERN Developer',
      icon: Code,
      description:
        'Building full-stack projects with React, Express, MongoDB, and Firebase authentication. Focused on clean UI, reusable components, and scalable backend structures.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    },
    {
      year: '2025 – Present',
      title: 'Frontend Developer',
      icon: Lightbulb,
      description:
        'Started with HTML, CSS, GitHub, Tailwind and moved into JavaScript fundamentals. Built multiple UI-based mini-projects to strengthen core concepts.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    },
  ];

  const stats = [
    { label: 'Projects', value: counters.projects, icon: Rocket, suffix: '+' },
    {
      label: 'Years Experience',
      value: counters.experience,
      icon: TrendingUp,
      suffix: '+',
    },
    { label: 'Core Skills', value: counters.skills, icon: Award, suffix: '+' },
  ];

  const highlights = [
    { icon: Code, text: 'Clean Code Enthusiast' },
    { icon: Lightbulb, text: 'Problem Solver' },
    { icon: Rocket, text: 'Fast Learner' },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="section-container relative z-10 mx-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-accent font-semibold text-primary">
              Get to Know Me
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Turning ideas into clean, functional, modern web experiences
          </p>
        </div>

        {/* Stats Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                         border border-base-300 hover:border-primary transition-all duration-500
                         hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 
                              group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4
                               group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" />
                  </div>
                  <h3 className="text-5xl font-display font-black text-primary mb-2">
                    {stat.value}
                    {stat.suffix}
                  </h3>
                  <p className="text-base-content/70 font-accent font-semibold">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 
                              group-hover:bg-primary group-hover:scale-150 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Who I Am */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <h3 className="text-3xl font-display font-bold text-primary">
                Who I Am
              </h3>
            </div>

            <p className="text-lg text-base-content/80 leading-relaxed">
              I'm a{' '}
              <span className="text-primary font-semibold">
                Full Stack Developer
              </span>{' '}
              focused on building modern, clean, fast web applications. I enjoy
              making simple interfaces, reusable components, optimized APIs, and
              full-stack features that feel smooth and intuitive.
            </p>

            <p className="text-lg text-base-content/80 leading-relaxed">
              Currently learning{' '}
              <span className="text-secondary font-semibold">
                Next.js and TypeScript
              </span>
              , improving backend skills, and working on real-world style
              projects like Freelify, Greennest, and more.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-base-200 border border-base-300
                             hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default
                             hover:scale-105"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-accent font-semibold text-sm">
                      {highlight.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Card */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
              <h3 className="text-3xl font-display font-bold text-primary">
                Education
              </h3>
            </div>

            <div
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                         border border-base-300 hover:border-secondary transition-all duration-500
                         hover:shadow-2xl hover:shadow-secondary/20 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 
                            group-hover:from-secondary/10 group-hover:to-accent/10 transition-all duration-500"
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center
                             group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-6 
                             transition-all duration-500"
                >
                  <GraduationCap
                    className="w-8 h-8 text-secondary group-hover:text-secondary-content 
                                          transition-colors"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h4 className="text-xl font-display font-bold text-base-content">
                  B.Sc. in Textile Engineering
                </h4>
                <p className="text-lg font-accent font-semibold text-secondary">
                  (Yarn Engineering)
                </p>
                <p className="text-base-content/70 font-medium">
                  Rangpur Textile Engineering College
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                    <span className="text-sm font-accent font-semibold text-secondary">
                      2023 – Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl 
                            group-hover:scale-150 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
            <h3 className="text-3xl font-display font-bold text-primary">
              Experience Journey
            </h3>
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline line connector (except for last item) */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                  )}

                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary 
                                  flex items-center justify-center group-hover:scale-110 group-hover:rotate-6
                                  transition-all duration-500 shadow-lg shadow-primary/30 z-10"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content Card */}
                    <div
                      className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                                  border border-base-300 hover:border-primary transition-all duration-500
                                  hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-1"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-display font-bold text-base-content mb-2">
                            {item.title}
                          </h4>
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                       bg-primary/10 border border-primary/20"
                          >
                            <span className="text-sm font-accent font-semibold text-primary">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-base-content/70 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-base-200 border border-base-300
                                     text-xs font-accent font-semibold text-base-content
                                     hover:border-primary hover:bg-primary/5 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
