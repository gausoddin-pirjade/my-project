"use client";

import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = useMemo(() => [
    {
      title: "Wonder Lust – Hotel Listing System",
      description: "Wonder Lust – Hotel Listing System is a web platform designed for travelers to explore and review accommodations, including houses, villas, farmhouses, and hotels. It offers a user-friendly interface for searching listings, viewing detailed property information, and submitting reviews. The system efficiently manages property details, user data, and reviews to enhance the booking experience.",
      imageUrl: "/projects/wonder-lust.png",
      liveDemoUrl: "https://wonder-lust-k146.onrender.com/listings",
      sourceCodeUrl: "https://github.com/gausoddin-pirjade/Wonder-Lust",
      technologies: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "InShare File-Sharing System",
      description: "InShare – File-Sharing System is a web-based platform that enables users to upload files, generate shareable links, and send them via email. It features a user-friendly interface for seamless file sharing. Additionally, SMTP integration ensures secure email functionality, allowing users to share file links effortlessly.",
      imageUrl: "/projects/inshare.png",
      liveDemoUrl: "https://gausoddin-pirjade.github.io/Inshare-file-Sharing-Frontend/",
      sourceCodeUrl: "https://github.com/gausoddin-pirjade/In-share-file-sharing",
      technologies: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "SMTP"],
    },
    {
      title: "Simon Memory Game",
      description: "Simon Memory Game is an interactive web-based game, where players replicate dynamically generated color sequences. The game features progressive difficulty, tracking user performance and providing feedback. With a responsive and engaging UI, it ensures a smooth experience across various devices.",
      imageUrl: "/projects/simon-says-game.png",
      liveDemoUrl: "https://gausoddin-pirjade.github.io/Simon-Says-Game/",
      sourceCodeUrl: "https://github.com/gausoddin-pirjade/Simon-Says-Game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ], []);

  const [visibleProjects, setVisibleProjects] = useState(Array(projects.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projects.findIndex(project => project.title === entry.target.getAttribute('data-title'));
            setVisibleProjects((prev) => {
              const newVisibleProjects = [...prev];
              newVisibleProjects[index] = true;
              return newVisibleProjects;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [projects]);

  return (
    <section id="project" className="dark:text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">My Projects</h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-12">
          The following projects helped me grasp and enhance my understanding of various Front-End and Back-End concepts.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card w-full md:w-4/5 lg:w-5/6" data-title={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveDemoUrl={project.liveDemoUrl}
              sourceCodeUrl={project.sourceCodeUrl}
              technologies={project.technologies}
              isVisible={visibleProjects[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;