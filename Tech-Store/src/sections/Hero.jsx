import React from "react";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section id="home" className="max-w-screen-xl mx-auto flex flex-row max-lg:flex-col-reverse xl:flex-row justify-center xl:justify-between gap-10 p-4 xl:p-0">
      <div className="xl:w-2/5 flex max-lg:w-full flex-col justify-center ml-12 max-lg:ml-4 py-8 px-4">
        <p className="text-xl font-medium text-red-400 font-montserrat mb-4 xl:mb-8 xl:mt-0">
          Our Tech Collection
        </p>
        <h1 className="font-palanquin text-6xl xl:text-4xl sm:text-6xl xl:text-8xl leading-tight sm:leading-snug xl:leading-[82px] font-bold">
          The New Arrivals<br />
          at <span className="text-coral-red">Tech</span> Store
        </h1>
        <p className="text-gray-400 mt-2 w-2/3  max-lg:w-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          soluta rerum accusantium quo, ab dolorum quam excepturi quibusdam odit
          qui maiores adipisci, ducimus hic ex vitae eaque eos. Accusamus,
          voluptatibus.
        </p>
        <button className="flex items-center justify-center gap-2 w-[220px] px-4 py-2 sm:px-5 sm:py-3 border font-montserrat text-base sm:text-lg leading-none bg-coral-red text-white border-coral-red rounded-full mt-6">
          Shop now
          <img
            src={arrowRight}
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-4 h-4"
          />
        </button>
      </div>
      <div className="relative flex flex-col max-lg:hidden max-lg:ml-8 mr-12 mt-16 mb-4">
        <img
          src=" https://img.freepik.com/premium-vector/computer-technology-pc-screen-desktop-isolated-internet-monitor-laptop-display-digital-bu_1013341-54264.jpg"
          alt="pink headphones"
          className="object-cover relative mt-[-60px]  w-[700px] xl:w-[400px] rounded-full "

        />
       
         <img
          src="https://img.freepik.com/premium-vector/red-pair-headphones-with-red-band_410516-83019.jpg"
          alt="pink headphones"
          className="object-cover w-[700px] mt-[-180px] ml-[-200px] xl:w-[400px] border border-8 border-white z-10 rounded-full "

        />
      </div>
    </section>
  );
};

export default Hero;
