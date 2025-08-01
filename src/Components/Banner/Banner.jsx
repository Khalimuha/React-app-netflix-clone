import React from "react";
import { useState, useEffect } from "react";
import requests from "../../utils/requests";
import instance from "../../utils/axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })(); //immedetely ....  iife
  }, []);

  let truncate = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.original_name}
          </h1>
        </div>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </>
  );
};

export default Banner;
