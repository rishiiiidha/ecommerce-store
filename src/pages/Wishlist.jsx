import * as React from "react";
import love from '../assets/images/love.png'
import bliss from '../assets/images/bliss.png'
import beauty from '../assets/images/beauty.png'
import snooze from '../assets/images/snooze.png'
import { NavLink } from "react-router-dom";



const products = [
  {
    id:4,
    name: "BEAUTYBOMS",
    image:beauty
  },
  {
    id:3,
    name: "Blisspops",
    image:bliss
  },
  {
    id:2,
    name: "SnoozeCubes",
    image: snooze
  },
  {
    id:1,
    name: "LOVEBITES",
    image:love
  },
];

function ProductCard({ name, image ,id}) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center items-center text-base font-bold text-center uppercase whitespace-nowrap text-yellow-950 max-md:mt-10">
        <NavLink to={`/chocolates/${id}`}>
          <img
            loading="lazy"
            src={image}
            alt={`${name} product image`}
            className=" aspect-square w-[207px] h-[207px] object-cover"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </NavLink>
        <div className="mt-5">{name}</div>
      </div>
    </div>
  );
}
const Wishlist = () => {
  return (
    <div className="font-display flex flex-col justify-center bg-white">
      <section className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-24 mb-48 max-w-full w-[897px] max-md:my-10">
        
          <h1 className="mt-6 text-6xl font-bold text-center capitalize leading-[55px] text-yellow-950 w-[585px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Wishlist
          </h1>
          <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
