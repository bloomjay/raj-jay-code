import React from "react";

function getTheme(no) {
  if (no === 1) {
    return "#F5F6F7";
  } else if (no == 2) {
    return "#FFEFEF";
  } else if (no == 3) {
    return "#E7F5E8";
  }
}

function TestimonialBox({ theme }) {
  const bg = getTheme(theme);

  return (
    <div
      className={`w-[428px]  h-[388px] rounded-xl `}
      style={{ backgroundColor: bg }}
    >
      <div className="p-10 flex flex-col gap-[32px]">
        <div className="flex gap-3">
          <div className={`w-[48px] h-[48px] rounded-full bg-[#C4C4C4]`}></div>
          <div className="flex flex-col gap-1">
            <span className="text-[#061C3D] ">Name</span>
            <p className="text-[#42526B] text-[14px]">
              Sales Officer of <span className="text-[#03AA6D]">Netflix</span>{" "}
            </p>
          </div>
        </div>
        <div className="text-[#061C3D] text-[18px] font-light leading-[26px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </div>
        <div className="text-[#E34444] text-xl font-bold">LOGO</div>
      </div>
    </div>
  );
}

export default TestimonialBox;
