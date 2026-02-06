'use client'

import { BookOpen, Briefcase } from 'lucide-react'
import { education } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof education
}

export function EducationSection({ data = education }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10 max-w-4xl py-4">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-2 mb-8" />
      </div>

      <div className="space-y-0">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="group relative pl-8 pb-12 border-l-2 border-border last:border-0 last:pb-0"
          >
            {/* Timeline Connector Dot 
                Added group-hover:scale-125 and glow shadow for consistency
            */}
            <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.6)] group-hover:shadow-accent z-10" />

            {/* Header: Institution and Period */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <h4 className="text-lg md:text-xl font-bold text-foreground tracking-tight transition-colors duration-300">
                {item.institution}
              </h4>
              <span className="text-sm text-muted-foreground font-medium md:mt-1">{item.period}</span>
            </div>

            {/* Degree and GPA */}
            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <p className="text-foreground/80 text-base font-medium">{item.degree}</p>
              <p className="text-accent font-bold">{item.grade}</p>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                {item.description}
              </p>
            )}

            {/* Notable Courses Grid */}
            {item.courses && item.courses.length > 0 && (
              <div className="mt-4 p-4 rounded-xl bg-secondary/30 border border-border/50 group-hover:border-accent/20 transition-colors">
                <p className="text-foreground/90 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Notable Courses
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {item.courses.map((course, i) => (
                    <div key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent/40" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}