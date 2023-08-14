import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function NewMovie() {
  const { AddnewMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  return (
    <div className="main-div">
      <h1>Add New Movie</h1>
      <form onSubmit={(e) => AddnewMovie(e)}>
        <label className="label" htmlFor="">
          Title :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie Title"
            id="title"
          />
        </label>
        <label className="label" htmlFor="">
          Relese Year :
          <input
            required
            className="input"
            type="number"
            placeholder="Movie Relese year"
            id="year"
          />
        </label>
        <label className="label" htmlFor="">
          Genre :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie genre"
            id="genre"
          />
        </label>
        <label className="label" htmlFor="">
          Rating :
          <input
            required
            className="input"
            type="number"
            placeholder="Movie Rating"
            id="rating"
          />
        </label>
        <label className="label" htmlFor="">
          Director :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie Director"
            id="director"
          />
        </label>
        <label className="label" htmlFor="">
          {" "}
          Writer :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie Writer"
            id="writer"
          />
        </label>

        <label className="label" htmlFor="">
          Cast :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie cast"
            id="cast"
          />
        </label>

        <label className="label" htmlFor="">
          Summary :
          <input
            required
            className="input"
            type="text"
            placeholder="Movie summary"
            id="summary"
          />
        </label>
        <label className="label" htmlFor="">
          Image :
          <input
            className="input"
            type="text"
            placeholder="Movie Image"
            id="img"
            required
            defaultValue="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
          />
        </label>
        <button
          style={{ visibility: "hidden" }}
          type="reset"
          id="reset"
          onClick={() => navigate("/")}
        ></button>
        <button type="submit" className="new-movie">
          Add Movie
        </button>
      </form>
    </div>
  );
}
