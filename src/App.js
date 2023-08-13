import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import Navbar from "./Components/Navbar";
import NewMovie from "./Components/NewMovie";
import EachMovie from "./pages/EachMovie";
import Stared from "./pages/Stared";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Movies />} path="/" />
        <Route element={<Watchlist />} path="/watchlist" />
        <Route element={<NewMovie />} path="/newmoview" />
        <Route element={<EachMovie />} path="/movie/:moviename" />
        <Route element={<Stared />} path="/stared" />
      </Routes>
    </div>
  );
}

export default App;
