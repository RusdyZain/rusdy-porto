import React from "react";
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { useLocalizedContent } from "../context/LanguageContext";
import { useParallax } from "../hooks/useParallax";
import SectionParallax from "./SectionParallax";

const Summary = () => {
  const { education, languages, summary } = useLocalizedContent();
  const contentShift = useParallax(0.015);

  return (
    <section id="summary" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <SectionParallax variant="blue" />

      <div
        className="relative z-10 container mx-auto px-6 lg:px-12 transition-transform duration-500"
        style={{ transform: `translate3d(0, ${contentShift}px, 0)` }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            {summary.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {summary.heading}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <GraduationCap className="w-6 h-6 text-blue-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {summary.educationTitle}
                </h3>
                <p className="text-white/50 text-sm">{education.period}</p>
              </div>
            </div>

            {/* Degree Info */}
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                {education.degree}
              </h4>
              <p className="text-white/60">{education.university}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <TrendingUp className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 font-semibold text-sm">
                  {summary.stats.gpaLabel}: {education.gpa}
                </span>
              </div>
            </div>

            {/* Roles */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Users className="w-4 h-4" />
                <span className="font-medium text-sm">
                  {summary.teachingAssistantLabel}
                </span>
              </div>
              <ul className="space-y-2 ml-6">
                {education.roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-white/50 text-sm"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/70">
                <Award className="w-4 h-4" />
                <span className="font-medium text-sm">
                  {summary.awardsLabel}
                </span>
              </div>
              <ul className="space-y-2 ml-6">
                {education.awards.map((award, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-white/50 text-sm"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Languages Card */}
          <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {summary.languagesCardTitle}
                </h3>
                <p className="text-white/50 text-sm">
                  {summary.languagesCardDescription}
                </p>
              </div>
            </div>

            {/* Language Bars */}
            <div className="space-y-6 pt-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-white/50 text-sm">
                      {lang.proficiency}
                    </span>
                  </div>
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {languages.length}
                </div>
                <div className="text-white/50 text-xs">
                  {summary.stats.languagesLabel}
                </div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {summary.stats.projectsValue}
                </div>
                <div className="text-white/50 text-xs">
                  {summary.stats.projectsLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {education.gpa.split("/")[0]}
                </div>
                <div className="text-white/50 text-xs">
                  {summary.stats.gpaLabel}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Summary;
