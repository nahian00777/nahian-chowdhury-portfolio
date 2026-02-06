'use client'

import { Code2, Cpu, Globe, Database, PenTool, Layout } from "lucide-react";
import { skills } from '@/lib/portfolio-data'

export default function SkillsSection() {
  // Mapping icons to categories (Optional: you can add an 'icon' field to your data instead)
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Layout className="w-5 h-5" />;
      case 'backend': return <Database className="w-5 h-5" />;
      case 'languages': return <Code2 className="w-5 h-5" />;
      case 'tools': return <PenTool className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technical Skills</h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-2" />
      </div>

      {/* Timeline/Grid Container */}
      <div className="relative space-y-10 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        
        {skills.map((category, idx) => (
          <div key={idx} className="relative pl-12 group">
            
            {/* Category Icon Squircle */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-secondary text-accent shadow-sm group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 z-10">
              {getIcon(category.category)}
            </div>

            {/* Content Area */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="group/item flex items-center gap-2 px-3 py-2 bg-secondary/50 border border-border rounded-xl hover:border-accent/40 hover:bg-secondary transition-all duration-200"
                  >
                    {/* Tiny dot indicator */}
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors" />
                    <span className="text-sm font-semibold text-muted-foreground group-hover/item:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}