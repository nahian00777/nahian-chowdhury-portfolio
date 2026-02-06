import { achievements } from '@/lib/portfolio-data';
import { Trophy, ExternalLink } from 'lucide-react';

export function AchievementSection({ data = achievements }) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Achievements
          </h2>
        </div>
        <div className="w-10 h-1 bg-accent rounded-full mb-8" />
      </div>

      <div className="relative">
        {data.map((item, index) => (
          /* Added 'group' class here to trigger child hover states */
          <div 
            key={index} 
            className="group relative pl-8 pb-10 border-l-2 border-border last:border-0 last:pb-0"
          >
            {/* Timeline Connector Dot 
                Added 'transition-all' and 'group-hover' classes for the glow effect
            */}
            <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.6)] group-hover:shadow-accent" />

            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              {/* Left Side: Title, Rank, and Details */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-foreground leading-tight  transition-colors duration-300">
                    {item.title}
                  </h4>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
                    </a>
                  )}
                </div>
                
                <p className="text-accent font-semibold text-sm">
                  {item.rank}
                </p>
                
                {item.details && (
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 italic leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>

              {/* Right Side: Location and Date */}
              <div className="text-left md:text-right flex flex-col justify-start md:min-w-[150px]">
                <p className="text-sm font-medium text-foreground/80">{item.location}</p>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}