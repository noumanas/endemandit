import React from "react";
import MaximiseEfficiency from "../../../public/assets/MaximiseEfficiency.png";
import Image from "next/image";
import ForwardVector from "../../../public/assets/ForwardVector.png";

const MaximizeEfficiency = () => {
  const features = [
    {
      id: 1,
      title: "Tap into Global Expertise",
      description:
        "Access a world of specialized skills and expertise, vital for projects needing niche or advanced tech insights.",
      imageSrc: ForwardVector,
    },
    {
      id: 2,
      title: "Cut Costs, Not Corners",
      description:
        "With our Resource Augmentation services, you save on recruitment, training, and benefits costs associated with full-time hires while improving the quality of your human resource.",
      imageSrc: ForwardVector,
    },
    {
      id: 3,
      title: "Scale Up or Down on Demand",
      description:
        "Need more hands on deck? Or fewer? No problem.You can easily adjust your workforce size and skillset to match your currentproject demands.",
      imageSrc: ForwardVector,
    },
    {
      id: 4,
      title: "Focus Where It Matters",
      description:
        "Free up your core team to focus on what they do best. Amplify productivity and drive towards your primary business goals.",
      imageSrc: ForwardVector,
    },
    {
      id: 5,
      title: "Accelerate Your Hiring Process",
      description:
        "Forget the long hiring cycles. EnDemand IT’s Resource Augmentation services let you fill roles fast, ensuring your projects keep moving without a hitch.",
      imageSrc: ForwardVector,
    },
    {
      id: 6,
      title: "Stay Ahead of the Curve",
      description:
        "Keep your business sharp and competitive. We will get the resources you need to innovate faster and hit the market sooner.",
      imageSrc: ForwardVector,
    },
  ];

  return (
    <div className="flex flex-col xl:px-60 md:px-20 py-20 justify-center w-full">
      <h1 className="font-extrabold text-white text-3xl md:text-5xl lg:text-7xl mb-5">
        Maximize Efficiency and Innovation
      </h1>
      <p className="text-base md:text-lg text-white font-normal mb-10">
        Our Resource Augmentation services propel businesses forward, focusing
        resources where they matter most. Discover unparalleled benefits—access
        to a global talent pool for niche skills, flexible staffing solutions,
        cost-efficient models, and a swift hiring process that accelerates your
        time-to-market.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch w-full">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col mb-8">
                <div className="h-11 w-11 rounded-xl bg-[#ABE03C] flex justify-center items-center mb-4">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    height={13}
                    width={13}
                  />
                </div>
                <h2 className="text-white text-lg font-bold mb-2">
                  {feature.title}
                </h2>
                <p className="text-white text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src={MaximiseEfficiency}
            alt="MaximiseEfficiency"
            width={546}
            height={364} // Adjust the height as needed to maintain the aspect ratio
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default MaximizeEfficiency;
