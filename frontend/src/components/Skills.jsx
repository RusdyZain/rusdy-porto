import React from "react";
import * as LucideIcons from "lucide-react";
import { skills } from "../data/mockData";

const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName] || LucideIcons.Code;
    return <Icon className="w-6 h-6" />;
  };

  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "backend",
      name: "Backend",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "mobile",
      name: "Mobile",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "database",
      name: "Database",
      color: "from-orange-500/20 to-amber-500/20",
    },
    { id: "devops", name: "DevOps", color: "from-red-500/20 to-rose-500/20" },
    {
      id: "design",
      name: "Design",
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Modern tech stack for building scalable applications
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category) => {
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
                      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/30 transition-colors">
                          <div className="text-orange-400 group-hover:text-orange-300 transition-colors">
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
