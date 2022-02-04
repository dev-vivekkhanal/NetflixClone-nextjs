import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../assets/img/netflix-logo.png";
import profileAvatar from "../../assets/img/profileAvatar.png";
import arrow from "../../assets/img/arrow.png";
import { motion } from "framer-motion";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const router = useRouter();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const validUser = user?.email;

  // States
  const [isClicked, setIsClicked] = useState(false);
  const [navBg, setNavBg] = useState("");

  //   Hooks
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setNavBg("bg-black");
      } else if (window.scrollY < 15) {
        setNavBg("bg-custom-transparent");
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  // Functions
  const slideMenu = () => {
    setIsClicked(!isClicked);
  };

  const handleSignOut = () => {
    auth.signOut();
    dispatch(logout);
    router.reload();
    router.replace("/");

    console.log("signout initiated");
  };

  return (
    <header className={`h-fit max-h-[100px] ${navBg} fixed w-full top-0 z-50`}>
      {/* Header Contents Container */}
      <div className="flex justify-between h-full items-center    p-3 sm:p-5 md:px-10  ">
        {/* Logo */}
        <div className="block h-fit w-24 lg:w-36 hover:cursor-pointer">
          <Image
            src={logo}
            layout="responsive"
            priority
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        {!validUser ? (
          <Link href="/auth">
            <button
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded active:scale-95 transition-all bg-[#e50914]  text-white `}
            >
              Sign In
            </button>
          </Link>
        ) : (
          <div onClick={slideMenu} className=" relative cursor-pointer ">
            <div className="flex justify-end  ">
              <div className="block min-h-fit w-[30px] sm:w-[35px] md:w-[40px]  cursor-pointer  ">
                <Image src={profileAvatar} layout="responsive" />
              </div>
              <div className="block self-center h-fit w-2 md:w-3 transition-all rotate-0 ml-2 ">
                <Image src={arrow} layout="responsive" />
              </div>
            </div>
            {isClicked ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                ease="easeIn"
                className=" text-white  absolute right-0 top-[100%] mt-2 py-5 bg-[#000000ce]  w-[120px] sm:w-[150px] text-center"
              >
                <span
                  onClick={() => router.replace("/account")}
                  className="p-1 px-5 hover:underline cursor-pointer block"
                >
                  Account
                </span>
                <span
                  onClick={handleSignOut}
                  className="p-1 px-5 hover:underline cursor-pointer block"
                >
                  Sign out
                </span>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
