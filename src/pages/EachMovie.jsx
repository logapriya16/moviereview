import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";

export default function EachMovie() {
  const { moviename } = useParams();
  console.log(moviename);
  const { moviestate } = useContext(MovieContext);
  return (
    <div className="movie-details main-div">
      {moviestate.movies
        .filter((item) => item.title === moviename)
        .map((movie) => (
          <div className="movie-info">
            <img src={movie.imageURL} className="movie-banner" alt="" height="600px" />
            <div className="">
              <h1>{movie.title}</h1>
              <p>{movie.summary}</p>
              <p>Year : {movie.year}</p>
              <p>
                Genre :
                {movie.genre.map((item) => (
                  <span>{item} </span>
                ))}
              </p>
              <p>Rating : {movie.rating}</p>
              <p>Director : {movie.director}</p>
              <p>Writer : {movie.writer}</p>
              <p>
                Cast :
                {movie.cast.map((item) => (
                  <span>{item}</span>
                ))}
              </p>
              <button className="new-movie">Star</button>
              <button className="new-movie"> Add to Watchlist</button>
            </div>
          </div>
        ))}
    </div>
  );
}
