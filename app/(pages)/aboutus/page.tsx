import React from "react";
import { ShapingTomorrow } from "@/app/components/ShapingTomorrow";
import { GlobalReach } from "@/app/components/GlobalReach";
const page = () => {
  return <div>
    <div className={`bg-[url(../public/assets/RectangleBackground.png)] bg-[#0f2152] py-10`}>
    <ShapingTomorrow/>
    </div>
    <GlobalReach/>
  </div>;
};

export default page;
