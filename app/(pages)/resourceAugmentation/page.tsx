import React from "react";
import EmpoweringComponent from "../../components/ResorceAugmentation/EmpoweringDigitalTransformation";
import MaximiseEfficiency from "../../components/ResorceAugmentation/MaximizeEfficiency";
import WeProvideDiverse from "../../components/ResorceAugmentation/WeProvideDiverse";

const page = () => {
  return (
    <div>
      <div>
        <EmpoweringComponent />
      </div>
      <div className={`bg-[url(../public/assets/backgroundAugment.png)]`}>
        <MaximiseEfficiency />
      </div>
      <div>
        <WeProvideDiverse />
      </div>
    </div>
  );
};

export default page;
