import React, { useState, useEffect, useRef } from "react";
import { getSimilarMovies, getTopRatedMovies, BaseImageURL } from "../api";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ id }) => {
  const [data, setData] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch(id ? getSimilarMovies(id) : getTopRatedMovies(1))
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [id]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Slider {...settings} ref={slider} style={{ width: "100%" }}>
        {data.map((item, index) => {
          return (
            <Link to={`/movies/${item.id}`} key={index} className="slider-item">
              <div
                className="slider-image"
                style={{
                  backgroundImage: `url(${BaseImageURL() + item.poster_path})`,
                }}
              ></div>
            </Link>
          );
        })}
      </Slider>
      <div className="slider-btns">
        <i onClick={() => slider?.current?.slickPrev()}>
          <ArrowLeft />
        </i>
        <i onClick={() => slider?.current?.slickNext()}>
          <ArrowRight />
        </i>
      </div>
    </section>
  );
};

export default SliderComponent;
