import React from "react";

function AllDevice() {
  return (
    <section className="border-b-8 border-[#222] py-[50px] text-white flex-col">
      <div className=" flex flex-col text-center  items-center mx-auto px-5 py-[20px] lg:flex-row  lg:max-w-[1300px] lg:text-left ">
        <div className=" w-fit mb-[30px]">
          <h1 className="text-3xl font-semibold mb-8 lg:text-5xl">
            Watch everywhere.
          </h1>
          <p className="text-xl lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="  w-full  ">
          <div className="py-10  object-contain  relative flex justify-center items-center w-[100%] sm:w-[80%] max-w-[700px] mx-auto">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="netflix in TV"
              className="object-contain absolute  w-full"
            />
            <video
              src="/netflix-in-all.m4v"
              muted
              loop
              autoPlay={true}
              className="pb-[25%]  w-[65%] "
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllDevice;
