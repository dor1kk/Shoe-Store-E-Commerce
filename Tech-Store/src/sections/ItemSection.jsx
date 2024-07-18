import React, { useState } from "react";
import { items } from '../constans/index';
import { arrowRight } from "../assets/icons";
import ItemCard from "../components/ItemCard";

const ItemsSection = () => {
  const [bigItemImg, setBigItemImg] = useState(
    'https://static.vecteezy.com/system/resources/previews/014/033/452/original/wireless-headphones-front-view-white-icon-on-a-transparent-background-3d-rendering-png.png'
  );

  return (
    <div className="relative mt-12 flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img
        src={bigItemImg}
        alt="tech collection"
        width={610}
        height={502}
        className="object-contain relative z-10"
      />

      <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {items.map((image, index) => (
          <div key={index}>
            <ItemCard
              index={index}
              imgURL={image}
              changeBigItemImage={(item) => setBigItemImg(item)}
              bigItemImg={bigItemImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsSection;
