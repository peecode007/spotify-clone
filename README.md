# 🎵 Spotify Clone - Music Streaming App

A modern music streaming web app built with **React + Vite**, styled using **Tailwind CSS**, and powered by the **Shazam Core API**. Users can search, play, and explore music, artists, charts, and genres—just like Spotify.

---

## 🚀 Features

- 🔍 **Search Music** by song, artist, or genre
- 🎧 **Stream Songs** with active song highlighting
- 📊 **Top Charts** and **Top Artists** views
- 🌍 **Around You** feature to discover local hits (via Geo API)
- 🎨 Fully responsive and modern **UI/UX**
- 🧠 Built using **Redux Toolkit** for state management
- ⚡ Powered by **Shazam Core API**

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Shazam Core API (RapidAPI)](https://rapidapi.com/apidojo/api/shazam/)

---

## 📸 Screenshots

> You can include screenshots or a live demo GIF here.

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   Create a `.env` file in the root with your [RapidAPI](https://rapidapi.com/) credentials:

   ```env
   VITE_SHAZAM_CORE_RAPID_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

---

## 🗂 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components (Sidebar, Searchbar, etc.)
├── pages/            # Page views (Discover, TopCharts, ArtistDetails, etc.)
├── redux/            # Redux Toolkit slices and store setup
├── App.jsx           # Main app layout with routes
├── main.jsx          # Vite entry point
```

---

## 🧠 Learnings & Inspiration

This project was inspired by Spotify's design and aimed to practice:

* Complex state management with Redux Toolkit
* Working with external APIs (RapidAPI)
* Building responsive layouts with Tailwind
* Music player logic and audio APIs





