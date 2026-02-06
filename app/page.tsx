'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { EducationSection } from '@/components/education-section'
import { AchievementSection } from '@/components/achievements-section'
import { ProjectSection } from '@/components/project-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import { ExperienceSection } from '@/components/experience-section'
import { ResearchSection } from '@/components/research-section'
import { ResumeSection } from '@/components/resume-section'
import SkillsSection from '@/components/skills_section'
import { GallerySection } from '@/components/galary_section'

import {
  profileData,
  aboutData,
  education,
  contactData,
  achievements,
  projects,
} from '@/lib/portfolio-data'
import { Footer } from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const navRef = useRef<HTMLDivElement>(null)

  const sections = [
    'about', 
    'education', 
    'achievements', 
    'skills', 
    'projects', 
    'experience', 
    'research', 
    'resume', 
    'contact'
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = 200
      navRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12 transition-colors duration-300">
      {/* Floating Theme Toggle */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Left Sidebar */}
          <ProfileSidebar data={profileData} />

          {/* Main Content Area */}
          <main className="flex-1 bg-card rounded-2xl border border-border overflow-hidden min-w-0 shadow-sm">
            
            {/* Sticky/Scrollable Navigation */}
            <div className="relative flex items-center border-b border-border group bg-card">
              {/* Left Arrow */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 z-20 h-full px-2 bg-linear-to-r from-card via-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center text-muted-foreground hover:text-accent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <nav 
                ref={navRef}
                className="flex items-center gap-2 p-3 sm:p-4 md:p-6 overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x"
              >
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all shrink-0 whitespace-nowrap ${
                      activeSection === section
                        ? 'text-accent bg-accent/10 shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </nav>

              {/* Right Arrow */}
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 z-20 h-full px-2 bg-linear-to-l from-card via-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center text-muted-foreground hover:text-accent"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dynamic Content Rendering */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'education' && <EducationSection data={education} />}
              {activeSection === 'achievements' && <AchievementSection data={achievements} />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'projects' && <ProjectSection data={projects} />}
              {activeSection === 'experience' && <ExperienceSection />}
              {activeSection === 'research' && <ResearchSection />}
              {activeSection === 'resume' && <ResumeSection />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>

      {/* Footer / Extra Sections */}
      <div className="mt-12">
        <GallerySection />
      </div>
      <Footer/>
    </div>
  )
}