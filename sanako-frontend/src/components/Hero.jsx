import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

function Hero() {
  return (
    <div className="bg-[#F8F8FB] px-[120px] pb-[60px] pt-[130px]  ">
      {" "}
      <div className=" flex flex-col gap-[120px] items-center justify-center  mx-auto text-[#1E1E2F] font-light w-[1290px]  ">
        {/* top part */}
        <div className="flex gap-40 ">
          {/* left side  */}
          <div className="flex flex-col items-start gap-6 ">
            <div className="flex items-center gap-[10px]">
              <div className="w-10 h-[1px] bg-[#03AA6D]"></div>
              <p>A New Era Of Global Communication</p>
            </div>

            <div className="text-[53px] font-[800] leading-[64px]">
              <h2>BE A BETTER </h2>
              <h2>LANGUAGE TEACHER</h2>
              <h2>WITH SANAKO!</h2>
            </div>

            <div className="flex gap-5  ">
              <div className="h-[100%] w-[1.5px] bg-[#03AA6D] "></div>
              <p>
                Sanako Connect Helps Second Language Teachers To Develop Their
                <p>Students' Speaking, Pronunciation and Listening Skills.</p>
              </p>
            </div>

            <button className="px-6 py-4 bg-[#03AA6D] text-white flex items-center justify-center ">
              Discover Sanako Connect 
              <IconArrowRight className="inline ml-2" />
            </button>
          </div>
          {/* right side */}
          <div>
            {/* empty gray div for image */}
            <div className="bg-[#D9D9D9] w-[568px] h-[397px] border"></div>
          </div>
        </div>
        {/* bottom part / logo */}
        <div className="flex justify-between items-center w-full">
          <div className="w-[280px] text-[18px] font-semibold text-[#4B4B59] leading-[normal]">
            Finnish ed-tech | 114 <br />
            countries, 50,000+ <br />
            classrooms
          </div>
          <div className="w-10 h-[1px] bg-black"></div>
          <img src="/turunYliopisto.svg" alt="" />
          <img src="/california.svg" alt="" />
          <img src="/lmu.svg" alt="" />
          <img src="ntu.svg" alt="" />
          <img src="leeds.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
