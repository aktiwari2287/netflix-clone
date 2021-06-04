import React, { useState, useEffect } from "react";
import axios from "../axios";
import { requests } from "../requests";
import './Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Banner() {
  const [movie, setMovie] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  };
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

  const handleClick = (movie) => {
    console.log("movie", movie.title)
    if(trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.title || "")
      .then(url => {
        console.log("url is ", url);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      }).catch((error)=> {
        console.log(error);
      })
    }
  }

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
      <div className="banner_movie">
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="banner_movie"> </YouTube> }
      </div>
      
        <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name} </h1>
        <div className="banner_buttons">
            <button className="banner_button" onClick={()=> handleClick(movie)}>Play</button>
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
