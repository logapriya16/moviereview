import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function Watchlist() {
  const { moviestate, AddtoWatchList, AddtoStared } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="main-div">
      <div>
        <ul type="none" className="movie-list">
          {moviestate.watchlist.length > 0 ? (
            moviestate.watchlist.map((movie) => {
              const isWatchlist = moviestate.watchlist.some(
                (item) => item.title === movie.title
              );
              const isStared = moviestate.stared.some(
                (item) => item.title === movie.title
              );
              return (
                <li className="each-movie">
                  <img
                    src={movie.imageURL}
                    alt=""
                    height="400px"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/movie/${movie.title}`)}
                  />
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <button
                    className="new-movie"
                    onClick={() => AddtoWatchList(movie)}
                  >
                    {isWatchlist ? "Remove from watchlist" : "Add to watchlist"}
                  </button>
                  <button
                    className="new-movie"
                    onClick={(e) => AddtoStared(movie)}
                  >
                    {isStared ? "unstar" : "Star"}
                  </button>
                </li>
              );
            })
          ) : (
            <h1>No Movies Found</h1>
          )}
        </ul>
      </div>
    </div>
  );
}
