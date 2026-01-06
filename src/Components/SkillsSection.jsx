import React, { useState, useEffect } from 'react';
import {
  Code2,
  Database,
  Server,
  Palette,
  Zap,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiReactrouter,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
  ];

  const skills = [
    {
      name: 'React.js',
      category: 'frontend',
      level: 90,
      icon: FaReact,
      iconColor: '#61DAFB',
      color: 'from-blue-400 to-cyan-400',
      description: 'Component-based UI library',
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 85,
      icon: SiJavascript,
      iconColor: '#F7DF1E',
      color: 'from-yellow-400 to-orange-400',
      description: 'ES6+ modern JavaScript',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      level: 75,
      icon: SiNextdotjs,
      iconColor: '#000000',
      color: 'from-gray-700 to-gray-900',
      description: 'React framework for production',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 88,
      icon: SiTailwindcss,
      iconColor: '#06B6D4',
      color: 'from-cyan-400 to-blue-500',
      description: 'Utility-first CSS framework',
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 80,
      icon: FaNodeJs,
      iconColor: '#339933',
      color: 'from-green-500 to-emerald-600',
      description: 'JavaScript runtime environment',
    },
    {
      name: 'Express.js',
      category: 'backend',
      level: 82,
      icon: SiExpress,
      iconColor: '#000000',
      color: 'from-gray-600 to-gray-800',
      description: 'Fast web framework for Node',
    },
    {
      name: 'MongoDB',
      category: 'database',
      level: 78,
      icon: SiMongodb,
      iconColor: '#47A248',
      color: 'from-green-600 to-green-800',
      description: 'NoSQL database solution',
    },
    {
      name: 'Firebase',
      category: 'backend',
      level: 85,
      icon: SiFirebase,
      iconColor: '#FFCA28',
      color: 'from-yellow-500 to-orange-600',
      description: 'Backend-as-a-Service platform',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 70,
      icon: SiTypescript,
      iconColor: '#3178C6',
      color: 'from-blue-500 to-blue-700',
      description: 'Typed JavaScript superset',
    },
    {
      name: 'REST API',
      category: 'backend',
      level: 83,
      icon: TbApi,
      iconColor: '#FF6B6B',
      color: 'from-purple-500 to-pink-500',
      description: 'RESTful API design',
    },
    {
      name: 'Git & GitHub',
      category: 'frontend',
      level: 87,
      icon: FaGithub,
      iconColor: '#181717',
      color: 'from-gray-700 to-gray-900',
      description: 'Version control system',
    },
    {
      name: 'React Router',
      category: 'frontend',
      level: 85,
      icon: SiReactrouter,
      iconColor: '#CA4245',
      color: 'from-red-500 to-pink-500',
      description: 'Declarative routing library',
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-40 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
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
              My Toolbox
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-accent font-semibold
                         transition-all duration-300 hover:scale-105 ${
                           activeCategory === category.id
                             ? 'bg-primary text-primary-content shadow-lg shadow-primary/30'
                             : 'bg-base-200 text-base-content hover:bg-base-300 border border-base-300'
                         }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Skill Card */}
              <div
                className="relative h-full p-6 rounded-2xl bg-base-100 border border-base-300
                           hover:border-primary transition-all duration-500 
                           hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2
                           overflow-hidden cursor-default"
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full 
                              group-hover:scale-150 transition-transform duration-500"
                />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-xl 
                                  group-hover:scale-110 group-hover:rotate-6 
                                  transition-all duration-500"
                    >
                      <skill.icon
                        size={48}
                        style={{
                          color:
                            skill.iconColor === '#000000' ||
                            skill.iconColor === '#181717'
                              ? 'currentColor'
                              : skill.iconColor,
                        }}
                        className={`drop-shadow-lg ${
                          skill.iconColor === '#000000' ||
                          skill.iconColor === '#181717'
                            ? 'text-gray-900 dark:text-white'
                            : ''
                        }`}
                      />
                    </div>
                    {/* <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${skill.color} 
                                  text-white shadow-lg`}
                    >
                      {skill.level}%
                    </div> */}
                  </div>

                  {/* Skill name */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-base-content mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-base-content/60 font-accent">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-base-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full 
                                  transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 50 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-accent font-semibold">
                      Active Learning
                    </span>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 
                              group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r 
                       from-primary/10 to-secondary/10 border border-primary/20"
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-base-content/70 font-accent">
              Always learning and expanding my tech stack
            </span>
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
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
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
