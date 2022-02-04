import React from "react";

function MobileRow() {
  return (
    <section className="border-b-8 border-[#222] py-[50px] text-white flex-col">
      <div className=" text-center flex flex-col justify-around  items-center  mx-auto px-5 py-[20px] lg:flex-row-reverse  lg:max-w-[1200px] lg:text-left">
        <div>
          <h1 className="text-3xl  lg:text-5xl font-semibold mb-8">
            Download your shows to watch offline.
          </h1>
          <p className="text-xl lg:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="netflix in mobile devices"
            className="object contain m-auto "
          />

          <div
            className="flex justify-between items-center rounded-xl border-2 border-[#3f3f3f] p-2 w-[80%] sm:w-[50%]  m-auto
          max-w-[350px] "
          >
            <div className=" ">
              <p className="font-semibold pl-2">Stranger Things</p>
              <p className="text-blue-500 animate-pulse ">Downloading...</p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="downloading animation"
              height="50px"
              width="50px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileRow;
