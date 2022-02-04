import Router from "next/router";
import { useEffect, useState } from "react";

function MovieRow({ title, movieList }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const movieData = movieList;
    setMovies(movieData);
  }, [movieList]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let rowW = movies.length * 168;
    if (window.innerWidth - rowW > x) {
      x = window.innerWidth - rowW - 60;
    }
    setScrollX(x);
  };

  // Sending movie.id in address bar
  const handleSelectedMovie = (movie) => {
    Router.push(`/details/${movie.id}`);
  };

  return (
    <section className="pt-5 overflow-hidden">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold my-1 pl-3 md:pl-10">
        {title}
      </h1>

      <div className="row-item-wrapper transition-all   max-h-[300px]    items-center relative  ">
        <svg
          onClick={handleLeftArrow}
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: 50 }}
          className="absolute w-[40px] text-white bg-[#040404b0] overflow-hidden md:opacity-0 h-full left-0 cursor-pointer z-40 left-arrow transition-all duration-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <svg
          onClick={handleRightArrow}
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: 50 }}
          className="absolute w-[40px] text-white bg-[#040404b0] overflow-hidden md:opacity-0 h-full right-0 cursor-pointer z-40 right-arrow transition-all duration-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

        <div
          className=" pl-2 md:pl-10 transition-all  ease-in duration-300 "
          style={{
            marginLeft: scrollX,
            width: movies.length * 250,
          }}
        >
          {movies.map((movie) => (
            <img
              onClick={() => handleSelectedMovie(movie)}
              className={` w-[110px] sm:w-[130px] md:w-[140px] lg:w-[150px] m-2 rounded-md object-contain hover:scale-105 active:scale-95 transition-all ease-in cursor-pointer inline-block `}
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieRow;
