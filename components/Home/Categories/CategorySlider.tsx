"use client";
import { HotBidData } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotBidCard from "../HotBids/HotBidCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const CategorySlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite={true}
      responsive={responsive}
      itemClass="item"
    >
      {HotBidData.map((data) => {
        return (
          <div key={data.id}>
            <HotBidCard data={data} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CategorySlider;
