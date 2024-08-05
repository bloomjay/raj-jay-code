import { IconArrowLeft } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  return (
    <div className="py-[124px] flex flex-col gap-[72px] items-center">
      {/* top text part */}
      <div className="w-[1320px] flex justify-between items-center">
        {/* left  */}
        <div className="w-[547px] flex flex-col gap-6">
          <h3 className="text-[#061C3D] text-[56px] font-bold leading-[60px] tracking-tight">
            What client says
          </h3>
          <p className="text-[20px] leading-[28px] text-[#061C3D] font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit.
          </p>
        </div>
        {/* right */}
        <div className="flex gap-4 ">
          {/* scroll left and right icons */}
          <span className="p-4 bg-[#F0F5FF] rounded-full">
            <IconArrowLeft size={32} className="text-[#03AA6D]" />
          </span>

          <span className="p-4 bg-[#03AA6D] rounded-full ">
            <IconArrowRight size={32} className="text-white" />
          </span>
        </div>
      </div>
      {/* testimonial boxes */}
      <div className="flex gap-[10px]">
        <TestimonialBox theme={1} />
        <TestimonialBox theme={2} />
        <TestimonialBox theme={3} />
      </div>
    </div>
  );
}

export default Testimonials;
