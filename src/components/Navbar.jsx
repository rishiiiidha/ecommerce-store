import React, { useState } from "react";
import NutrachocoIcon from "../assets/icons/nutrachoco.png";
import whishlistIcon from "../assets/icons/whishlist.svg";
import cartIcon from "../assets/icons/cart.svg";
import loginIcon from "../assets/icons/login.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className="font-display text-[20px] text-[#553311] w-full flex lg:justify-between justify-between items-center z-100 px-4  md:px-8 ">
      <NavLink to="/">
        <img src={NutrachocoIcon} alt="" className="h-16 md:h-24" />
      </NavLink>
      <div className="flex items-center">
        <div className="hidden md:flex md:ml-8">
          <NavLink to="/our-range" className="px-4 hover:font-medium">
            Our Range
          </NavLink>
          <NavLink to="/about-us" className="px-4 hover:font-medium">
            About Us
          </NavLink>
          <NavLink to="/shop-all" className="px-4 hover:font-medium">
            Shop All
          </NavLink>
          <div
            className="px-4 mx-2 relative hover:bg-white"
            onMouseEnter={() => setShowDropdown(true)}
          >
            Shop By Concern
            {showDropdown && (
              <div
                className="absolute bg-white font-display mt-2 py-2 px-1 left-6 right-4 text-[14px] font-semibold border-t-4 border-t-[#A6896C] z-50"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink
                  to="/chocolates/1"
                  className="block px-4 py-3 text-[#9b7045]"
                >
                  Sexual desire
                </NavLink>
                <NavLink
                  to="/chocolates/2"
                  className="block px-4 py-3 text-[#9b7045]"
                >
                  Sound Sleep
                </NavLink>
                <NavLink
                  to="/chocolates/3"
                  className="block px-4 py-3 text-[#9b7045]"
                >
                  Women Health
                </NavLink>
                <NavLink
                  to="/chocolates/4"
                  className="block px-4 py-3 text-[#9b7045]"
                >
                  Skin & Hair nutrition
                </NavLink>
              </div>
            )}
          </div>
          <div className="px-4 hover:font-medium">Value Packs</div>
          <div className="px-4 hover:font-medium">Contact Us</div>
        </div>
      </div>
      <div className="flex items-center md:hidden">
        {/* Hamburger menu icon for mobile */}
        <button
          className="flex items-center px-3 py-2 border rounded text-[#553311] border-[#553311] hover:text-white hover:bg-[#553311]"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <NavLink to="/wishlist">
          <img className="px-4" src={whishlistIcon} alt="" />
        </NavLink>
        <NavLink to="/#">
          <img className="px-4" src={cartIcon} alt="" />
        </NavLink>
        <NavLink to="/#">
          <img className="px-4" src={loginIcon} alt="" />
        </NavLink>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col">
            <NavLink
              to="/our-range"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setShowMenu(false)}
            >
              Our Range
            </NavLink>
            <NavLink
              to="/about-us"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/shop-all"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setShowMenu(false)}
            >
              Shop All
            </NavLink>
            <div className="relative">
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-200 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Shop By Concern
              </button>
              {showDropdown && (
                <div className="bg-white font-display py-2 text-[14px] font-semibold">
                  <NavLink
                    to="/chocolates/1"
                    className="block px-4 py-3 text-[#9b7045]"
                    onClick={() => setShowMenu(false)}
                  >
                    Sexual desire
                  </NavLink>
                  <NavLink
                    to="/chocolates/2"
                    className="block px-4 py-3 text-[#9b7045]"
                    onClick={() => setShowMenu(false)}
                  >
                    Sound Sleep
                  </NavLink>
                  <NavLink
                    to="/chocolates/3"
                    className="block px-4 py-3 text-[#9b7045]"
                    onClick={() => setShowMenu(false)}
                  >
                    Women Health
                  </NavLink>
                  <NavLink
                    to="/chocolates/4"
                    className="block px-4 py-3 text-[#9b7045]"
                    onClick={() => setShowMenu(false)}
                  >
                    Skin & Hair nutrition
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setShowMenu(false)}
            >
              Value Packs
            </NavLink>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setShowMenu(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
