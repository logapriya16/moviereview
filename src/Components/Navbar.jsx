import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { HandleSearch } = useContext(MovieContext);
  return (
    <div className="nav-container">
      <h2>IMDB</h2>
      <input
        type="search"
        className="search"
        onChange={(e) => HandleSearch(e)}
      />
      <p onClick={() => navigate("/")} className="nav-item">
        Movies
      </p>
      <p
        onClick={() => {
          navigate("/watchlist");
        }}
        className="nav-item"
      >
        Watchlist
      </p>
      <p className="nav-item" onClick={() => navigate("/stared")}>
        Stared
      </p>
    </div>
  );
}
