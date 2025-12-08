import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useLocalizedContent } from "../context/LanguageContext";
import { useParallax } from "../hooks/useParallax";

const Hero = () => {
  const [portraitLoaded, setPortraitLoaded] = React.useState(false);
  const [portraitError, setPortraitError] = React.useState(false);
  const { personalInfo, hero } = useLocalizedContent();
  const gradientParallax = useParallax(-0.08);
  const glowParallax = useParallax(0.15);
  const portraitParallax = useParallax(-0.05);
  const particleParallax = useParallax(0.12);

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
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/20 to-transparent blur-3xl"
          style={{ transform: `translate3d(0, ${gradientParallax}px, 0)` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl"
          style={{ transform: `translate3d(0, ${-gradientParallax}px, 0)` }}
        ></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 60% 80%, rgba(16,185,129,0.15), transparent 45%)",
            transform: `translate3d(0, ${particleParallax}px, 0)`,
          }}
        ></div>
        <div
          className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent blur-3xl"
          style={{ transform: `translate3d(0, ${glowParallax}px, 0)` }}
        ></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/80">
                {hero.badgeText}
              </span>
            </div>

            {/* Role Tag */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30">
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
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/70 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white/70 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <Github className="w-5 h-5 text-white/70 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="group">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white/70 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              <div className="group cursor-pointer">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white/70 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                onClick={handleDownloadCV}
                className="group px-8 py-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white font-semibold text-base shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {hero.downloadCta}
              </Button>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative lg:block hidden">
            {/* Glow Effects */}
            <div
              className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
              style={{ transform: `translate3d(0, ${glowParallax * 1.5}px, 0)` }}
            ></div>
            <div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
              style={{ transform: `translate3d(0, ${-glowParallax}px, 0)` }}
            ></div>

            {/* Portrait Container */}
            <div
              className="relative z-10"
              style={{ transform: `translate3d(0, ${portraitParallax}px, 0)` }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Rim Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/40 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                {/* Image */}
                <img
                  src={personalInfo.portrait}
                  alt={personalInfo.name}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setPortraitLoaded(true)}
                  onError={() => setPortraitError(true)}
                  className={`w-full h-[600px] object-cover transition-opacity duration-500 ${
                    portraitLoaded && !portraitError ? "opacity-100" : "opacity-0"
                  }`}
                />

                {!portraitLoaded && !portraitError && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur">
                    <Skeleton className="w-20 h-20 rounded-full bg-white/10" />
                    <span className="text-xs uppercase tracking-wide text-white/70">
                      {hero.loadingPortrait}
                    </span>
                  </div>
                )}

                {portraitError && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/60 text-white/70">
                    <span className="text-sm font-semibold">
                      {hero.portraitUnavailableTitle}
                    </span>
                    <span className="text-xs">
                      {hero.portraitUnavailableSubtitle}
                    </span>
                  </div>
                )}

                {/* Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                    <p className="text-white font-medium">
                      {hero.locationPrefix} {personalInfo.location}
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
            {hero.scrollText}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
