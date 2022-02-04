import Head from "next/head";
import { useState } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import HomeInvalid from "../components/home/invalidUser/HomeInvalid";
import HomeValid from "../components/home/validUser/HomeValid";
import requests from "../utilities/requests";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/features/userSlice";
import { useEffect } from "react";
import { auth } from "../firebase";

export default function Home(props) {
  //  assigning prop to variable
  const allData = props;

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

  return (
    <div className=" relative bg-[#141414] cursor-default">
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone made by Vivek khanal" />
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <Header />
      <main>
        {!validUser ? <HomeInvalid /> : <HomeValid allData={allData} />}
      </main>
      <Footer />
    </div>
  );
}

//  Server side rendering

export async function getServerSideProps(context) {
  const trending = await fetch(`${requests.fetchTrending.url}`).then((res) =>
    res.json()
  );

  const topRated = await fetch(`${requests.fetchTopRated.url}`).then((res) =>
    res.json()
  );

  const action = await fetch(`${requests.fetchActionMovies.url}`).then((res) =>
    res.json()
  );

  const comedy = await fetch(`${requests.fetchComedyMovies.url}`).then((res) =>
    res.json()
  );

  const horror = await fetch(`${requests.fetchHorrorMovies.url}`).then((res) =>
    res.json()
  );

  const romance = await fetch(`${requests.fetchRomanceMovies.url}`).then(
    (res) => res.json()
  );

  const mystery = await fetch(`${requests.fetchMystery.url}`).then((res) =>
    res.json()
  );

  const scifi = await fetch(`${requests.fetchSciFi.url}`).then((res) =>
    res.json()
  );

  const western = await fetch(`${requests.fetchWestern.url}`).then((res) =>
    res.json()
  );

  const animation = await fetch(`${requests.fetchAnimation.url}`).then((res) =>
    res.json()
  );

  return {
    props: {
      trendingMovies: trending.results,
      topRatedMovies: topRated.results,
      actionMovies: action.results,
      comedyMovies: comedy.results,
      horrorMovies: horror.results,
      romanceMovies: romance.results,
      mysteryMovies: mystery.results,
      scifiMovies: scifi.results,
      westernMovies: western.results,
      animationMovies: animation.results,
    },
  };
}
