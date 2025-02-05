import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../js/api.jsx";

function FilmTendance() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const moviesData = await fetchTrendingMovies("all", "day");
        setMovies(moviesData);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div className="wrapper">
      <div className="tendances-container container">
        <h2>Films Tendance</h2>
        <div className="grid-tendances" id="tendances">
          {movies.map((movie) => (
            <div key={movie.id} className="movie">
              <a href={`focus.html?id=${movie.id}&type=movie`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="score">
                  <p>{movie.vote_average * 10}%</p>
                </div>
                <h5>{movie.title}</h5>
                <p>{new Date(movie.release_date).toLocaleDateString("fr")}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmTendance;