# 🎬 Movie App

A modern React application to browse, search, and save your favourite movies. Inspired by Netflix-style UI with smooth animations, interactive movie cards, and persistent favourites using `localStorage`.

---

## 📌 Features

- **Browse Popular Movies:** Fetches and displays popular movies from the API.  
- **Search Functionality:** Search movies by name.  
- **Favourites:** Add/remove movies to favourites. Favourites are saved in `localStorage` for persistence.  
- **Interactive Movie Cards:** Hover animations, poster zoom, and clickable favourite hearts.  
- **Responsive Design:** Works on desktop and mobile devices.  

---

## ⚡ Tech Stack

- **React 18+** – Frontend UI library  
- **React Router DOM** – Client-side routing  
- **CSS3 / Flexbox / Grid** – Layout and styling  
- **LocalStorage** – Persisting favourites  
- **Vite** – Development and build tool  

---

## 📁 Project Structure


src/
├── components/
│ ├── MovieCard.jsx
│ └── NavBar.jsx
├── contexts/
│ └── MovieContext.jsx
├── pages/
│ ├── Home.jsx
│ └── Favourites.jsx
├── services/
│ └── api.js
├── css/
│ ├── App.css
│ ├── Home.css
│ ├── MovieCard.css
│ └── Favourites.css
└── App.jsx
└── main.jsx


---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/pra-neupane01/movie-app.git
cd movie-app

Install dependencies:

npm install

Run the development server:

npm run dev

Open the app in your browser (default: http://localhost:5173).

⚡ Usage

Browse popular movies on the home page.

Use the search bar to find specific movies.

Click the ❤️ button on a movie card to add/remove it from favourites.

Navigate to the Favourites page to view all saved movies.

🔧 API

You need an API key for movie data (e.g., The Movie Database API
)

Configure API endpoints in src/services/api.js.

📱 Screenshots

Home Page

Favourites Page

Movie Card Hover

💡 Improvements

Add user ratings and reviews

Integrate pagination for large datasets

Add loading skeletons for better UX


