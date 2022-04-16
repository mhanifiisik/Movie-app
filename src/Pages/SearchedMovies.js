import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSearchMovie } from "../api";
import MovieCard from "../Components/MovieCard";

const SearchedMovies = () => {
  const query = useLocation()
    .pathname.split("query=")[1]
    .split("%20")
    .join(" ");

  const [data, setData] = useState();
  useEffect(() => {
    fetch(getSearchMovie(query))
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [query]);
  return (
    <section>
      <div className="searched-up">
        <h3>
          Searched term is: "{query}" Founded {data?.length}
        </h3>
      </div>
      <article className="movie-container">
        {data && data.map((item) => <MovieCard data={item} />)}
      </article>
    </section>
  );
};

export default SearchedMovies;
