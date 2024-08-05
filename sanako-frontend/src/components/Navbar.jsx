import React from "react";

const Navbar = () => {
  return (
  
      <nav className="flex justify-between  items-center p-6 h-[70px] fixed w-full bg-white z-10">
      <img src="./mainlogo.svg" alt="" className="w-[140px] h-[20px]" />
      <div className="bg-[#03AA6D] text-white px-6 py-2 rounded-full font-normal tracking-tighter">
        Contact Us
      </div>
    </nav>

    
  );
};

export default Navbar;
