import React from 'react'
import chocolateMan from "../assets/images/chocolateman.png";
import Human from "../assets/images/human.png";


const AboutMidpage = () => {
  return (
    <div className="flex overflow-hidden  flex-col justify-center relative  bg-black bg-opacity-80  w-full font-bold text-center text-white  h-[670px] max-md:max-w-full font-display">
      <img
        loading="lazy"
        src={chocolateMan}
        className="object-cover absolute inset-0 size-full -z-10"
      />
      <div className="flex flex-col justify-center">
        <div className="overflow-hidden px-20 pt-12 pb-2.5 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-bold text-white capitalize  max-md:max-w-full">
                <div className=" text-left xl:text-7xl lg:text-6xl md:text-5xl text-wrap text-4xl">
                  Crafted from Nature, For Your Well-being
                </div>
                <div className="flex flex-col ">
                  <div className="mt-18 md:mt-24 md:text-3xl text-2xl leading-10 text-left">
                    Discover the Purity and Power of Organic Ingredients in
                    Every
                  </div>
                  <div className="mt-7 text-base text-[19px] font-normal w-3/4 max-md:max-w-full text-left">
                    In the heart of metropolitan India, a revolution blossoms;
                    where tradition meets innovation, and wellness is woven into
                    every bite. Welcome to Nutrachoco, where we redefine
                    indulgence with a touch of nature’s best gifts.
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-col md:ml-5 md:w-[35%] w-[40%] absolute bottom-0 right-0  sm:block mr-0 ">
              <img
                loading="lazy"
                src={Human}
                className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMidpage

