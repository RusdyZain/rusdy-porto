import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/mockData";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real-world applications across healthtech, mobility, agriculture,
            and mobile platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="px-3 py-1 rounded-full text-xs font-medium uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-orange-500/20 hover:border-orange-500/50 text-white/70 hover:text-white transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Live</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-orange-500/20 hover:border-orange-500/50 text-white/70 hover:text-white transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
