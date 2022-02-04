import React from "react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout, selectUser } from "../redux/features/userSlice";
import { auth } from "../firebase";
import { useRouter } from "next/router";

function Account() {
  // user validation
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const validUser = user?.email;
  const router = useRouter();

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
        router.replace("/");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone made by Vivek khanal" />
        <link rel="icon" href="/netflix.ico" />
      </Head>

      <div className="text-gray-800 ">
        <Header />
        <div className="bg-black h-[90px]"></div>
        <div className="px-5 max-w-[800px] mx-auto">
          <h1 className=" text-4xl mt-10 pb-5 border-b-2">Account</h1>
          <div className=" flex justify-between mt-5 items-start border-b-2">
            <h2 className="text-xl text-gray-500">User Details</h2>
            <div className=" w-[70%] ">
              <div className=" flex flex-col sm:flex-row items-end justify-between mb-2">
                <p className="font-semibold">{validUser}</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Change email
                </a>
              </div>
              <div className=" flex flex-col sm:flex-row items-end justify-between mb-2">
                <p className="text-gray-500">Password: **********</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Change password
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 items-start border-b-2">
            <h2 className="text-xl text-gray-500">Plan Details</h2>
            <div className=" w-[70%] ">
              <div className="flex flex-col sm:flex-row items-end justify-between mb-2">
                <p className="font-semibold">Basic</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Change plan
                </a>
              </div>
            </div>
          </div>

          <div className=" mt-5 items-start border-b-2">
            <h2 className="text-xl text-gray-500">Subscription Options</h2>
            <div className=" w-[100%]  mt-10">
              <div className="grid grid-rows-3 sm:grid-cols-3 mb-2 items-center space-y-5">
                <p className="font-semibold ">Basic</p>
                <p className=" ">
                  Good video quality in SD (480p). Watch on any phone, tablet,
                  computer or TV.
                </p>
                <a
                  href="#"
                  className="  font-semibold sm:justify-self-end border-b sm:border-none"
                >
                  ₹199/month
                </a>

                <p className="font-semibold ">Standard</p>
                <p className="">
                  Great video quality in Full HD (1080p). Watch on any phone,
                  tablet, computer or TV.
                </p>
                <a
                  href="#"
                  className="  font-semibold sm:justify-self-end border-b sm:border-none"
                >
                  ₹499/month
                </a>

                <p className="font-semibold ">Premium</p>
                <p className=" ">
                  Our best video quality in Ultra HD (4K) and HDR. Watch on any
                  phone, tablet, computer or TV.
                </p>
                <a href="#" className="  font-semibold sm:justify-self-end  ">
                  ₹649/month
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Account;
