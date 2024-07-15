import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const SellNftInfoCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="mx-auto"
      />
      <h1 className="mt-8 mb-2 text-center text-lg text-blue-950 font-bold">
        {title}
      </h1>
      <p className="text-sm text-black text-center text-opacity-60">
        Irure quis tempor aute ut minim ex nulla exercitation nulla deserunt.
      </p>
    </div>
  );
};

export default SellNftInfoCard;
