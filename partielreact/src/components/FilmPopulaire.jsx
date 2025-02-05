import React, { useEffect, useState } from "react";
import { fetchTvCategory } from "../js/api.jsx";

function FilmPopulaire() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    async function loadTvShows() {
      try {
        const tvShowsData = await fetchTvCategory("top_rated");
        setTvShows(tvShowsData);
      } catch (error) {
        console.error("Failed to fetch TV shows:", error);
      }
    }
    loadTvShows();
  }, []);

  return (
    <div className="wrapper-pop">
      <div className="populaires-container container">
        <h2>Séries TV Populaires</h2>
        <div className="grid-tendances" id="populaires">
          {tvShows.map((show) => (
            <div key={show.id} className="movie">
              <a href={`focus.html?id=${show.id}&type=tv`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                />
                <div className="score">
                  <p>{show.vote_average * 10}%</p>
                </div>
                <h5>{show.name}</h5>
                <p>{new Date(show.first_air_date).toLocaleDateString("fr")}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmPopulaire;