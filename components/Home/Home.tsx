"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import HotBids from "./HotBids/HotBids";
import TopCollection from "./TopCollection/TopCollection";
import Categories from "./Categories/Categories";
import SellNftInfo from "./SellNftInfo/SellNftInfo";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Hero />
      <HotBids />
      <TopCollection />
      <Categories />
      <SellNftInfo />
    </div>
  );
};

export default Home;
