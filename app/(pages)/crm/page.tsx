import React from "react";
import WeAreHereToHelp from "../../components/WeAreHereToHelp";
import OurLocation from "../../components/OurLocation";
import SendUsaMessage from "../../components/SendUsaMessage";
import BuildLasting from "@/app/components/BuildLasting";
import StrategicSolutions from "@/app/components/StrategicSolutions";
import { HarnessthePower } from "@/app/components/HarnessthePower";
const page = () => {
  return (
    <div>
      <BuildLasting />
      <div className={`bg-[url(../public/assets/backgroundAugment.png)]`}>
      <HarnessthePower/>
      </div>
    <StrategicSolutions/>
    </div>
  );
};

export default page;
