import React, { useState, useEffect } from "react";
import axios from "../axios";
import './Row.css'
export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img key={movie.id} className="row_poster" src={`${baseURL}${movie.poster_path}`} />
        ))}
      </div>
    </div>
  );
};
