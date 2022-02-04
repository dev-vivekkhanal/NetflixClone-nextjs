import Link from "next/link";

function GetStarted() {
  return (
    <div className="text-white text-center  max-w-[700px] mx-auto mt-5 mb-20  ">
      <p className=" min-w-[200px]   mx-auto text-base sm:text-xl  mb-5 px-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="  flex flex-col lg:flex-row lg:justify-center w-[95%] lg:w-full mx-auto ">
        <input
          type="text"
          name="Email"
          placeholder="Email address"
          className=" min-w-[200px] outline-none text-base sm:text-xl  p-3 text-black lg:w-[150%]  "
        />
        <Link href="/auth">
          <button className=" mt-5 lg:mt-0 w-[150px] md:p-3 md:h-[60px] lg:w-full mx-auto text-xl lg:text-2xl lg:p-4 lg:h-[68px] bg-[#e50914] h-full p-2  rounded active:scale-95 transition-all ">
            Get Started &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
