import React from "react";
import Vector from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex align-center h-[65px] rounded-lg items-center bg-gradient-to-r from-[#672280] to-[#A626D3] justify-around">
      <div className="flex">
        <img src={Vector} alt="logo" className="w-[31px] h-[26px] mr-3" />
        <h1 className="text-white font-medium">Meme Generator</h1>
      </div>
      <p className="text-white font-normal text-sm">React Course - Project 3</p>
    </header>
  );
};

export default Header;
