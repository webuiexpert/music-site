import React from "react";
import navlogo from "../assets/images/MuzicLogo.png";
import CenterMenu from "./CenterMenu";

function Header() {
    const buttonStyle = "border-[2px] roudnded-[10px] px-[25px] py-[7px] border-[#232a4e]"
  return (
    <div className="Header flex justify-between bg-[#081730] items-center lg:px-[5rem] px-12 py-5">
      <img src={navlogo} alt="logo" />
      <CenterMenu />
      <div className="buttons flex gap-2">
        <button className={buttonStyle + 'hover:bg-[#ae1d1d]'}>Sign up</button>
        <button className={buttonStyle}>Log in</button>
      </div>
    </div>
  );
}

export default Header;
