import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="text-gray-700 dark:text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-16">
      <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Right Image (comes first on mobile) */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <Image src="/profile.png" alt="Profile" className="h-52 md:h-80 object-contain" width={320} height={320} />
        </div>

        {/* Left Content (comes after image on mobile) */}
        <div className="flex-1 text-center md:mt-16 md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Full-Stack Developer <span>👋</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-white mt-6 leading-relaxed">
            Hello, I'm <span className="text-green-400 text-xl md:text-3xl font-bold"><b>Gausoddin Pirjade</b></span>.  
            A passionate Full Stack Developer who loves creating innovative and user-friendly digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 justify-center">
            <a href="https://www.linkedin.com/in/gausoddin-pirjade" target="_blank" className="text-white text-2xl border-2 border-white bg-gray-700 p-2 rounded-lg hover:bg-gray-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com/gausoddin-pirjade" target="_blank" className="text-white text-2xl bg-gray-700 p-2 border-2 border-white rounded-lg hover:bg-gray-600">
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-black text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition">
              CONTACT ME HERE →
            </a>
            <a href="/Gausoddin Pirjade.pdf" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition" target="_blank" rel="noreferrer">
              DOWNLOAD Resume ⬇
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;