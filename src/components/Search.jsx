import React from "react";
import searchleftimg from "../assets/images/backgraphics.png";
import searchleftimg1 from "../assets/images/d1.png";
import searchleftimg2 from "../assets/images/d2.png";
import searchleftimg3 from "../assets/images/d3.png";
import searchleftimg4 from "../assets/images/d4.png";
import CountUp from 'react-countup';


function Search() {
  return (
    <div className="relative flex justify-between items-center w-full bg-[#081730] h-[45rem] mt-[-5rem] px-[5rem]">
      <div className="left-side w-[30%]">
        <img
          src={searchleftimg}
          alt=""
          className="absolute top-[2rem] left-[-47rem]  mt-[5rem]"
        />
        <img
          src={searchleftimg1}
          alt=""
          className="w-[16rem] top-[6rem] absolute"
        />
        <img
          src={searchleftimg2}
          alt=""
          className="w-[9rem] absolute top-[12.7rem] left-[7.5rem]"
        />
        <img
          src={searchleftimg3}
          alt=""
          className="w-[9rem] top-[12rem] left-[20rem] absolute"
        />
        <img
          src={searchleftimg4}
          alt=""
          className="w-[14.5rem] top-[30.8rem] left-[7rem] absolute"
        />
      </div>
      <div className="right-side flex flex-col items-center w-[70%]">
        <h1 className="text-[5vw] text-center ml-28 font-semibold">
          YOUR <span className="text-yellow-400">MUSIC</span>
        </h1>
        <div className="w-[80%] ml-64 mt-10 py-12">
          <div className="grid grid-cols-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold">
              <CountUp
              start={0} 
              end={95}
              duration={4.75}>
              </CountUp>
              %</h1>
              <p className="text-1xl">Like Songs</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                <CountUp
              start={0} 
              end={88}
              duration={2.75}
              >
              </CountUp>
              %</h1>
              <p className="text-1xl">Likes in Spotify</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                <CountUp
              start={0} 
              end={65}
              duration={3.75}
              >
              </CountUp>
             %</h1>
              <p className="text-1xl">World Wide Conserts</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                <CountUp
              start={0} 
              end={55}
              duration={5.75}
              >
              </CountUp>
              %</h1>
              <p className="text-1xl">Followers</p>
            </div>

          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Search;
