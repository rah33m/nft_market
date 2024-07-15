import React from "react";
import SellNftInfoCard from "./SellNftInfoCard";

const SellNftInfo = () => {
  return (
    <div className="pt-16 mb-20">
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Create and sell your NFT's
      </h1>
      <div className="w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          {/* Sell NFT Card */}
          <SellNftInfoCard
            image="/images/p1.png"
            title="1. Setup your wallet"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <SellNftInfoCard
            image="/images/p2.png"
            title="2. Create your collection"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <SellNftInfoCard image="/images/p3.png" title="3. Add your NFT's" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <SellNftInfoCard
            image="/images/p4.png"
            title="4. List them for sale"
          />
        </div>
      </div>
    </div>
  );
};

export default SellNftInfo;
