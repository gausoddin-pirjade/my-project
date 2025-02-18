import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveDemoUrl: string;
  sourceCodeUrl: string;
  technologies: string[];
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveDemoUrl,
  sourceCodeUrl,
  technologies,
  isVisible,
}) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 mb-8 transition-transform duration-300 transform ${
        isVisible ? "scale-105" : ""
      } hover:scale-110 w-full max-w-7xl mx-auto`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageUrl}
          alt={`${title} Screenshot`}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 mt-4">{description}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 dark:bg-gray-700 border-2 border-gray-200 text-sm px-3 py-1 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <a
            href={liveDemoUrl}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
          >
            LIVE DEMO ↗
          </a>
          <a
            href={sourceCodeUrl}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
          >
            SOURCE CODE ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;