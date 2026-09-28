# Airbnb Clone

A pixel-perfect Airbnb clone built with React 19 and Vite, showcasing professional travel accommodations with a comprehensive booking platform experience.

## 🎯 Overview

This project is a front-end implementation of an Airbnb-like property listing, matching the design at `https://www.airbnb.co.in/rooms/1633278091728979124`. It features responsive components, authentic UI patterns, and a clean development experience.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (bundled with Node.js)
- **Git** (for cloning the repository)

### Installation

```bash
# Clone the repository
git clone https://github.com/junedkhan20/airbnb-clone.git
cd airbnb-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Development Server

After installation, start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

The server will auto-reload when you modify files and reports any linting errors in the console.

### Build for Production

```bash
npm run build
```

This builds the application to the `dist/` folder, optimized for production deployment.

### Preview Production Build

```bash
npm run preview
```

After building, you can preview the production build locally on [http://localhost:4173](http://localhost:4173).

### Linting

```bash
npm run lint
```

Run Oxlint to check for code quality issues.

## 📖 Demo

### Live Demo

The application is deployed and available at: [https://airbnb-clone.vercel.app](https://airbnb-clone.vercel.app)

### Features Demonstrated

1. **Hero Gallery** - Full-screen image carousel with navigation arrows
2. **Property Details** - Comprehensive listing information with amenities
3. **Host Section** - Host profile with verification badges and co-hosts
4. **Reviews Section** - Star ratings, review cards, and category ratings
5. **Location Section** - Interactive map with zoom and fullscreen controls
6. **Calender Section** - Booking availability selector
7. **Booking Widget** - Price display and instant booking

## 🏗️ Project Structure

```
airbnb-clone/
├── public/                    # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/                # Property images and UI assets
│   │   ├── image1.png through image9.png
│   │   └── ui/
│   │       ├── hostimage.png
│   │       ├── left.png
│   │       ├── right.png
│   │       └── searchbarhouse.png
│   ├── components/            # React components
│   │   ├── AmenitiesSection.jsx
│   │   ├── BookingWidget.jsx
│   │   ├── CalenderSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroGallery.jsx
│   │   ├── HostSection.jsx
│   │   ├── Lightbox.jsx
│   │   ├── ListingDetails.jsx
│   │   ├── LocationSection.jsx
│   │   ├── PhotoTour.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── SearchSection.jsx
│   │   └── similarPropertiesSection.jsx
│   ├── data/
│   │   └── listing.js          # Property data
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # Global styles
│   ├── index.css               # Tailwind base styles
│   └── main.jsx                # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.8 | UI library |
| React DOM | 19.2.8 | DOM rendering |
| Vite | 8.3.0 | Build tool & dev server |
| Tailwind CSS | 4.3.3 | Styling framework |
| @tailwindcss/vite | 4.3.3 | Vite plugin for Tailwind |
| Lucide React | 1.47.0 | Icon library |
| Oxlint | 1.81.0 | Linting tool |

## 🧩 Key Components

### ReviewsSection.jsx
Displays property reviews with:
- Overall rating (4.5/5)
- Rating distribution bars (5★ to 1★)
- Category ratings with custom SVGs (Cleanliness, Accuracy, Check-in, etc.)
- Individual review cards with guest photos and feedback
- "Show all" button for expanded view

### LocationSection.jsx
Features interactive map with:
- Property location display
- Map controls (search, zoom in/out, fullscreen)
- Neighborhood highlights
- Description with "Show more" toggle

### HostSection.jsx
Shows host information including:
- Host avatar and verification badge
- Review count and rating statistics
- Years hosting
- About section with personal details
- Co-hosts grid
- Response rate and time
- Message host button

## 📊 Data Structure

```javascript
// src/data/listing.js
{
  title: "Modern apartment with sea view",
  host: "Mirashya Homes",
  rating: 4.68,
  reviewCount: 1463,
  price: "$180/night",
  location: "Candolim, Goa, India",
  amenities: [...],
  images: [...],
  ratingDistribution: [...],
  categoryRatings: [...]
}
```

## 🎨 Styling

Styling is implemented using:

- **Tailwind CSS 4** - Utility-first CSS framework with JIT compilation
- **CSS-in-JS** - Dynamic styling inline with components
- **Custom Properties** - CSS variables for theming
- **Responsive Design** - Mobile-first with breakpoints

## 🧪 Development Tips

### Component Development Pattern

Components follow this structure:
```jsx
export default function ComponentName({ props }) {
  return (
    <section className="py-14 px-0">
      <h2 className="text-2xl font-semibold mb-6">Title</h2>
      {/* Component content */}
    </section>
  )
}
```

### Adding New Components

1. Create `src/components/NewComponent.jsx`
2. Export function component
3. Import in `App.jsx`
4. Add to JSX tree
5. Test in browser

### CSS Styling

Use Tailwind classes for layout:
- Spacing: `py-{number}`, `px-{number}`, `m-{number}`, `mt-{number}`
- Typography: `text-{size}`, `font-{weight}`, `leading-{number}`
- Colors: `text-{color}`, `bg-{color}`, `border-{color}`
- Flex/Grid: `flex`, `flex-col`, `grid`, `gap-{number}`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
lsof -ti:5173 | xargs kill -9
npm run dev
```

### Build Errors
Ensure all imports are correct and dependencies are installed:
```bash
rm -rf node_modules
npm install
npm run build
```

### Hot Reload Not Working
- Check `vite.config.js` for HMR configuration
- Clear browser cache
- Ensure no file watching issues on Windows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linter: `npm run lint`
5. Commit: `git commit -m "Add amazing feature"`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration: [Airbnb](https://www.airbnb.com)
- Built with: [React 19](https://react.dev) + [Vite](https://vitejs.dev)
- Icons: [Lucide React](https://lucide.dev)
- Styling: [Tailwind CSS](https://tailwindcss.com)