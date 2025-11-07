# 🎬 Movie Explorer — React + TypeScript + TMDB API

<div align="center">

<img src="https://img.shields.io/badge/⚛️_React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/🔷_TypeScript-Type_Safe-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/🎨_TailwindCSS-Utility_First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/🚀_Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/🎥_TMDB_API-Movie_Database-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white" />

**A modern movie discovery platform that helps you explore, search, and find your next favorite movie.**

</div>

---

## 🌐 Live Demo

**Experience it live:**  
➡️ **[https://movie-explorer-15zmr15fj-kaquib24s-projects.vercel.app/](https://movie-explorer-15zmr15fj-kaquib24s-projects.vercel.app/)**

🎬 *Browse trending movies, view details, and discover the latest releases!*

---

## 🖼️ Preview

| Home Page | Movie Details | Movies Page |
|------------|----------------|--------------|
| ![Home](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/home.png) | ![Movie Details](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/movies-detail.png) | ![Movies](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/movies.png) |

---

## ✨ Overview

**Movie Explorer** is a sleek and responsive movie browsing app built using **React**, **TypeScript**, and **Tailwind CSS**, powered by **The Movie Database (TMDB) API**.  
It allows users to explore trending, popular, upcoming, and top-rated movies with detailed information, search functionality, and beautiful UI.

This project demonstrates:
- Real-world API integration (TMDB)
- Modular, reusable React components
- Responsive, modern Tailwind UI
- Type-safe code using TypeScript
- Dynamic routing for movie details

---

## 🚀 Core Features

### 🎥 Movie Discovery
- Browse trending, popular, and upcoming movies  
- View **Top Rated** and **Now Playing** movies  
- Click any movie to see full details  

### 🔍 Smart Search
- Search movies by title or keyword  
- Real-time, responsive search results  
- View matching posters, ratings, and release years  

### 📊 Movie Details
- Detailed information: overview, release date, language, and rating  
- Movie posters and related visuals  
- Smooth page transitions  

### 🎨 Beautiful UI/UX
- Built with **Tailwind CSS** for responsive design  
- Modern layout with clean typography  
- Fully mobile and tablet optimized  

---

## 🏗️ Architecture

```

┌────────────────────────────────────────────┐
│                 Client Layer               │
├────────────────────────────────────────────┤
│ React 18 │ TypeScript │ Tailwind CSS │ Vite │
│ Components • Hooks • Context • Pages       │
└────────────────────────────────────────────┘
│
┌────────────────────────────────────────────┐
│                API Layer                   │
├────────────────────────────────────────────┤
│ TMDB API │ Axios │ RESTful Endpoints       │
│ Movie Data • Search • Details • Trending   │
└────────────────────────────────────────────┘
│
┌────────────────────────────────────────────┐
│               Data Layer                   │
├────────────────────────────────────────────┤
│ Local Caching • Constants • Formatting     │
│ Trending • Popular • Search • Details      │
└────────────────────────────────────────────┘

```

---

## 💻 Tech Stack

| Layer | Technology | Description |
|:------|:------------|:-------------|
| **Frontend** | React + TypeScript | Component-based UI with type safety |
| **Styling** | Tailwind CSS | Utility-first responsive design |
| **Build Tool** | Vite | Super fast dev server & build tool |
| **API Client** | Axios | HTTP requests to TMDB API |
| **Routing** | React Router | Client-side navigation |
| **Icons** | Lucide React | Beautiful, consistent icons |

---

## 📁 Folder Structure

```

Movie-Explorer/
├── public/                    # Static assets
│   ├── home.png
│   ├── movies-detail.png
│   ├── movies.png
│   ├── assets/
│   │   ├── card.webp
│   │   ├── logo.png
│   │   └── poster.jpeg
│   └── vite.svg
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── layout/            # Navbar, Header, Footer
│   │   ├── movie/             # MovieCard, MovieList, etc.
│   │   ├── ui/                # Buttons, Inputs, Loaders
│   │   └── common/            # Shared reusable parts
│   ├── hooks/                 # Custom React hooks
│   │   ├── useMovies.ts       # Fetch and manage movie data
│   │   ├── useSearch.ts       # Handle search logic
│   │   └── useLocalStorage.ts # Local persistence
│   ├── pages/                 # App pages
│   │   ├── Home.tsx
│   │   ├── Movies.tsx
│   │   ├── MovieDetails.tsx
│   │   └── Search.tsx
│   ├── services/              # API services and configurations
│   │   ├── tmdbApi.ts
│   │   ├── moviesService.ts
│   │   └── searchService.ts
│   ├── types/                 # TypeScript definitions
│   │   ├── movie.ts
│   │   ├── api.ts
│   │   └── common.ts
│   ├── utils/                 # Utility helpers
│   │   ├── constants.ts
│   │   ├── formatters.ts
│   │   └── helpers.ts
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

````

---

## ⚙️ Setup & Installation

### 🧩 Prerequisites
- Node.js ≥ 16  
- npm or yarn  
- TMDB API key ([Get it here](https://www.themoviedb.org/settings/api))

### 🔧 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/KAquib24/Movie-Explorer.git
cd Movie-Explorer

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create environment variables
touch .env
````

### ⚙️ Environment Variables

Add this to your `.env` file:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

---

## 🚀 Run the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

App runs at 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🎯 Future Enhancements

* ❤️ Watchlist / Favorites
* 👥 User Profiles with saved preferences
* 🎭 Actor / Cast pages
* 📝 Movie Reviews
* 🎪 TV Shows integration
* 🌙 Dark / Light theme toggle
* 🔔 New release notifications

---

## 🧠 Learning Outcomes

This project showcases:

✅ Real API integration (TMDB)
✅ Type-safe coding with TypeScript
✅ Modern React with Hooks
✅ Reusable, scalable architecture
✅ Tailwind CSS for responsive design
✅ Efficient search and routing

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ✉️ Contact

**👨‍💻 Aquib Khan**
📧 [aquibkhan8108@gmail.com](mailto:aquibkhan8108@gmail.com)
🔗 [GitHub — @KAquib24](https://github.com/KAquib24)

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!** ⭐
*"Discover your next favorite movie effortlessly with Movie Explorer."*

</div>
