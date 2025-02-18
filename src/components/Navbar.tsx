"use client";
import { FaDev } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Project', id: 'project' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Adjusted threshold value
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value to match the height of your navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent fixed w-full z-20 top-2 start-0">
      <div className="max-w-screen-xl w-4/5 rounded-lg bg-gray-200 dark:bg-transparent bg-opacity-50 backdrop-blur-md flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-4xl font-bold">
            <FaDev style={{ color: '#52D0A3' }} /> {/* Change the color here */}
          </div>
          <button
            className="text-gray-700 dark:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 px-6 text-xl rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500 ${
                    activeSection === section.id ? 'text-green-500' : ''
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;