import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loading } from "../Components/Loading";
import SliderComponent from "../Components/SliderComponent";
import FilterComponent from "../Components/FilterComponent";
import MovieCard from "../Components/MovieCard";
import Header from "../Components/Header";
import { getPopularMovies } from "../api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setsearchMovie] = useState([]);
  const [page, setPage] = useState(1);
  const { ref, inView, entry } = useInView({
    threshold: 1,
    behaviour: "smooth",
  });

  useEffect(() => {
    fetch(getPopularMovies(page))
      .then((res) => res.json())
      .then((data) => setMovies([...movies, ...data.results]));

    inView && setPage(page + 1);
  }, [inView]);
  return (
    <section>
      <Header />
      <SliderComponent />
      <FilterComponent />

      <div className="movie-container">
        {movies.length !== 0 ? (
          movies.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
          <Loading />
        )}
      </div>
      <p ref={ref}></p>
    </section>
  );
};

export default HomePage;
