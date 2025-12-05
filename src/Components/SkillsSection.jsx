import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
// import {
//   BiLogoMongodb,
//   FaNodeJs,
//   FaReact,
//   SiExpress,
//   SiFirebase,
//   SiJavascript,
//   SiNextdotjs,
//   SiTailwindcss,
// } from 'react-icons/all';

const skills = [
  { icon: <FaReact size={36} />, name: 'React.js' },
  { icon: <SiJavascript size={36} />, name: 'JavaScript (ES6+)' },
  { icon: <BiLogoMongodb size={36} />, name: 'MongoDB' },
  { icon: <SiExpress size={36} />, name: 'Express.js' },
  { icon: <SiFirebase size={36} />, name: 'Firebase Auth' },
  { icon: <SiNextdotjs size={36} />, name: 'Next.js' },
  { icon: <SiTailwindcss size={36} />, name: 'Tailwind CSS' },
  { icon: <FaNodeJs size={36} />, name: 'Node.js' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container bg-base-200/50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Skills & Expertise
        </h2>
        <p className="text-base-content/70 mb-12">
          A concise overview of the technologies I work with daily.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-primary">{skill.icon}</div>
              <p className="font-medium text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
