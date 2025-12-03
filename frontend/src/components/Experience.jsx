import React from 'react';
import { Calendar, Building2 } from 'lucide-react';
import { experiences } from '../data/mockData';
import { Card } from './ui/card';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Building innovative digital solutions across multiple industries
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-orange-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Role & Company */}
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-white/60 text-lg">{exp.company}</p>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mt-4">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/60">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Index Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                {String(index + 1).padStart(2, '0')}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
