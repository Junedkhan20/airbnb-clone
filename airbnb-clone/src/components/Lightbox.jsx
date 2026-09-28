import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate('next')
      if (e.key === 'ArrowLeft') onNavigate('prev')
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNavigate])

  return (
    <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 left-6 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={() => onNavigate('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-[90%] max-h-[85vh] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Property photo ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          loading="eager"
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
