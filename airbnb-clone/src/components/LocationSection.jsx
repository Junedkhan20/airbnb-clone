import '../App.css';

export default function LocationSection({ location }) {
  return (
    <section className="py-14 px-0 border-t-0.5 border-gray-300" id="location">
      <h2 className="text-2xl leading-6 font-semibold mb-6">Where you'll be</h2>
      <div className="text-md mb-6">Candolim, Goa, India</div>

      {/* Map with controls */}
      <div className="relative rounded-[12px] overflow-hidden h-[480px] bg-gray-400">
        <div className='location'></div>

        <button className="absolute left-3 top-3 w-[40px] h-[40px] rounded-full bg-white border-none shadow-md flex items-center justify-center" aria-label="Search">
          <span style={{ width: 16, height: 16 }}>
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
              style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, overflow: 'visible' }}>
              <circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 21l7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
 
        <div className="absolute right-3 top-3 flex flex-col gap-4">
          <button aria-label="Zoom in" className='button'>
            <span className="w-[16px] h-[16px]">
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, overflow: 'visible' }}>
                <path d="M16 6v20M6 16h20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
          <button aria-label="Zoom out" className='button'>
            <span className="w-[16px] h-[16px]">
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, overflow: 'visible' }}>
                <path d="M6 16h20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        <div className="Dhbqq">
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
            style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, overflow: 'visible' }}>
            <path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className="text-sm text-gray-900 mt-3">Exact location will be provided after booking.</div>

      <div className="text-xl font-semibold text-gray-900 mt-[40px] mb-[12px] my-0">Neighbourhood highlights</div>
      <div className="text-md leading-1 mt-6 mb-3">Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</div>

      <button className="showMore" style={{ marginTop: 18 }}>
        Show more
        <span className="w-[14px] h-[14px]">
          <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"
            style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
          </svg>
        </span>
      </button>
    </section>
  )
}