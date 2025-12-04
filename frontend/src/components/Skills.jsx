import React from "react";
import * as LucideIcons from "lucide-react";
import { useLocalizedContent } from "../context/LanguageContext";

const Skills = () => {
  const { skills, skillsSection } = useLocalizedContent();
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName] || LucideIcons.Code;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            {skillsSection.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {skillsSection.heading}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {skillsSection.description}
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skillsSection.categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.id
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <h3 className="text-xl font-semibold text-white/80">
                  {category.name}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                          <div className="text-blue-300 group-hover:text-blue-200 transition-colors">
                            {getIcon(skill.icon)}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
