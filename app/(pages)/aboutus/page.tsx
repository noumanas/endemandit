import React from "react";
import { ShapingTomorrow } from "@/app/components/ShapingTomorrow";
import { GlobalReach } from "@/app/components/GlobalReach";
import {AboutContentOne} from "@/app/components/AboutContentOne"
import { Shaping } from "@/app/components/Shaping";
const page = () => {
  return (
    <div>
      <div
        className={`bg-[url(../public/assets/RectangleBackground.png)] bg-[#0f2152] py-10`}
      >
        <ShapingTomorrow />
      </div>
      <GlobalReach />
    </div>
  return <div>
    <div className={`bg-[url(../public/assets/RectangleBackground.png)] bg-[#0f2152] py-10`}>
    <ShapingTomorrow/>
    </div>
    <div className="relative bottom-0 flex flex-col justify-center items-center -top-[180px]">
    <AboutContentOne/>
    </div>
    <div>
      <Shaping/>
    </div>
  <div className="relative py-20">
  <GlobalReach/>

  </div>
  </div>;
};

export default page;
