import React from "react";
import { Heart } from "lucide-react";
import { personalInfo } from "../data/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/40 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Center - Made with Love */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-white/40 hover:text-orange-400 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white/40 hover:text-orange-400 transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/40 hover:text-orange-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
