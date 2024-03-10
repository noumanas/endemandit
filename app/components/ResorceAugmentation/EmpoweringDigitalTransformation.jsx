import Image from "next/image";
import EmpoweringImg from "../../../public/assets/EmpoweringImg.png";
import rightArrow from "../../../public/assets/rightArrow.png";

const WeAreHereToHelp = () => {
  return (
    <div className="flex flex-col xl:py-40 md:px-20 md:py-20 justify-center w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
          <h1 className="font-extrabold text-4xl lg:text-7xl text-[#102356] leading-none mb-4">
            Empowering
          </h1>
          <h1 className="font-extrabold text-4xl lg:text-7xl text-[#102356] leading-none mb-4">
            Digital Transformation
          </h1>
          <h2 className="font-semibold mt-12 text-2xl lg:text-3xl text-[#102356] mb-4">
            Accelerate Your Journey with Cutting-Edge Resource Augmentation
          </h2>
          <p className="text-[#4A4A4A] mt-5 text-lg leading-relaxed mb-8 max-w-full lg:max-w-xl">
            In the fast-paced world of digital evolution, {"don't"} let resource
            shortages hinder your progress. {"EnDemand's"} smart Resource
            Augmentation ensures a smooth and rapid transition by planning ahead
            and empowering your transformation journey with the right expertise,
            at the right time and cost.
          </p>
          <button className="bg-accent flex items-center justify-center h-14  sm:w-80 rounded-lg text-[#102356]  bg-[#ABE03C] font-medium">
            Start Filling Talent Gaps Now
            <span className="inline-block ml-2">
              <Image src={rightArrow} height={14} width={14} alt="rightArrow" />
            </span>
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-0">
          <Image
            src={EmpoweringImg}
            alt="Empowering Digital Transformation"
            width={533}
            height={"auto"}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default WeAreHereToHelp;
