import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../assets/img/netflix-logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRef, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/features/userSlice";
import { auth, provider } from "../firebase";

export default function Auth() {
  const router = useRouter();
  const signInEmailRef = useRef(null);
  const signInPasswordRef = useRef(null);
  const signUpEmailRef = useRef(null);
  const signUpPasswordRef = useRef(null);

  //   States
  const [isNewUser, setIsNewUser] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  // user validation
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const validUser = user?.email;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // valid user
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // invalid user
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  //   Signin and signout handlers
  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        signInEmailRef.current.value,
        signInPasswordRef.current.value
      )
      .then((authUser) => {
        router.replace("/");
      })
      .catch((error) => {
        setLoginErrorMessage(error.message);
      });
  };

  const demoSignInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword("demo@gmail.com", "demopassword")
      .then((authUser) => {
        router.replace("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        signUpEmailRef.current.value,
        signUpPasswordRef.current.value
      )
      .then((authUser) => {
        router.replace("/");
      })
      .catch((error) => {
        setSignUpErrorMessage(error.message);
      });
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div className="bg-[url('../assets/img/home-banner.jpg')] min-h-screen">
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone made by Vivek khanal" />
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <div className="bg-[#040404b0] min-h-screen">
        <header>
          <div className="flex justify-between h-full items-center    p-3 sm:p-5 md:px-10">
            <div className="block h-fit w-24 lg:w-36 hover:cursor-pointer ">
              <Image
                src={logo}
                layout="responsive"
                onClick={() => {
                  router.replace("/");
                }}
              />
            </div>
          </div>
        </header>
        <main className="flex   text-gray-300  items-center justify-center text-center  h-full">
          <div className="bg-[#040404d0] mt-32 mb-20  py-20 w-[450px] flex items-center justify-center">
            {!isNewUser ? (
              <div className="h-[80%] w-[70%] text-left">
                <h1 className=" font-semibold text-3xl mb-8">Sign In</h1>
                <form>
                  <input
                    ref={signInEmailRef}
                    type="text"
                    placeholder="Email address"
                    required
                    className="h-12 w-full outline-none px-5 mb-5 bg-[#333] focus:border-b-2 border-orange-600 rounded "
                  />
                  <input
                    ref={signInPasswordRef}
                    type="password"
                    placeholder="Password"
                    required
                    className="h-12 w-full outline-none px-5  bg-[#333] focus:border-b-2 border-orange-600 rounded "
                  />
                  <p className="my-5 text-sm text-red-500">
                    {loginErrorMessage}
                  </p>

                  <button
                    onClick={signInHandler}
                    className="  text-white  w-full   mx-auto text-xl  bg-[#ce0610] h-full p-3 font-semibold  rounded active:scale-95 transition-all "
                  >
                    Sign In
                  </button>
                  <p className="my-2 text-xl text-gray-400 font-medium text-center">
                    or
                  </p>
                  <button
                    onClick={demoSignInHandler}
                    className="  text-white  w-full   mx-auto text-xl  bg-[#ce0610] h-full p-3 font-semibold  rounded active:scale-95 transition-all "
                  >
                    Demo Sign In
                  </button>
                </form>
                <p className="my-2 text-xl text-gray-400 font-medium text-center">
                  or
                </p>
                <div
                  onClick={signInWithGoogle}
                  className="text-center cursor-pointer "
                >
                  <GoogleIcon fontSize="large" className=" mr-5" />
                  <span>SIGN IN WITH GOOGLE </span>
                </div>
                <p
                  onClick={() => {
                    setIsNewUser(true);
                    signInEmailRef.current.value = null;
                    signInPasswordRef.current.value = null;
                    setLoginErrorMessage("");
                  }}
                  className="mt-10 text-[#5f5e5e] cursor-pointer"
                >
                  New to Netflix?
                  <span className="text-white ml-2  decoration-2 hover:text-red-500 transition-all underline-offset-2">
                    Sign up now
                  </span>
                </p>
              </div>
            ) : (
              <div className="h-[80%] w-[70%] text-left">
                <h1 className=" font-semibold text-3xl mb-8">Create Account</h1>
                <form>
                  <input
                    ref={signUpEmailRef}
                    required
                    type="text"
                    placeholder="Enter email address"
                    className="h-12 w-full outline-none px-5 mb-5 bg-[#333] focus:border-b-2 border-orange-600 rounded "
                  />
                  <input
                    ref={signUpPasswordRef}
                    required
                    type="password"
                    placeholder="Enter a new password"
                    className="h-12 w-full outline-none px-5 mb-5 bg-[#333] focus:border-b-2 border-orange-600 rounded "
                  />

                  <p className="my-2 text-sm text-red-500">
                    {signUpErrorMessage}
                  </p>

                  <button
                    onClick={signupHandler}
                    className="  text-white  w-full  mt-5  mx-auto text-xl  bg-[#ce0610] h-full p-3 font-semibold  rounded active:scale-95 transition-all "
                  >
                    Sign up
                  </button>
                </form>

                <p
                  onClick={() => {
                    setIsNewUser(false);
                    signUpEmailRef.current.value = null;
                    signUpPasswordRef.current.value = null;
                    setSignUpErrorMessage("");
                  }}
                  className="mt-10 text-[#5f5e5e] cursor-pointer"
                >
                  Already have an account?
                  <a className="text-white ml-2  decoration-2 hover:text-red-500 transition-all underline-offset-2 inline-block">
                    Sign in
                  </a>
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
