import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Eye, Heart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoriteSlice";
import { BaseImageURL } from "../api";

const MovieCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  let imageSource =
    data.poster_path === null
      ? `https://images.pexels.com/photos/7991525/pexels-photo-7991525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
      : BaseImageURL() + data.poster_path;

  const favoriteMovies = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const onHandlerClick = (e, data_id) => {
    if (isFavorite) {
      e.preventDefault();
      dispatch(removeFavorite({ id: data.id }));
      setIsFavorite(false);
    } else {
      e.preventDefault();
      dispatch(
        addFavorite({
          id: data.id,
          image: imageSource,
          name: data.title,
          vote: data.vote_average,
        })
      );
      setIsFavorite(true);
    }
  };
  return (
    <article className="movie-card">
      <LazyLoadImage
        src={imageSource}
        alt={data.title}
        effect="black-and-white"
      ></LazyLoadImage>
      <div className="movie-info">
        <h2>{data.title}</h2>
        <div className="movie-icons">
          <Link to={`/movies/${data.id}`}>
            <Eye size={30} />
          </Link>
          <Heart
            onClick={(e) => onHandlerClick(e, data.id)}
            className="heart-icon"
            fill={
              favoriteMovies.find((item) => item.id === data.id)
                ? "white"
                : "transparent"
            }
            size={30}
          />
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
