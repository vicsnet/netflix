import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  //   const [like, setLike] = useState(false);
  //  this.state = { hasError: false };
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  //   console.log(movies);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 text-black  hidden  group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  "
        >
          {movies?.map((item, id) => (
            <Movie item={item} />
            // <div className="w-[160px] sm: w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2 ">
            //   <img
            //     className="w-full h-auto block"
            //     src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path} `}
            //     alt={item.title}
            //   />
            //   <div className="absolute top-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
            //     <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            //       {item?.title}
            //     </p>
            //     <p className="absolute top-4 left-4 text-gray-300">{like ? <FaHeart /> : <FaRegHeart />}</p>
            //   </div>
            // </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 text-black hidden group-hover:block "
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
