import React from "react";
import Image from "next/image";
import openZeppeline from "../../public/assets/openZeppeline.png"
import oracle from "../../public/assets/oracle.png"
import morpheus from "../../public/assets/morpheus.png"
import samsung from "../../public/assets/samsung.png"
import monday from "../../public/assets/monday.png"
import segment from "../../public/assets/segment.png"

export function CompaniesHelp() {
    

  return (
    <div className="flex flex-col items-center justify-center py-9">
      <div className='py-9 px-9 '>
        <p className="text-[#102356] font-bold text-[18px]">Companies we have helped grow</p>
      </div>
      <div className="py-9 px-9 flex gap-10">
        <Image src={openZeppeline} height={17.83} alt="openZeppeline" />
        <Image src={oracle}  height={17.83} alt="oracle" />
        <Image src={morpheus}  height={17.83} alt="morpheus" />
        <Image src={samsung}  height={17.83} alt="samsung" />
        <Image src={monday}  height={17.83} alt="monday" />
        <Image src={segment}  height={17.83} alt="segment" />





      </div>
    </div>
  );
}
