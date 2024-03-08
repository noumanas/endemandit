import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import IconCheck from "../../../public/assets/IconCheck.png"
interface AboutContentOneProps {
  companylogo: StaticImageData;
  peragraph : string;
  heading: string;
  stepheadingOne : string;
  stepperagrapOne:string;
  stepheadingTwo : string;
  stepperagrapTwo:string;
}

export function HarnessSlider(props: AboutContentOneProps) {
  const { companylogo,peragraph, heading,stepheadingOne,stepperagrapOne,stepheadingTwo,stepperagrapTwo } = props;

  return (
   <div className="bg-[#fff] rounded-lg lg:w-[550px]">
    <div className="px-10 py-10">
        <Image src={companylogo} alt="CompanyLogo"/>
        <p className="text-[#102356] text-[22px] mt-10">{peragraph}</p>
        <h1 className="text-[32px] text-[#102356] font-bold">{heading}</h1>
        <div className="flex flex-row justify-center items-start py-10">
          
          <div className="h-[100%] w-[100%]">
          <Image src={IconCheck} height={44} width={44} alt="checkbox"/>
          </div>
         
          <div>
            <h1 className="text-[24px] text-[#102356] font-bold">{stepheadingOne}</h1>
            <p  className="text-[#102356] text-[18px]">{stepperagrapOne}</p>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <div className="h-[100%] w-[80%]">
          <Image src={IconCheck} height={44} width={44} alt="checkbox"/>
          </div>
          <div>
            <h1 className="text-[24px] text-[#102356] font-bold">{stepheadingTwo}</h1>
            <p className="text-[#102356] text-[18px]">{stepperagrapTwo}</p>
          </div>
        </div>
    </div>
   </div>
  );
}
