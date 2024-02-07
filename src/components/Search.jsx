import React from "react";
import CountUp from 'react-countup';
import searchimg from "../assets/images/music-sec-img.png"


function Search() {
  return (
    <div className="relative lg:flex justify-center lg:flex-row items-center w-full bg-[#081730] h-[auto] mt-[-5rem] pb-[2rem]">
      <div className="left-side lg:w-[50%] w-[100%] pt-[5rem]">

        <img src={searchimg} alt="" />
      </div>
      <div className="right-side flex flex-col items-center lg:w-[50%]">
        <h1 className="text-[5vw] text-center  font-semibold">
          YOUR <span className="text-yellow-400">MUSIC</span>
        </h1>
        <div className="lg:w-[100%]  mt-10 py-12">
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
