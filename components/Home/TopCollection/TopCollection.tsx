import { TopCollectionData } from "@/data/data";
import React from "react";
import TopCollectionCard from "./TopCollectionCard";

const TopCollection = () => {
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Top Collection Over{" "}
        <span className="text-amber-600">Last 24 Hours</span>
      </h1>
      <div className="pt-16 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {TopCollectionData.map((data, i) => {
          return (
            <div
              key={data.id}
              data-aos="zoom-in"
              data-aos-delay={`${i * 100}`}
              data-aos-anchor-placement="top-center"
            >
              {/* TopCollection Card */}
              <TopCollectionCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCollection;
