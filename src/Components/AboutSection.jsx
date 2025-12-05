import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    projects: 8,
    experience: 2,
    skills: 10,
  });

  // Simple counter animation
  useEffect(() => {
    const targets = { projects: 8, experience: 2, skills: 10 };
    const duration = 1500;
    const steps = 50;

    const increment = {
      projects: targets.projects / steps,
      experience: targets.experience / steps,
      skills: targets.skills / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounters({
          projects: Math.floor(increment.projects * currentStep),
          experience: Math.floor(increment.experience * currentStep),
          skills: Math.floor(increment.skills * currentStep),
        });
        currentStep++;
      } else clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const experience = [
    {
      year: '2025– Present',
      title: 'React & MERN Developer',
      description:
        'Building full-stack projects with React, Express, MongoDB, and Firebase authentication. Focused on clean UI, reusable components, and scalable backend structures.',
    },
    {
      year: '2025 – Present',
      title: 'Frontend Developer',
      description:
        'Started with HTML, CSS, GitHub, Tailwind and moved into JavaScript fundamentals. Built multiple UI-based mini-projects to strengthen core concepts.',
    },
  ];

  const education = {
    degree: 'B.Sc. in Textile Engineering (Yarn Engineering)',
    institution: 'Rangpur Textile Engineering College',
    year: '2023 – Present',
  };

  return (
    <section id="about" className="section-container bg-base-200/50 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-base-content/70 mt-2">
            Turning ideas into clean, functional, modern web experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary">
              {counters.projects}+
            </h3>
            <p className="text-base-content/70 text-sm">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">
              {counters.experience}+
            </h3>
            <p className="text-base-content/70 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">
              {counters.skills}+
            </h3>
            <p className="text-base-content/70 text-sm">Core Skills</p>
          </div>
        </div>

        {/* About Text */}
        <div className="space-y-6 mb-16">
          <h3 className="text-2xl font-bold text-primary">Who I Am?</h3>
          <p className="text-base-content/80 leading-relaxed">
            I’m a React & MERN stack developer focused on building modern,
            clean, fast web applications. I enjoy making simple interfaces,
            reusable components, optimized APIs, and full-stack features that
            feel smooth and intuitive.
          </p>
          <p className="text-base-content/80 leading-relaxed">
            Currently learning Next.js, improving backend skills, and working on
            real-world style projects like Freelify, Greennest, and more.
          </p>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-base-100 border hover:border-primary duration-200"
              >
                <p className="text-sm text-primary font-semibold">
                  {item.year}
                </p>
                <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                <p className="text-base-content/70 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
          <div className="p-5 bg-base-100 rounded-xl border">
            <h4 className="text-lg font-bold">{education.degree}</h4>
            <p className="text-accent font-medium">{education.institution}</p>
            <p className="text-base-content/60 text-sm">{education.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
