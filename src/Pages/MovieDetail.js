import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoModal from "../Components/VideoModal";
import { getVideo, BaseImageURL } from "../api";
import { Video, ArrowRight } from "react-feather";
import InfoPanel from "../Components/InfoPanel";
import SliderComponent from "../Components/SliderComponent";

const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(getVideo(params.id))
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params]);
  useEffect(() => {
    const handler = document.addEventListener("mousedown", () => {
      setIsOpen(false);
    });
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <>
      {movie.length !== 0 ? (
        <>
          <div
            className="info-container"
            style={{
              backgroundImage: `url(${
                movie.backdrop_path !== null
                  ? BaseImageURL() + movie.backdrop_path
                  : "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              })`,
            }}
          >
            <div className="info-panel">
              <h2 className="info-title">{movie.title}</h2>
              <div className="info-buttons">
                <a
                  href={`${movie.homepage}`}
                  className="detail-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Movie website</span>
                  <ArrowRight />
                </a>
                <button className="detail-btn" onClick={() => setIsOpen(true)}>
                  <span> Watch the trailer</span> <Video />
                </button>
              </div>
            </div>
            {isOpen && <VideoModal data={movie} isOpen={isOpen} />}
          </div>
          <InfoPanel data={movie} />
          <h3 className="slider-title">SIMILAR MOVIES</h3>
          <SliderComponent id={movie.id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MovieDetail;
