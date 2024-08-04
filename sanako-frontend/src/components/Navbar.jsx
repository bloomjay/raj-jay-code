import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center p-6">
      <img
        src="https://j7i7x4q6.rocketcdn.me/wp-content/uploads/2022/08/Sanako-Logo.svg"
        alt=""
        className="w-[140px] h-[20px]"
      />
      <div className="bg-[#03AA6D] text-white px-6 py-2 rounded-full font-normal">
        Contact Us
      </div>
    </nav>
  );
};

export default Navbar;
