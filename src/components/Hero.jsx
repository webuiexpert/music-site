import React from "react";
import DownloadApps from "./DownloadApps";
// import backgraphics from '../assets/images/backgraphics.png'
// import p1 from '../assets/images/p 1.png'
// import p2 from '../assets/images/p 2.png'
// import p3 from '../assets/images/p 3.png'
// import p4 from '../assets/images/p 4.png'
import heroimg from "../assets/images/hero-sec-img.png"

function Hero() {
  return (
    <div className="wrapper bg-[#081730] w-full flex lg:flex-row flex-col  h-[auto]  px-[25px] justify-between lg:items-center items-start relative z-[3]">
      <div className="heading flex flex-col justify-center items-start text-[3rem] py-3rem lg:w-1/2">
        <span className="text-[32px]">Experience The</span>
        <span className="text-[48px]"><b>Best Quality Music</b></span>
        <p className="text-[18px] text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          similique odio perferendis ullam iusto odit aperiam saepe fugiat
          consectetur ducimus?
        </p>
        <span className="text-[18px] mt-12 mb-2">
            Download now on IOS and Android
        </span>
        <DownloadApps />
      </div>
      <div className="images  relative lg:w-1/2">
        {/* <img src={backgraphics} alt="" className="absolute top-[-8rem] left-[19rem]" />
        <img src={p1} alt="" className="absolute top-[-15rem] h-[30rem] left-[13rem]"/>
        <img src={p2} alt="" className="absolute top-[54px] left-[229px] w-[158px]" />
        <img src={p3} alt="" className="absolute top-[9rem] left-[13.1rem] w-[4rem]" />
        <img src={p4} alt="" className="absolute top-[5.1rem] left-[9.2rem]  w-[11rem] opacity-65" /> */}
        <img src={heroimg} alt="" />

      </div>
    </div>
  );
}

export default Hero;
