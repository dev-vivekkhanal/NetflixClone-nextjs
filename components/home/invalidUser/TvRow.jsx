import Image from "next/image";
import React from "react";
import tvImage from "../../../assets/img/tv.png";

function TvRow() {
  return (
    <section className="border-b-8 border-[#222] py-[50px] text-white flex-col">
      <div className="  text-center flex flex-col  justify-around   items-center  mx-auto px-5 lg:flex-row  lg:max-w-[1300px] lg:my-10">
        <div className="mb-9 lg:text-left">
          <h1 className=" text-3xl lg:text-5xl  font-semibold mb-8">
            Enjoy on your TV.
          </h1>
          <p className="text-xl lg:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="w-full  ">
          <div className=" w-full sm:w-[90%] max-w-[700px]  relative flex justify-center items-center object-contain py-10 mx-auto">
            <div className="object-contain absolute  w-[70%] block h-fit">
              <Image src={tvImage} layout="responsive" />
            </div>
            <video
              src="/netflix-in-tv.m4v"
              muted
              loop
              autoPlay={true}
              className="pb-4  w-[52%]  "
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TvRow;
