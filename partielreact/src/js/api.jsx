// src/js/api.jsx
const API_KEY = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae";

export async function fetchTrendingMovies(type = "all", filter = "day") {
  const url = `https://api.themoviedb.org/3/trending/${type}/${filter}?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  const data = await response.json();
  return data.results.slice(0, 4);
}

export async function fetchTvCategory(category = "top_rated") {
  const url = `https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}&language=fr-FR&page=1`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch TV category");
  }
  const data = await response.json();
  return data.results.slice(0, 4);
}

export async function fetchMovieById(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=fr-FR`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch movie by ID");
  }
  return await response.json();
}

export async function fetchCreditsById(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch credits by ID");
  }
  return await response.json();
}

export function convertDate(date) {
  const maDate = new Date(date);
  return maDate.toLocaleDateString("fr");
}