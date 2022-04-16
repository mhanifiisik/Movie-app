import React from "react";
import { BaseImageURL } from "../api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const InfoPanel = ({ data }) => {
  return (
    <div className="infopanel-container">
      <div className="infopanel-content">
        <img
          src={
            data.poster_path !== null
              ? BaseImageURL() + data.poster_path
              : "https://images.pexels.com/photos/7991525/pexels-photo-7991525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          alt="poster"
        />

        <div className="right-text">
          <div className="title">
            <h3>{data.title}</h3>
            <p>{data.vote_average}</p>
          </div>
          <ul>
            {data.genres.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
          <h2>STORY LINE</h2>
          <p>{data.overview}</p>
          <h2>CAST</h2>
          <div className="cast-container">
            {data.credits.cast.map((item, index) => (
              <div key={index} className="cast-content">
                <LazyLoadImage
                  src={
                    item.profile_path === null
                      ? "https://cquipsplus.ca/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
                      : BaseImageURL() + item.profile_path
                  }
                  alt="cast"
                />
                <div className="cast-names">
                  <p>
                    {item.name.split(" ").length >= 3
                      ? item.name.split(" ")[1]
                      : item.name}
                  </p>
                  <p>{item.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
