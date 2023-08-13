import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const {
    moviestate,
    HandleYear,
    HandleGnere,
    HandleRating,
    ratingFilter,
    AddtoWatchList,
    AddtoStared,
  } = useContext(MovieContext);
  const navigate = useNavigate();
  console.log(moviestate);
  return (
    <div className="main-div">
      <div className="filters">
        <h2>Movies</h2>
        <select
          name=""
          id=""
          className="filter-items"
          onChange={(e) => HandleGnere(e)}
        >
          <option value="">All Genre</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">Biography</option>
        </select>
        <select
          name=""
          id=""
          className="filter-items"
          onChange={(e) => HandleYear(e)}
        >
          <option value="0">All year</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <select
          name=""
          id=""
          className="filter-items"
          onChange={(e) => {
            HandleRating(e);
          }}
        >
          <option value="0">All Ratings</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={() => navigate("/newmovie")} className="new-movie">
          Add Movie
        </button>
      </div>
      <div>
        <ul type="none" className="movie-list">
          {ratingFilter.length > 0 ? (
            ratingFilter.map((movie) => (
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
