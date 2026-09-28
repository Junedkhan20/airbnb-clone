import { Star, ShieldCheck, ChevronDown } from 'lucide-react'

export default function BookingWidget({ pricing, rating, reviewCount }) {
  return (
    <div className="sticky top-24 border border-gray-200 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6 bg-white">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-2xl font-semibold">₹{pricing.perNight}</span>
          <span className="text-gray-900">{" "}for 5 night</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-xl overflow-hidden mb-4">
        <div className="flex border-b border-gray-300">
          <div className="flex-1 p-3 border-r border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
            <label className="text-[10px] font-bold uppercase text-gray-800">Check-in</label>
            <div className="text-sm">Add date</div>
          </div>
          <div className="flex-1 p-3 hover:bg-gray-50 transition-colors cursor-pointer">
            <label className="text-[10px] font-bold uppercase text-gray-800">Checkout</label>
            <div className="text-sm">Add date</div>
          </div>
        </div>
        <div className="p-3 border-b border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
          <label className="text-[10px] font-bold uppercase text-gray-800">Guests</label>
          <div className="text-sm">1 guest</div>
        </div>
      </div>

      <div className="mt-4 p-2 bg-gray-50 rounded-xl text-xs text-gray-500 leading-relaxed flex items-center gap-2 justify-center">
        <span className="text-center text-sm text-gray-500 mb-4">Free cancellation before</span><span className='text-center text-sm font-semibold text-gray-900 mb-4'>17 October</span>
      </div>

      <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl py-3.5 mb-3 hover:brightness-110 transition-all shadow-[0_4px_12px_rgba(255,56,92,0.3)] active:scale-[0.99]">
        Reserve
      </button>

      <div className="text-center text-sm text-gray-500 mb-4">You won’t be charged yet</div>
    </div>
  )
}
