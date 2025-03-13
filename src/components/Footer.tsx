import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 dark:text-gray-400 text-lg">© 2025 Gausoddin Pirjade. <br /> All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/gausoddin-pirjade" className="text-white text-2xl bg-gray-700 p-2 rounded-lg hover:bg-gray-600" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/gausoddin-pirjade" className="text-white text-2xl bg-gray-700 p-2 rounded-lg hover:bg-gray-600" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:gausoddinpirjade@gmail.com" className="text-white text-2xl bg-gray-700 p-2 rounded-lg hover:bg-gray-600" target="_blank" rel="noopener noreferrer"><MdOutlineMarkEmailUnread /></a>
          <a href="https://leetcode.com/u/gausoddin_pirjade" className="text-white text-2xl bg-gray-700 p-2 rounded-lg hover:bg-gray-600" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;