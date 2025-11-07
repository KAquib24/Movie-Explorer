# 🎬 Movie Explorer — React + TypeScript + TMDB API

<div align="center">

<img src="https://img.shields.io/badge/⚛️_React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/🔷_TypeScript-Type_Safe-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/🎨_TailwindCSS-Utility_First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/🚀_Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/🎥_TMDB_API-Movie_Database-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white" />

**A modern movie discovery platform built with React + TypeScript that lets you explore, search, and view details for your favorite films using TMDB API.**

</div>

---

## 🌐 Live Demo

🎬 **Explore it live:**  
➡️ **[https://movie-explorer-15zmr15fj-kaquib24s-projects.vercel.app/](https://movie-explorer-15zmr15fj-kaquib24s-projects.vercel.app/)**  

*Discover trending, upcoming, and popular movies — all in one place!*

---

## 🖼️ Preview

| Home Page | Movie Info | All Movies |
|------------|-------------|-------------|
| ![Home](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/home.png) | ![Movie Info](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/movies-detail.png) | ![All Movies](https://raw.githubusercontent.com/KAquib24/Movie-Explorer/main/public/movies.png) |

---

## ✨ Overview

**Movie Explorer** is a visually rich, responsive web application that fetches real-time movie data from **The Movie Database (TMDB) API**.  
It enables users to browse trending titles, view detailed information, and explore genres — all within a fast, modern interface powered by **React + TypeScript + TailwindCSS**.

This project demonstrates:
- API integration with TMDB
- Modular React component architecture
- Clean, mobile-first UI
- Type safety and scalability
- Optimized Vite build setup

---

## 🚀 Core Features

### 🎥 Movie Discovery
- View **Trending**, **Popular**, and **New Releases**
- Explore by **Genres**
- Access complete **Movie Details** including poster, overview, and release info

### 🔍 Smart Search
- Search movies by title
- Instant results powered by TMDB API

### 🧾 Detailed Info
- Displays rating, release year, language, and plot summary
- Responsive **Movie Details Page**

### 🎨 Clean UI / UX
- Minimal, elegant interface using **TailwindCSS**
- Responsive grid layout for all devices
- Interactive hover effects and smooth transitions

---

## 🏗️ Architecture

```

┌────────────────────────────────────────────┐
│              Client Layer                  │
├────────────────────────────────────────────┤
│ React 18 │ TypeScript │ TailwindCSS │ Vite │
│ Components • Pages • API Integration       │
└────────────────────────────────────────────┘
│
┌────────────────────────────────────────────┐
│               API Layer                    │
├────────────────────────────────────────────┤
│ TMDB API │ Axios (via fetch in tmbd.ts)    │
│ Real-time movie data & search results      │
└────────────────────────────────────────────┘
│
┌────────────────────────────────────────────┐
│               Data Layer                   │
├────────────────────────────────────────────┤
│ Local caching • Type definitions • Utilities │
└────────────────────────────────────────────┘

```

---

## 💻 Tech Stack

| Category | Technology | Description |
|:----------|:------------|:-------------|
| **Frontend** | React + TypeScript | Fast, scalable, and type-safe |
| **Styling** | Tailwind CSS | Utility-first responsive styling |
| **API** | TMDB API | Fetches live movie data |
| **Build Tool** | Vite | Lightning-fast development/build |
| **Testing** | Jest + React Testing Library | Unit testing setup |
| **Icons** | Lucide / React Icons | Clean icon set |

---

## 📁 Folder Structure

```

Movie-Explorer/
├── public/
│   ├── home.png
│   ├── movies.png
│   ├── movies-detail.png
│   ├── vite.svg
│   └── logo.png
├── src/
│   ├── api/
│   │   └── tmbd.ts                 # TMDB API service
│   ├── components/                 # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Genre.tsx
│   │   ├── Hero.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieTabs.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewRelease.tsx
│   │   ├── Popular.tsx
│   │   └── Trending.tsx
│   ├── pages/
│   │   ├── Home.tsx                # Landing page
│   │   ├── Allmovies.tsx           # All movies page
│   │   └── MoviesInfo.tsx          # Individual movie details
│   ├── types/
│   │   └── type.ts                 # TypeScript interfaces
│   ├── App.tsx                     # Root component
│   ├── App.css
│   ├── index.css                   # Global styles
│   ├── main.tsx                    # Entry point
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json

````

---

## ⚙️ Setup & Installation

### 🧩 Prerequisites
- Node.js ≥ 16  
- npm or yarn  
- TMDB API key → [Get yours here](https://www.themoviedb.org/settings/api)

### 🔧 Installation Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/KAquib24/Movie-Explorer.git
cd Movie-Explorer

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create environment file
touch .env
````

### ⚙️ Environment Variables

Add the following inside `.env`:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

App runs at: **[http://localhost:5173](http://localhost:5173)**

---

## 🎯 Future Enhancements

* ❤️ Favorites & Watchlist
* 👥 Actor & Cast details
* 📝 Movie Reviews
* 🌙 Dark Mode
* 🎬 TV Series support
* 🔔 Notifications for new releases

---

## 🧠 Learning Outcomes

This project demonstrates:

* Real-time API integration (TMDB)
* Component-based design with reusability
* Clean and modular TypeScript code
* Responsive, mobile-first Tailwind layouts
* Organized project architecture
* Efficient routing & state handling

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

⭐ **If you liked this project, don’t forget to star it on GitHub!** ⭐
*“Discover your next favorite movie with ease.”*

</div>
