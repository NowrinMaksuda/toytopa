#  ToyTopia

A vibrant and playful online marketplace for kids' toys, encouraging families to discover and support local toy sellers.

##  Live URL

[https://toytopia.netlify.app](https://toytopia.netlify.app)

##  Purpose

ToyTopia connects families with local toy sellers. Users can browse toys, view detailed information, and interact with the platform after logging in. The platform emphasizes community, safety, and fun.

## Key Features

- Firebase Authentication (Email/Password + Google)
- Browse and search toys by name and category
-  Protected Toy Details page with "Try Now" form
-  My Profile page — view and edit name & photo
- Forgot Password with Gmail redirect
- Swiper.js hero slider
- AOS scroll animations
- Fully responsive (mobile, tablet, desktop)
- Environment variables for Firebase config
- Custom 404 page
- Blogs page (extra private route)
- Dynamic page titles per route

## NPM Packages Used

| Package | Purpose |
|---|---|
| `react-router-dom` | Client-side routing |
| `firebase` | Authentication |
| `react-hot-toast` | Toast notifications |
| `sweetalert2` | Alert dialogs |
| `swiper` | Hero image slider |
| `aos` | Scroll animations |
| `react-icons` | Icon library |
| `tailwindcss` | Utility-first CSS |
| `daisyui` | Tailwind component library |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/toytopia.git
cd toytopia

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Firebase config values

# Start development server
npm run dev
```

##  Environment Variables

Create a `.env.local` file with your Firebase config:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Build for Production

```bash
npm run build
```
