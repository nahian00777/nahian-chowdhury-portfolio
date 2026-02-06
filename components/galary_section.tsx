'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { galleryItems } from '@/lib/portfolio-data'

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const items = [...galleryItems, ...galleryItems]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId: number
    let isHovering = false

    const autoScroll = () => {
      if (!isHovering) {
        container.scrollLeft += 0.5
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(autoScroll)
    }

    rafId = requestAnimationFrame(autoScroll)

    const onMouseEnter = () => (isHovering = true)
    const onMouseLeave = () => (isHovering = false)

    container.addEventListener('mouseenter', onMouseEnter)
    container.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <section className="mt-12 border-t border-border pt-10 pb-10">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 px-4">
        Moments & Events
      </h3>

      <div className="relative">
        {/* gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

        {/* scroll container */}
        <div
          ref={containerRef}
          className="
            flex gap-4 px-4 py-4
            overflow-x-auto
            scrollbar-hide
            cursor-grab active:cursor-grabbing
            select-none
          "
          onWheel={(e) => {
            e.preventDefault()
            e.currentTarget.scrollLeft += e.deltaY
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedItem(item)}
              className="
                relative shrink-0
                w-72 h-48 md:w-96 md:h-64
                rounded-xl md:rounded-2xl
                overflow-hidden
                border border-border
                bg-secondary
                shadow-md
                transition-all
                hover:border-primary/50
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={index < 4}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-5 flex items-end">
                <p className="text-white text-sm font-bold truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* preview modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card border border-border max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain bg-black/20"
              />
            </div>

            <div className="p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                {selectedItem.title}
              </h3>

              <p className="text-muted-foreground italic">
                "{selectedItem.description}"
              </p>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-8 w-full py-3 bg-foreground text-background font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
