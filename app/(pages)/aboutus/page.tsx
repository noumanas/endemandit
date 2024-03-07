import React from "react";
import { ShapingTomorrow } from "@/app/components/ShapingTomorrow";
import { GlobalReach } from "@/app/components/GlobalReach";
import {AboutContentOne} from "@/app/components/AboutContentOne"
const page = () => {
  return <div>
    <div className={`bg-[url(../public/assets/RectangleBackground.png)] bg-[#0f2152] py-10`}>
    <ShapingTomorrow/>
    </div>
    <div className="relative bottom-0 left-[230px] -top-[180px]">
    <AboutContentOne/>
    </div>
  <div className="relative">
  <GlobalReach/>

  </div>
  </div>;
};

export default page;
