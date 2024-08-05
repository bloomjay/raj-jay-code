import React from "react";

function Features() {
  return (
    <div className="py-[60px] px-[100px] ">
      <div className="w-[1322px] flex gap-[136px] mx-auto items-center justify-center">
        {" "}
        {/* left-section */}
        <div className="flex flex-col gap-12 w-[536px]">
          {/* top-left text */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#1D2026]/90 text-[40px] font-semibold leading-[48px] tracking-[-0.4px]">
              Why Sanako is best <br /> Language learning Tool
            </h3>
            <p className="text-[#1E1E2F]/90 leading-[26px]">
              Cras At Pellentesque Eros. Nullam Vitae Sapien Et Felis Eleifend
              Luctus. Nam Ac Dui Cursus, Efficitur Ante Sed, Tempor Sapien.
              Praesent Nec Mattis Enim. Mauris A Laoreet Purus.
            </p>
          </div>
          {/* bottom-left text */}
          <div className="p-[32px] bg-[#F5FFFB] ">
            <div className="flex gap-5">
              {/* icon */}

              <img src="./globe.svg" alt="" className="w-[42px] h-[42px] " />

              {/* text */}
              <div className="flex flex-col gap-2">
                <p className="text-[#061C3D]/90 text-xl font-bold leading-[28px] ">
                  Looking for Help Pages?
                </p>
                <p className="text-[#1E1E2F]">
                  Using our products but facing an issue? Check out our help
                  site for help articles and tutorials.
                </p>
              </div>
            </div>
            {/* horizontal line */}
            <div className="w-[472px] h-[1px] bg-[#061C3D] my-[32px] opacity-10"></div>
            <div className="flex gap-5">
              {/* icon */}

              <img src="./logo2s2.svg" alt="" className="w-[42px] h-[42px] " />

              {/* text */}
              <div className="flex flex-col gap-2">
                <p className="text-[#061C3D]/90 text-xl font-bold leading-[28px] ">
                  How To Buy Sanako Products?
                </p>
                <p className="text-[#1E1E2F] capitalize">
                  Here’re the steps to follow when you are ready to buy Sanako
                  products or to contact your local Sanako reseller.
                </p>
              </div>
            </div>
            {/* horizontal line */}
            <div className="w-[472px] h-[1px] bg-[#061C3D] my-[32px] opacity-10"></div>
            <div className="flex gap-5">
              {/* icon */}

              <img src="./voice.svg" alt="" className="w-[42px] h-[42px] " />

              {/* text */}
              <div className="flex flex-col gap-2">
                <p className="text-[#061C3D]/90 text-xl font-bold leading-[28px] ">
                  Searching for Teaching Tips?
                </p>
                <p className="text-[#1E1E2F] leading-[26px] capitalize">
                  Find free resources from our blog and incorporate the best
                  practices into your language teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right-section */}
        <div>
          <img src="/sec1img.png" alt="" className="w-[648px]" />
        </div>
      </div>
    </div>
  );
}

export default Features;
