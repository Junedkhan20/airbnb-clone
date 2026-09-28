import { Heart, Share2 } from 'lucide-react'

export default function HeroGallery({ images, onShowAllPhotos, onImageClick }) {
  return (
    <div id="hero-section" className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-gray-800">
            Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='block h-4 w-4 stroke-current stroke-2 fill-current'>
              <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path>
            </svg>
            Share
          </button>
          <button className="flex items-center gap-1 text-sm font-semibold underline hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
            <Heart className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[330px] md:h-[460px] cursor-pointer group">
        {/* Main Large Image */}
        <div
          className="col-span-2 row-span-2 relative overflow-hidden"
          onClick={() => onImageClick(0)}
        >
          <img
            src={images[0]}
            alt="Main property photo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
        </div>

        {/* Right Side Images */}
        {images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden"
            onClick={() => onImageClick(idx + 1)}
          >
            <img
              src={img}
              alt={`Property photo ${idx + 2}`}
              className="w-full h-full object-cover hover:brightness-90 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}

        {/* Show All Photos Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onShowAllPhotos(); }}
          className="absolute bottom-4 right-4 bg-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
            <path d="M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 0h4v4H9V9z" />
          </svg>
          Show all photos
        </button>
      </div>
    </div>
  )
}
