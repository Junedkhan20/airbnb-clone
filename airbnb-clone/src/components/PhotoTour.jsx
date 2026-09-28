import { X, ChevronDown } from 'lucide-react'

export default function PhotoTour({ images, onClose, onImageClick }) {
  return (
    <div className="fixed inset-0 z-[60] bg-white overflow-auto">
      <div className="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <button onClick={onClose} className="flex items-center gap-2 font-semibold hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors text-sm">
          <X className="w-4 h-4" /> Close
        </button>
        <h2 className="font-semibold text-sm">All photos</h2>
        <div className="w-20" />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Main large */}
        <div className="md:row-span-2 md:col-span-1 overflow-hidden rounded-xl cursor-pointer" onClick={() => onImageClick(0)}>
          <img src={images[0]} alt="Property" className="w-full h-[400px] md:h-full object-cover hover:scale-[1.02] transition-transform duration-300" />
        </div>

        {images.slice(1, 5).map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl cursor-pointer hover:brightness-95 transition-all" onClick={() => onImageClick(idx + 1)}>
            <img src={img} alt={`Property ${idx + 2}`} className="w-full h-[240px] md:h-[270px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
