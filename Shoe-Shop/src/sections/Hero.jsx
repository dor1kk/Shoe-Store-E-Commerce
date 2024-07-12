import { useState } from "react";
import { items, statistics } from "../constans/index";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState('https://static.vecteezy.com/system/resources/previews/014/033/452/original/wireless-headphones-front-view-white-icon-on-a-transparent-background-3d-rendering-png.png');

  return (
    <section id="home" className="flex flex-col xl:flex-row justify-center min-h-screen max-container mx-auto gap-10 p-4 xl:p-0">
      <div className="relative p xl:w-2/5 flex flex-col justify-center xl:ml-[-60px] w-full pt-16 px-16 xl:px-0">
        <p className="text-xl mt-16 font-medium text-red-400 font-montserrat mb-4 xl:mb-16  xl:mt-0">
          Our Summer Collection
        </p>
        <h1 className="mt-4 font-palanquin text-4xl sm:text-6xl xl:text-8xl leading-tight sm:leading-snug xl:leading-[82px] font-bold">
          The New Arrival<br />
          <span className="text-red-400">Tech</span> Store Items
        </h1>
        <p className="text-gray-400 w-full sm:w-3/5 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate soluta rerum accusantium quo, ab dolorum quam excepturi quibusdam odit qui maiores adipisci, ducimus hic ex vitae eaque eos. Accusamus, voluptatibus.
        </p>
        <button
          className="flex items-center justify-center gap-2 w-[220px] px-4 py-2 sm:px-5 sm:py-3 border font-montserrat text-base sm:text-lg leading-none bg-coral-red text-white border-coral-red rounded-full mt-6"
        >
          Shop now
          <img
            src={arrowRight}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-4 h-4'
          />
        </button>
      </div>
      <div className='relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {items.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
