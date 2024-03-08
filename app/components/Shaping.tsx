import React from "react";
import Image from "next/image";
import ourvison from "../../public/assets/shaopingGradient.png"

export function Shaping() {
  return (
   <div className="flex bg-[#102356]">
    <div className="px-40 py-40">
        <p className="text-[#ABE03C] text-[18px]">OUR VISION</p>
        <h1 className="text-[#FFFFFF] text-[72px] font-bold">Shaping the Future of Digital Excellence</h1>
        <p className="text-[#FFFFFF] text-[18px]">As we look to the future, EnDemand IT ispoised to continue shaping the landscape of digital excellence in the MiddleEast. Our vision is to be the leading partner for businesses seeking totransform and thrive in the digital age.</p>
    </div>
    <div className={`bg-[url(../public/assets/ourvison.png)]  lg:w-[2732px] lg:h-[839px]`}>
        <Image className="h-[100%]" src={ourvison} alt="ourvison"/>
    </div>
   </div>
  );
}
