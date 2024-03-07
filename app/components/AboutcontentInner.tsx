import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface AboutContentOneProps {
  Peragraph: string;
  heading: string;
  lastPeragraph: string;
  image: StaticImageData;
}

export function AboutcontentInner(props: AboutContentOneProps) {
  const { Peragraph, heading, lastPeragraph, image } = props;

  return (
    <div className={`lg:bg-[url(../public/assets/footerbackground.png)] bg-[#102356] flex justify-center items-center border-2 border-[#ABE03C] rounded-lg h-[634px] lg:w-[1120px] ml-[30px] mt-[30px]`}>
      <div className='py-9 px-9 '>
        <p className="text-[#ABE03C] font-bold text-[18px]">{Peragraph}</p>
        <h1 className="text-[#FFFFFF] text-[72px] font-bold ">
          {heading}
        </h1>
        <p className="text-[#FFFFFF] text-[18px]">{lastPeragraph}</p>
      </div>
      <div className="py-9 px-9">
        <Image src={image} alt="container" />
      </div>
    </div>
  );
}
