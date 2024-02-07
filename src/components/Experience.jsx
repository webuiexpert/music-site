import React from "react";
import pathimg from "../assets/images/Path 318.png";
import Featureimg from "../assets/images/Group 2.png"
import Featureimg1 from "../assets/images/Group 4.png"
import Featureimg2 from "../assets/images/music icon.png"
import Feature from "./Feature";

function Experience() {
  return (
    <div className="bg-[#020917] w-full mt-[-5rem] pt-[10rem] h-[45rem] flex-col relative z-[2] rounded-b-[5rem]">
      <div className="pathimg w-[100%] flex flex-col items-center justify-center">
        <img src={pathimg} alt="" className="w-[5rem]  h-[10px]" />
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
          <span>An Amazing App Can Change Your Daily Life</span>
          <span>
            <b>Music Experience</b>
          </span>
        </div>
        <div className="features flex justify-between gap-5 mt-10 items-center px-[5rem]">
          <Feature icon={Featureimg}  title="For Live Music"/>
          <Feature icon={Featureimg1} title="For Daily Music" />
          <Feature icon={Featureimg2} title="For Artist"/>
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
