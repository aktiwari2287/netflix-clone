import React, { useState, useEffect } from "react";
import axios from "../axios";
import { requests } from "../requests";
import './Banner.css';
function Banner() {
  const [movie, setMovie] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchSciFi);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchMovie();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name} </h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
            {movie?.overview}
        </h1>
      </div>
      <div className="banner_fadeButtom">
      </div>
    </header>
  )
}

export default Banner;
