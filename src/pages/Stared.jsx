import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function Stared() {
  const { moviestate, AddtoWatchList, AddtoStared } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="main-div">
      <div>
        <ul type="none" className="movie-list">
          {moviestate.stared.length > 0 ? (
            moviestate.stared.map((movie) => (
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
                {moviestate.watchlist.length > 0 ? (
                  moviestate.watchlist.map((item) =>
                    item.title === movie.title ? (
                      <button
                        className="new-movie"
                        onClick={(e) => AddtoWatchList(movie)}
                      >
                        Remove from watchlist
                      </button>
                    ) : (
                      <button
                        onClick={() => AddtoWatchList(movie)}
                        className="new-movie"
                      >
                        Add to watchlist
                      </button>
                    )
                  )
                ) : (
                  <button
                    className="new-movie"
                    style={{
                      display:
                        moviestate.watchlist.length > 0 ? "none" : "block",
                    }}
                    onClick={() => AddtoWatchList(movie)}
                  >
                    Add to Watchlist
                  </button>
                )}
                {moviestate.stared.length > 0 ? (
                  moviestate.stared.map((item) =>
                    item.title === movie.title ? (
                      <button
                        className="new-movie"
                        onClick={(e) => AddtoStared(movie)}
                      >
                        Unstart
                      </button>
                    ) : (
                      <button
                        onClick={() => AddtoStared(movie)}
                        className="new-movie"
                      >
                        Star
                      </button>
                    )
                  )
                ) : (
                  <button
                    className="new-movie"
                    style={{
                      display: moviestate.stared.length > 0 ? "none" : "block",
                    }}
                    onClick={() => AddtoStared(movie)}
                  >
                    Star
                  </button>
                )}
              </li>
            ))
          ) : (
            <h1>No Movies Found</h1>
          )}
        </ul>
      </div>
    </div>
  );
}
