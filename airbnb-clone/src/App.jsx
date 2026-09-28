import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroGallery from './components/HeroGallery'
import ListingDetails from './components/ListingDetails'
import BookingWidget from './components/BookingWidget'
import ReviewsSection from './components/ReviewsSection'
import AmenitiesSection from './components/AmenitiesSection'
import HostSection from './components/HostSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import PhotoTour from './components/PhotoTour'
import Lightbox from './components/Lightbox'
import { listingData } from './data/listing'
import CalenderSection from './components/CalenderSection'

function StickyNav({ visible }) {
  return (
    <div id="sticky-nav" aria-hidden={visible ? "false" : "true"} role="navigation" aria-label="Listing sections"
         style={{
           position: 'fixed',
           top: 0, left: 0, right: 0,
           zIndex: 45,
           background: '#fff',
           borderBottom: '1px solid #ddd',
           transform: visible ? 'translateY(0)' : 'translateY(-100%)',
           opacity: visible ? 1 : 0,
           pointerEvents: visible ? 'auto' : 'none',
           transition: 'transform .25s ease, opacity .25s ease'
         }}>
      <div className="max-w-[1420px] mx-auto px-6 md:px-10 xl:px-20 flex items-center justify-between h-[66px]">
        <nav className="flex items-center gap-6">
          <a href="#photos" data-target="photos" className="text-sm font-medium text-gray-900 hover:text-black hover:underline">Photos</a>
          <a href="#amenities" data-target="amenities" className="text-sm font-medium text-gray-900 hover:text-black hover:underline">Amenities</a>
          <a href="#reviews" data-target="reviews" className="text-sm font-medium text-gray-900 hover:text-black hover:underline">Reviews</a>
          <a href="#location" data-target="location" className="text-sm font-medium text-gray-900 hover:text-black hover:underline">Location</a>
        </nav>
        <div className="flex items-center gap-5">
          <div>
            <div className="text-right leading-tight">
              <span className="text-base font-bold text-gray-900">₹28,499</span>
              <span className="text-xs text-gray-900">{" "}for 5 nights</span>
            </div>
            <div className="text-end leading-tight">
              <span className="text-sm font-semibold text-gray-900">4.95</span>
              <span className="text-xs text-gray-900">{" "}19 reviews</span>
            </div>
          </div>
          <button type="button" className="bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-105 transition shadow-md">Reserve</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showAllAmenities, setShowAllAmenities] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('hero-section')
      if (!el) return
      const rect = el.getBoundingClientRect()
      setScrolledPastHero(rect.bottom < 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openPhotoTour = () => setShowPhotoTour(true)
  const closePhotoTour = () => setShowPhotoTour(false)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const navigateLightbox = (direction) => {
    setLightboxIndex(prev => {
      const total = listingData.images.length
      if (direction === 'next') return (prev + 1) % total
      return (prev - 1 + total) % total
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <StickyNav visible={scrolledPastHero} />

      <Header />

      <main className="max-w-[1420px] mx-auto px-6 md:px-10 xl:px-20">
        <div id="photos" className="scroll-mt-24">
          <HeroGallery
            images={listingData.images}
            onShowAllPhotos={openPhotoTour}
            onImageClick={openLightbox}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pb-12 border-b border-gray-200">
          <div className="flex-1 min-w-0">
            <div id="listing-details">
              <ListingDetails data={listingData} />
            </div>

            <div className="border-b border-gray-200" />

            <div id="amenities" className="scroll-mt-24">
              <AmenitiesSection
                amenities={listingData.amenities}
                showAll={showAllAmenities}
                onToggle={() => setShowAllAmenities(!showAllAmenities)}
              />
            </div>

            <div className="border-b border-gray-200" />
            
            <div id='calender'>
              <CalenderSection />
            </div>
          </div>

          <div className="lg:w-[372px] flex-shrink-0">
            <BookingWidget pricing={listingData.pricing} rating={listingData.rating} reviewCount={listingData.reviewCount} />
          </div>
        </div>

        <div id="reviews" className="scroll-mt-24">
          <ReviewsSection
            reviews={listingData.reviews}
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
            categoryRatings={listingData.categoryRatings}
            ratingDistribution={listingData.ratingDistribution}
          />
        </div>

        <div className="border-b border-gray-200" />

        <div id="location" className="scroll-mt-24">
          <LocationSection location={listingData.location} />
        </div>

    

        <div className="border-b border-gray-200" />

        <HostSection host={listingData.host} />
      </main>

      <Footer />

      {showPhotoTour && (
        <PhotoTour
          images={listingData.images}
          onClose={closePhotoTour}
          onImageClick={openLightbox}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={listingData.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  )
}

export default App
