'use client'

import { profileData } from '@/lib/portfolio-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12 py-10 relative overflow-hidden">
      {/* Optional: Subgrid background effect like in your image */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }} 
      />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* Main Copyright Text */}
          <p className="text-sm md:text-base text-muted-foreground/80 font-medium tracking-wide text-center">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}