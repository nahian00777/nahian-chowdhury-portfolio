'use client'

import { research } from '@/lib/portfolio-data'
import { ExternalLink, Microscope } from 'lucide-react'

interface ResearchSectionProps {
  data?: typeof research
}

export function ResearchSection({ data = research }: ResearchSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10 max-w-4xl py-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research</h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-2 mb-8" />
      </div>

      <div className="space-y-0">
        {data.map((item, index) => (
          /* Added 'group' to handle hover state for the child dot */
          <div key={index} className="group relative pl-8 pb-12 border-l-2 border-border last:border-0 last:pb-0">
            
            {/* Timeline Dot - Glow Effect Added 
                Matches your Achievement and Education sections
            */}
            <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.6)] group-hover:shadow-accent z-10" />

            {/* Title and Date */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-4">
              <h4 className="text-lg md:text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
              </h4>
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap md:mt-1">{item.period}</span>
            </div>

            {/* Workshop/Type */}
            <p className="text-foreground/80 text-base font-semibold mb-1">{item.workshop}</p>

            {/* Metadata (Authors & Keywords) */}
            <div className="space-y-1 mb-4">
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground/70 font-semibold">Co-Authors:</span> {item.authors}
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground/70 font-semibold">Keywords:</span> {item.keywords}
              </p>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 text-justify group-hover:text-foreground/80 transition-colors">
                {item.description}
              </p>
            )}

            {/* Link Button */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline decoration-2 underline-offset-4 transition-all"
              >
                View Publication <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}