import { configureStore } from "@reduxjs/toolkit";
import addFavorite from "./favoriteSlice";

export default configureStore({
  reducer: {
    favorite: addFavorite,
  },
});
