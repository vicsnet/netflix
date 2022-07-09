import axios from "axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
//  this.state = { hasError: false };
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies?.map((items, id) => (
            <div className="w-[160px] sm: w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2 ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path} `}
                alt={items.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
