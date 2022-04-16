import React, { useState } from "react";
import { Heart, Trash } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoriteSlice";
const Favorites = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const handleDelete = (data_id) => {
    dispatch(removeFavorite({ id: data_id }));
  };
  return (
    <div>
      <button
        className={isOpen ? "fav-btn fav-active" : "fav-btn"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Heart />
      </button>
      {isOpen && (
        <div className={isOpen ? "favorite active" : "favorite"}>
          <div className="fav-container">
            {favorites.length === 0 && <p className="empty">EMPTY</p>}
            {favorites.map((fav, index) => (
              <div key={index} className="fav-article">
                <p className="item">{index + 1}</p>
                <img className="item" src={fav.image} alt="fav" />
                <p className="item">{fav.name}</p>
                <p className="item">{fav.vote}</p>
                <Trash
                  className="item"
                  color="white"
                  onClick={() => handleDelete(fav.id)}
                ></Trash>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
