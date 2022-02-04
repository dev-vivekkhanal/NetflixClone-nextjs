import AllDevice from "./AllDevice";
import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import MobileRow from "./MobileRow";
import TvRow from "./TvRow";

function HomeInvalid() {
  return (
    <div>
      {/* Landing Hero Section */}
      <section className="bg-[url('../assets/img/home-banner.jpg')] border-b-8 border-[#222]">
        <div className="flex flex-col  text-white items-center justify-items-center text-center bg-[#040404b0] ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl  font-semibold min-w-[300px] max-w-[650px]   mt-[150px] lg:mt-[200px] leading-tight px-2">
            Unlimited movies, TV shows and mores.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl my-5 px-3">
            Watch anywhere. Cancel anytime.
          </p>
          <GetStarted />
          <div className="h-20 w-full bg-gradient-to-t from-black pb-32"></div>
        </div>
      </section>
      {/* Feature Tiles */}
      <div className="bg-black">
        <TvRow />
        <MobileRow />
        <AllDevice />
      </div>
      {/* FAQs */}
      <FAQ />
    </div>
  );
}

export default HomeInvalid;
