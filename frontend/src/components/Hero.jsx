import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Download } from "lucide-react";
import { personalInfo } from "../data/mockData";
import { Button } from "./ui/button";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open(personalInfo.cvUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-amber-600/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-orange-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/20 to-transparent blur-3xl"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/80">Open to work</span>
            </div>

            {/* Role Tag */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-amber-400 border border-amber-500/30">
                {personalInfo.title.split("&")[0].trim()}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {personalInfo.name}
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-white/60 font-light">
              {personalInfo.title}
            </p>

            {/* Bio */}
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Contact Icons */}
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${personalInfo.email}`} className="group">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" />
                </div>
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" />
                </div>
              </a>
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <Github className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" />
                </div>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="group">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" />
                </div>
              </a>
              <div className="group cursor-pointer">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                onClick={handleDownloadCV}
                className="group px-8 py-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold text-base shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative lg:block hidden">
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

            {/* Portrait Container */}
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Rim Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-orange-500/40 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                {/* Image */}
                <img
                  src={personalInfo.portrait}
                  alt={personalInfo.name}
                  className="w-full h-[600px] object-cover"
                />

                {/* Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                    <p className="text-white font-medium">
                      Based in {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
