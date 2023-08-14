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
  const [filters, setFilters] = useState({
    genre: "",
    year: 0,
    rating: 0,
    search: "",
  });

  const AddtoWatchList = (movie) => {
    moviestate.watchlist.includes(movie)
      ? movieDispatch({
          type: "set_watchlist",
          payload: moviestate.watchlist.filter(
            (item) => item.title !== movie.title
          ),
        })
      : movieDispatch({
          type: "set_watchlist",
          payload: [...moviestate.watchlist, movie],
        });
  };

  const AddtoStared = (movie) => {
    moviestate.stared.includes(movie)
      ? movieDispatch({
          type: "set_stared",
          payload: moviestate.stared.filter(
            (item) => item.title !== movie.title
          ),
        })
      : movieDispatch({
          type: "set_stared",
          payload: [...moviestate.stared, movie],
        });
  };
  const AddnewMovie = (e) => {
    e.preventDefault();
    const temp = {
      title: e.target.elements.title.value,
      year: e.target.elements.year.value,
      genre: e.target.elements.genre.value,
      rating: e.target.elements.rating.value,
      director: e.target.elements.director.value,
      writer: e.target.elements.writer.value,
      cast: e.target.elements.cast.value,
      summary:
      e.target.elements.summary.value,
      imageURL:e.target.elements.img.value,

    };
    const resetter = e.target.elements.reset
    resetter.click()
    console.log(temp)
    movieDispatch({type:"set_movies",payload:[...moviestate.movies,temp]})
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
  const HandleSearch = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };
  //console.log(filters);
  const generFilter =
    filters.genre.length > 0
      ? moviestate.movies.filter((item) => item.genre.includes(filters.genre))
      : moviestate.movies;
  const yearFilter =
    filters.year > 0
      ? generFilter.filter((item) => item.year == filters.year)
      : generFilter;
  // console.log(yearFilter);
  //   console.log(
  //     moviestate.movies.map((item) =>
  //       item.cast.map((c)=>c===filters.search))
  //     )

  const searchFilter =
    filters.search.length > 0
      ? yearFilter.filter(
          (item) =>
            item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.director.toLowerCase().includes(filters.search.toLowerCase())
        )
      : yearFilter;
  const ratingFilter =
    filters.rating > 0
      ? searchFilter.filter((item) => item.rating == filters.rating)
      : searchFilter;
  //console.log(ratingFilter);

  return (
    <MovieContext.Provider
      value={{
        moviestate,
        ratingFilter,
        setFilters,
        HandleSearch,
        HandleYear,
        HandleGnere,
        HandleRating,
        AddtoWatchList,
        AddtoStared,
        AddnewMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
