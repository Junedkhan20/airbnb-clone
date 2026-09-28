import { Star, ShieldCheck } from 'lucide-react'

function VerifiedBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 absolute -bottom-0.5 -right-0.5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#fff" />
      <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z" fill="#FF385C" />
      <path d="M9.5 17.2l-4.7-4.7 1.4-1.4 3.3 3.3 7.3-7.3 1.4 1.4-8.7 8.7z" fill="#fff" />
    </svg>
  )
}

function LocationPinSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 text-gray-700 flex-shrink-0">
      <path d="M16 2a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18A10 10 0 0 0 16 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor" />
    </svg>
  )
}

function GraduationCapSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 text-gray-700 flex-shrink-0">
      <path d="M16 2L1 10l15 8 13-7.11V22h2V10L16 2zM5 17.33V24l11 6 11-6v-6.67l-11 6-11-6z" fill="currentColor" />
    </svg>
  )
}

function ShieldSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10 text-rose-500 flex-shrink-0">
      <path d="M24 4L6 12v12c0 10.5 7.7 20.3 18 22.7C34.3 44.3 42 34.5 42 24V12L24 4zm-4 30l-8-8 2.8-2.8L20 28.4l13.2-13.2L36 18 20 34z" fill="currentColor" />
    </svg>
  )
}

export default function HostSection({ host }) {
  const coHosts = host.coHosts || []

  return (
    <div className="py-12">
      {/* Section heading */}
      <h2 className="text-[22px] font-semibold mb-8">Meet your host</h2>

      {/* Host card */}
      <div className="bg-gray-50 rounded-3xl p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left — Host avatar card */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md px-10 py-8 min-w-[240px]">
            {/* Avatar with verified badge */}
            <div className="relative mb-3">
              <img
                src={host.image}
                alt={host.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <VerifiedBadge />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{host.name}</h3>
            <p className="text-sm text-gray-500">Host</p>
          </div>

          {/* Right — Stats and info */}
          <div className="flex-1">
            {/* Stats row */}
            <div className="flex items-center gap-0 mb-8">
              <div className="pr-6">
                <div className="text-2xl font-bold">{host.reviewCount.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Reviews</div>
              </div>
              <div className="border-l border-gray-300 px-6">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">{host.rating}</span>
                  <Star className="w-4 h-4 fill-black" />
                </div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <div className="text-2xl font-bold">{host.yearsHosting || 2}</div>
                <div className="text-xs text-gray-500">Years hosting</div>
              </div>
            </div>

            {/* About info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LocationPinSvg />
                <span className="text-sm text-gray-700">{host.about?.bornIn || 'Born in the 80s'}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCapSvg />
                <span className="text-sm text-gray-700">Where I went to school: {host.about?.school || 'NICMAR GOA'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
