import React from 'react'

function Feature(props) {
  return (
  <div className="box rounded-lg w-[350px] h-[200px] flex flex-col justify-center items-center px-[25px] py-5">
    <div className="feature-box-img bg-[#081730] p-4 w-[80px] h-auto my-4 rounded-xl"> 
    <img className="" src={props.icon} alt="" />
   </div>
    <h1 className="font-bold text-[18px]">{props.title}</h1>
    <p className='w-[80%] text-center'>{props.para}</p>
    <p className='w-[80%] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore!</p>
    <p className="text-left underline text-[#E801D0] cursor-pointer hover:text-white duration-75">Learn More</p>
  </div>
    )
}

export default Feature