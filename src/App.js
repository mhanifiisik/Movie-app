import "./App.css";
import HomePage from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import SearchedMovies from "./Pages/SearchedMovies";
import Favorites from "./Components/favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Favorites />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/search/query=:query" element={<SearchedMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
