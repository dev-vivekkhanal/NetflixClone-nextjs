import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Header from "../../components/global/Header";
import Head from "next/head";
import YouTube from "react-youtube";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";

function Details({ movieDetail }) {
  const [trailerURL, setTrailerURL] = useState();

  const base_url = "https://image.tmdb.org/t/p/original/";

  const hours = Math.floor(movieDetail?.runtime / 60);
  const mins = movieDetail?.runtime % 60;

  const mediaId = movieDetail?.videos?.results[0]?.key;

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      modestbranding: 1,
      autoplay: 1,
    },
  };

  const openPlayer = () => {
    setTrailerURL(mediaId);
  };

  const closePlayer = () => {
    setTrailerURL("");
  };

  return (
    <div className="bg-black text-white relative overflow-hidden ">
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone made by Vivek khanal" />
        <link rel="icon" href="/netflix.ico" />
      </Head>
      {trailerURL && (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`h-full w-full object-fit absolute z-[100] bg-black $flex flex-col `}
        >
          <span
            onClick={closePlayer}
            className="text-4xl text-right p-2 block cursor-pointer  transition active:text-red-600"
          >
            <CancelIcon fontSize="large" />
          </span>
          <div className="flex justify-center items-center  h-[90vh]">
            <div className="">
              <YouTube
                videoId={trailerURL}
                opts={opts}
                className="w-[100vw] h-[80vh] "
              />
            </div>
          </div>
        </motion.div>
      )}

      <Header />

      <div
        className=" text-white relative min-h-screen"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full min-h-screen bg-[#000000f1] ">
          <div className="p-16 flex flex-col  md:flex-row justify-center items-center md:items-start  pt-[200px]">
            <div className="">
              <img
                className={` w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]  rounded-md object-contain border-2 border-gray-600 transition-all ease-in cursor-pointer  `}
                key={movieDetail.id}
                src={`${base_url}${movieDetail.poster_path}`}
                alt={
                  movieDetail?.title ||
                  movieDetail?.name ||
                  movieDetail?.original_name
                }
              />
            </div>
            <div className="md:w-[50%] lg:w-[30%] mt-10 md:mt-0 md:ml-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {movieDetail?.title ||
                  movieDetail?.name ||
                  movieDetail?.original_name}
              </h1>
              <div className="text-sm md:text-base lg:text-lg font-bold mt-[15px]">
                <span className="text-[#46d369] mr-[15px] inline-flex gap-2 items-baseline justify-center text-xl">
                  {movieDetail?.vote_average}
                  <span className="text-yellow-500">
                    <StarOutlinedIcon />
                  </span>
                </span>
                <span className="mr-[15px]">{movieDetail?.release_date}</span>
                <span className="mr-[5px]">{hours} hrs</span>
                <span className="mr-[15px]">{mins} mins</span>
                <p className="text-gray-300 font-semibold my-2">
                  {movieDetail?.genres?.map((genre) => (
                    <span className="mr-[15px]" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </p>
              </div>
              <p className="mt-[15px] text-sm md:text-lg lg:text-xl text-[#999]">
                {movieDetail?.overview}
              </p>
              <a
                onClick={openPlayer}
                className="mt-5 mr-5 hover:cursor-pointer inline-flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold py-2 px-2  md:py-[12px] md:px-[25px] rounded-[5px] bg-[#FFF] text-[#000] transition hover:opacity-[0.8]  "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] sm:w-[24px]"
                >
                  <path
                    d="M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span> Watch Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

export async function getServerSideProps(context) {
  const movie_id = context.query.id;

  const API_KEY = process.env.API_KEY;
  const allDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images,credits,similar`
  ).then((res) => res.json());

  return {
    props: {
      movieDetail: allDetails,
    },
  };
}
