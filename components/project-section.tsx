'use client'

import { projects } from '@/lib/portfolio-data';
import { Github, ExternalLink, Code2, Calendar } from 'lucide-react';

export function ProjectSection({ data = projects }) {
  return (
    <div className="space-y-8 py-4">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-2" />
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
        
        {data.map((project, index) => (
          <div key={index} className="relative pl-12 group">
            
            {/* Glow Circle (Themed Icon) */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-accent shadow-sm transition-all duration-300 z-10 group-hover:bg-accent/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--accent),0.3)] group-hover:shadow-accent">
              <Code2 className="w-5 h-5" />
            </div>

            {/* Content Area */}
            <div className="transition-all duration-300">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Action Links */}
                    <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-accent transition-colors p-1"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <time className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.period}
                </time>
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                {project.description}
              </p>

              {/* Technologies Tags - Restored to Boxed Style */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 bg-secondary border border-border rounded-lg text-muted-foreground group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
                  >
                    {tech}
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