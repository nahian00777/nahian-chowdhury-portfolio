"use client";

import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <div className="space-y-8 py-4">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Experience
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-2" />
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12 group">
            
            {/* Timeline Icon with Glow Effect */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-accent shadow-sm transition-all duration-300 z-10 group-hover:bg-accent/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--accent),0.3)] group-hover:shadow-accent">
              <Briefcase className="w-5 h-5" />
            </div>

            {/* Content Area - Borderless */}
            <div className="transition-all duration-300">
              
              {/* Header: Company, Role, and Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl md:text-2xl font-bold text-foreground hover:text-accent flex items-center gap-2 transition-colors duration-300"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <div className="text-xl md:text-2xl font-bold text-foreground">
                        {exp.company}
                      </div>
                    )}
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-accent/90 mt-0.5 group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <time className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest h-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </time>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                {exp.description}
              </p>

              {/* Boxed Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 bg-secondary border border-border rounded-lg text-muted-foreground group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}