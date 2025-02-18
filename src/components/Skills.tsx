import React from "react";
import {
  SiC, SiCplusplus, SiPython, SiMysql, SiMongodb, SiHtml5,
  SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiGithub, SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava style={{ color: "#FFA726" }} /> },
      { name: "C", icon: <SiC style={{ color: "#A8B9CC" }} /> },
      { name: "C++", icon: <SiCplusplus style={{ color: "#00599C" }} /> },
      { name: "Python", icon: <SiPython style={{ color: "#3776AB" }} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
      { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
      { name: "CSS", icon: <SiCss3 style={{ color: "#1572B6" }} /> },
      { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
      { name: "Node.js", icon: <SiNodedotjs style={{ color: "#339933" }} /> },
      { name: "Express.js", icon: <SiExpress style={{ color: "#FFFFFF" }} /> },
      { name: "React.js", icon: <SiReact style={{ color: "#61DAFB" }} /> },
      { name: "Next.js", icon: <SiNextdotjs style={{ color: "#FFFFFF" }} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
      { name: "Bootstrap", icon: <SiBootstrap style={{ color: "#7952B3" }} /> },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git", icon: <SiGit style={{ color: "#F05032" }} /> },
      { name: "GitHub", icon: <SiGithub style={{ color: "#181717" }} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="dark:text-white py-16 px-4 md:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">My Skills</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-8 md:mb-12 text-lg md:text-2xl">
          A brief overview of the technologies and skills I&apos;m familiar with.
        </p>
        <div className="space-y-8 md:space-y-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-xl bg-gray-200 dark:bg-gray-900 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 md:mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 md:gap-3 border-2 border-gray-200 bg-gray-400 dark:bg-gray-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500"
                  >
                    <span className="text-xl md:text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;