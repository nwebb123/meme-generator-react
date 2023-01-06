import React from "react";
import logo from "../src/assets/title-logo.png";

function Header() {
  return (
    <header className="px-5 py-8 bg-gradient-to-br from-purple-800 to-purple-400">
      <img src={logo} alt="Meme Generator Logo" className="absolute h-8" />
      <div className="flex justify-end">
        <h4 className="text-white pr-5">React Course - Project 3</h4>
      </div>
    </header>
  );
}

export default Header;
