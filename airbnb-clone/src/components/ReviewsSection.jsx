import { Star } from 'lucide-react'
import left from '../assets/ui/left.png'
import right from '../assets/ui/right.png'

export default function ReviewsSection({ reviews, rating, reviewCount }) {
  return (
    <section id="reviews" className="py-8">
      {/* Guest Favourite Header */}
      <div className="mb-8 text-center pt-[8px] px-0 pb-[40px]">
        
          <div className="flex items-center justify-center gap-[8px]">
            {/* Left Laurel */}
            <img src={left} alt="" className='h-[110px]'/>
            <span className="text-[100px] -mt-2 font-semibold tracking-tight text-gray-900">{rating}</span>
            {/* Right Laurel */}
            <img src={right} alt="" className='h-[110px]'/>
          </div>
          <div>
            <div className="text-2xl font-semibold mt-[8px]">Guest favourite</div>
            <div className="text-md mt-[8px] mb-0 mx-auto max-w-[420px] text-gray-900">This home is a guest favourite based on ratings, reviews and reliability</div>
          </div>
        
        <button className="text-md mt-[14px] font-semibold text-gray-900 underline hover:no-underline">How reviews work</button>
      </div>

      <div className="flex items-center">

        {/* Right — Reviews */}
        <div className="grid grid-cols-2 gap-4">
          {(reviews || []).slice(0, 4).map(review => (
            <div key={review.id} className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                  {review.name?.charAt(0) || 'A'}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{review.name || 'Guest'}</div>
                  <div className="text-xs text-gray-500">{review.date || ''}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">{review.text}</p>
              <button className="text-xs font-semibold underline text-gray-900 hover:text-gray-600">Show more</button>
            </div>
          ))}

          {/* Show all reviews */}
          <button className="w-full border border-gray-900 text-gray-900 font-semibold rounded-xl py-3 hover:bg-gray-50 transition-colors">
            Show all {reviewCount || 19} reviews
          </button>
        </div>
      </div>
    </section>
  )
}
