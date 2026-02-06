'use client'

import { FileText, Download, Maximize2, ExternalLink } from 'lucide-react'

export function ResumeSection() {
  const resumeUrl = '/Nahian_Chowdhury_Resume.pdf'

  const handleFullscreen = () => {
    window.open(resumeUrl, '_blank')
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nahian Chowdhury Resume</h2>
          <div className="w-10 h-1 bg-accent rounded-full mt-2" />
        </div>
        
        <div className="flex items-center gap-3">
          {/* Fullscreen Toggle */}
          <button
            onClick={handleFullscreen}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-secondary border border-border text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-all"
            title="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Fullscreen</span>
          </button>

          {/* Primary Download Button */}
          <a
            href={resumeUrl}
            download="Nahian_Chowdhury_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 hover:shadow-lg hover:shadow-accent/20 transition-all flex-1 md:flex-none"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Modern PDF Container */}
      <div className="group relative w-full h-150 md:h-225 rounded-2xl overflow-hidden border border-border bg-secondary/30 shadow-inner">
        
        {/* The PDF Preview */}
        <iframe
          src={`${resumeUrl}#view=FitH&toolbar=0`}
          title="Resume Preview"
          className="w-full h-full border-none"
        />

        {/* Desktop Overlay: Zoom Prompt */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-full text-xs font-medium text-muted-foreground shadow-xl">
             Use Ctrl + Scroll to Zoom inside the preview
          </div>
        </div>

        {/* Mobile Alternative (Since iframes are tiny on phones) */}
        <div className="absolute inset-0 flex md:hidden flex-col items-center justify-center bg-secondary/95 p-8 text-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <h4 className="text-lg font-bold text-foreground mb-2">Resume Preview</h4>
          <p className="text-sm text-muted-foreground mb-6">
            For the best reading experience, please open the document directly.
          </p>
          <button
            onClick={handleFullscreen}
            className="flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Open Document <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}