import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.tittle}
              />
              <div>
                  <button className="border bg-gray-300 py-2 px-5">Play</button>
                  <button className="border  py-2 px-5 ">Watch Later</button>
              </div>
      </div>
    </div>
  );
};

export default Main;
