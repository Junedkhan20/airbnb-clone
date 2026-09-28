import { Wifi, ChefHat, Wine, Shirt, ThermometerSun, Droplets, Umbrella, Car, Lock, ShieldCheck, Tv, Snowflake, Wind } from 'lucide-react'
import { listingData } from '../data/listing'

function Speaker() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-gray-700 flex-shrink-0">
      <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const itemIcons = {
  'Hairdryer': Wind,
  'TV': Tv,
  'Sound system': Speaker,
  'Air conditioning': Snowflake,
  'Ceiling fan': Wind,
  'Smoke alarm': ShieldCheck,
  'Carbon monoxide alarm': ShieldCheck,
  'Fire extinguisher': ShieldCheck,
  'First aid kit': ShieldCheck,
  'Essentials': ShieldCheck,
  'Wifi': Wifi,
  'Kitchen': ChefHat,
  'Fridge': ChefHat,
  'Microwave': ThermometerSun,
  'Freezer': ThermometerSun,
  'Wine glasses': Wine,
  'Dining table': ChefHat,
  'Outdoor dining area': Umbrella,
  'Free parking on premises': Car,
  'Pool': Droplets,
  'Lift': Car,
  'Long-term stays allowed': Lock,
  'Host greets you': ShieldCheck,
  'Exterior security cameras on property': ShieldCheck,
  'Washing machine': Shirt,
  'Tumble dryer': Shirt,
  'Heating': ThermometerSun
}

export default function AmenitiesSection({ amenities, showAll, onToggle }) {
  const dataAmenities = amenities || listingData?.amenities || []
  const visibleAmenities = showAll ? dataAmenities : dataAmenities.slice(0, 6)

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
      <div className="space-y-6">
        {visibleAmenities.map((group, gi) => (
          <div key={gi}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">{group.group}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {group.items.map((item, ii) => {
                const Icon = itemIcons[item] || ShieldCheck
                return (
                  <div key={ii} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <Icon className="w-5 h-5 text-gray-700 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {dataAmenities.length > 6 && (
        <button
          onClick={onToggle}
          className="mt-6 text-gray-900 font-semibold underline flex items-center gap-1 hover:text-gray-600 transition-colors"
        >
          {showAll ? 'Hide all amenities' : 'Show all amenities'}
          <svg viewBox="0 0 18 18" className="w-3 h-3 fill-current">
            <path d="m4.29 5.04 4.95 4.95 4.95-4.95L15.54 6.4 9.24 12.7 2.94 6.4z" />
          </svg>
        </button>
      )}
    </div>
  )
}