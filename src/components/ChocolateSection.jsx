import React from "react";
import ChocolateCard from "./ChocolateCard";
import Lovebites from "../assets/images/lovebites.png";
import Snoozecubes from "../assets/images/snoozecubes.png";
import Blisspops from "../assets/images/beautybombs.png";
import Beautybombs from "../assets/images/beautybombs.png";
import Snoozecubes10 from "../assets/images/snoozecubespack10.png";
import Beautybombs10 from "../assets/images/beautybombspack10.png";
import { NavLink } from "react-router-dom";

const chocolates = [
  { id: 1, name: "Lovebites", price: "150", image: Lovebites },
  { id: 2, name: "Snoozecubes", price: "150", image: Snoozecubes },
  { id: 3, name: "Blisspops", price: "150", image: Blisspops },
  { id: 4, name: "Beautybombs", price: "150", image: Beautybombs },
  {
    id: 2,
    name: "Snoozecubes (pack of 10)",
    price: "150",
    image: Snoozecubes10,
  },
  {
    id: 4,
    name: "Beautybombs (pack of 10)",
    price: "150",
    image: Beautybombs10,
  },
];

const ChocolateSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-bold p-4">Our Chocolates</h1>
      <div className="grid md:grid-cols-3">
        {chocolates.map((chocolate, index) => (
          <NavLink key={index} to={`/chocolates/${chocolate.id}`}>
            <ChocolateCard chocolate={chocolate} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ChocolateSection;
