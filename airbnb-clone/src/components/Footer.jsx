import { Globe, ChevronDown } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Safety</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Discover</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Travel</a></li>
              <li><a href="#" className="hover:underline">Experiences</a></li>
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">How to host</a></li>
              <li><a href="#" className="hover:underline">Safety</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            <span>English (United States)</span>
            <ChevronDown className="w-3 h-3" />
            <span className="ml-4">$ USD</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}