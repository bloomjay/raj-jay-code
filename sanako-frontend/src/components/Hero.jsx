import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

function Hero() {
  return (
    <div className="mx-auto">
      {" "}
      <div className="px-[120px] py-[60px] bg-[#F8F8FB] text-[#1E1E2F] font-light  flex flex-col gap-[120px] justify-center ">
        {/* top part */}
        <div className="flex gap-40 w-screen">
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

            <button className="px-6 py-4 bg-[#03AA6D] text-white">
              Discover Sanako Connect <IconArrowRight className="inline ml-2" />
            </button>
          </div>
          {/* right side */}
          <div>
            {/* empty gray div for image */}
            <div className="bg-[#D9D9D9] w-[530px] h-[100%] border"></div>
          </div>
        </div>
        {/* bottom part / logo */}
        <div>
          <div className="w-[280px] text-[18px] font-bold text-[#4B4B59] ">
            Finnish ed-tech | 114 countries, 50,000+ classrooms
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
