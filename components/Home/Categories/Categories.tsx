import React from "react";
import CategorySlider from "./CategorySlider";

const Categories = () => {
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-3xl pt-2 md:text-4xl text-blue-950">
        Trending
      </h1>
      <div className="w-[80%] mx-auto mt-8 md:pt-12">
        {/* Category Slider */}
        <CategorySlider />
      </div>
    </div>
  );
};

export default Categories;
