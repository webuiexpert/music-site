import React, { useState } from "react";
import logo from "../assets/images/MuzicLogo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";



function Header() {
  let Links = [
    {name: "HOME", links: '/'},
    {name: "SERVICE", links: '/'},
    {name: "ABOUT", links: '/'},
    {name: "CONTACT", links: '/'},
  ]
  let [isOpen, setisOpen] = useState(false);
  return (
    <div className=" px-[25px] bg-[#20193C] py-4 shadow-md w-full">
      <div className="md:flex justify-between items-center">
        {/* logo here */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* menu here */}
        <div onClick={() => setisOpen(!isOpen)} className="absolute text-2xl top-4 cursor-pointer right-5 md:hidden">
          {
            isOpen ? <HiMenuAlt2 /> : <MdOutlineClose  />
          }
        
        </div>
{/* nav links here */}
        <ul className="text-white md:flex items-center md:pl-9">
          {
            Links.map(link => (
            <li className="my-7 md:my-0 md:ml-8 font-semibold">
              <a href="/">{link.name}</a></li> ))
          }
          <button className="md:ml-8 bg-green-400 py-1 px-4 font-semibold text-1xl rounded-lg">Get Start</button>
        </ul>
        
      </div>
    </div>
  );
}

export default Header;
