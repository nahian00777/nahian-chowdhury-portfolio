'use client'

import { useState } from 'react'
import { FileText, Download, Maximize2, ExternalLink } from 'lucide-react'

export function ResumeSection() {
  const [activeDoc, setActiveDoc] = useState<'resume' | 'cv'>('resume')

  const docs = {
    resume: {
      label: 'Resume',
      file: '/Nahian_Chowdhury_Resume.pdf',
      downloadName: 'Nahian_Chowdhury_Resume.pdf',
      description: 'Concise one-page summary of qualifications and experience',
    },
    cv: {
      label: 'Full CV',
      file: '/Nahian_Chowdhury_CV.pdf',
      downloadName: 'Nahian_Chowdhury_CV.pdf',
      description: 'Detailed academic and research background',
    },
  }

  const current = docs[activeDoc]

  const handleFullscreen = () => {
    window.open(current.file, '_blank')
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nahian Chowdhury</h2>
          <div className="w-10 h-1 bg-accent rounded-full mt-2" />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleFullscreen}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-secondary border border-border text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-all"
            title="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Fullscreen</span>
          </button>

          <a
            href={current.file}
            download={current.downloadName}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-all flex-1 md:flex-none"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        {(Object.keys(docs) as Array<'resume' | 'cv'>).map((key) => (
          <button
            key={key}
            onClick={() => setActiveDoc(key)}
            className={`flex-1 flex flex-col items-start px-5 py-4 rounded-xl border transition-all text-left ${
              activeDoc === key
                ? 'border-accent bg-accent/10 text-foreground'
                : 'border-border bg-secondary text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            <span className={`text-sm font-bold mb-0.5 ${activeDoc === key ? 'text-accent' : ''}`}>
              {docs[key].label}
            </span>
            <span className="text-xs">{docs[key].description}</span>
          </button>
        ))}
      </div>

      {/* PDF Preview */}
      <div className="group relative w-full h-150 md:h-225 rounded-2xl overflow-hidden border border-border bg-secondary/30 shadow-inner">
        <iframe
          key={current.file}
          src={`${current.file}#view=FitH&toolbar=0`}
          title={`${current.label} Preview`}
          className="w-full h-full border-none"
        />

        {/* Desktop zoom hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-full text-xs font-medium text-muted-foreground shadow-xl">
            Use Ctrl + Scroll to Zoom inside the preview
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="absolute inset-0 flex md:hidden flex-col items-center justify-center bg-secondary/95 p-8 text-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <h4 className="text-lg font-bold text-foreground mb-2">{current.label}</h4>
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