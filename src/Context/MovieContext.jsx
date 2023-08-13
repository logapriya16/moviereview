import React, { createContext, useEffect, useReducer, useState } from "react";
import { movies } from "../Data/data";
import { movieReducer } from "../Reducers/movieReducer";
export const MovieContext = createContext();
export default function MovieContextProvider({ children }) {
  const movieInitial = {
    movies: movies,
    watchlist: [],
    stared: [],
  };
  const [moviestate, movieDispatch] = useReducer(movieReducer, movieInitial);
  const [display, setDisplay] = useState(moviestate.movies);
  const [filters, setFilters] = useState({
    genre: "",
    year: 0,
    rating: 0,
  });
  const AddtoWatchList = (movie) => {
    //console.log(movie)
    if (
      moviestate.watchlist.length > 0 &&
      moviestate.watchlist.map((item) => item.title === movie.title)
    ) {
      movieDispatch({
        type: "set_watchlist",
        payload: moviestate.watchlist.filter(
          (item) => item.title != movie.title
        ),
      });
    } else {
      movieDispatch({
        type: "set_watchlist",
        payload: [...moviestate.watchlist, movie],
      });
    }
  };

  const AddtoStared = (movie) => {
    if (
      moviestate.stared.length > 0 &&
      moviestate.stared.map((item) => item.title === movie.title)
    ) {
      movieDispatch({
        type: "set_stared",
        payload: moviestate.stared.filter((item) => item.title != movie.title),
      });
    } else {
      movieDispatch({
        type: "set_stared",
        payload: [...moviestate.stared, movie],
      });
    }
  };
  const HandleGnere = (e) => {
    setFilters((prev) => ({ ...prev, genre: e.target.value }));
  };
  const HandleYear = (e) => {
    setFilters((prev) => ({ ...prev, year: e.target.value }));
  };
  const HandleRating = (e) => {
    setFilters((prev) => ({ ...prev, rating: e.target.value }));
  };
  //console.log(filters);
  const generFilter =
    filters.genre.length > 0
      ? display.filter((item) => item.genre.includes(filters.genre))
      : display;
  const yearFilter =
    filters.year > 0
      ? generFilter.filter((item) => item.year == filters.year)
      : generFilter;
  // console.log(yearFilter);
  const ratingFilter =
    filters.rating > 0
      ? yearFilter.filter((item) => item.rating == filters.rating)
      : yearFilter;
  //console.log(ratingFilter);

  return (
    <MovieContext.Provider
      value={{
        moviestate,
        ratingFilter,
        setFilters,
        HandleYear,
        HandleGnere,
        HandleRating,
        display,
        AddtoWatchList,
        AddtoStared,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
