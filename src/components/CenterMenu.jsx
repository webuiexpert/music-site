import React from "react";

function CenterMenu() {
    const liststyle = "hover:cursor-pointer"
  return (
    <div className="menu lg:flex hidden">
      <ul className="flex gap-[3rem] w-[100%]">
        <li className={liststyle}>Home</li>
        <li className={liststyle}>About</li>
        <li className={liststyle}>Performer</li>
        <li className={liststyle}>Event Shedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
