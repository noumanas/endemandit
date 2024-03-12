import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png";
import WeAreHereToHelpImg from "../../public/assets/WeAreHereToHelp.png";
import StrategicSolutionsImage from "../../public/assets/StrategicSolutions.png"
const StrategicSolutions = () => {
  return (
    <div className="pt-9 lg:px-40">
      <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center">
      <div className="w-2/4">
          <Image
            src={StrategicSolutionsImage}
            alt="container"
            width={705}
            height={620}
            // className="lg:block mb-40 mt-20"
          />
        </div>
        <div className="w-2/4	 text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[55px] leading-none">
          Strategic Solutions
          </h1>
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[55px] leading-none">
          and Expert Staff
          </h1>
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[55px] leading-none">
          Augmentation for a
          </h1>
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[55px] leading-none">
          Competitive Edge
          </h1>
        
          {/* <h2 className="font-bold text-[36px] font-Inter text-[#102356] lg:text-[36px]">
          Your CRM Enabler and 
Strategist in the Middle East
          </h2> */}
           <p className="text-[#102356] font-regular text-[18px] leading-[30px] mt-6">
           At EnDemand IT, we recognize that a robust CRM strategy is complemented by exceptional talent. That&apos s why, along with connecting you with the best CRM software, we also specialize in staff augmentation tailored to CRM expertise. Our approach 
ensures that you not only have access to leading CRM solutions but also the skilled professionals who can 
drive these platforms to their full potential.
          </p>

    
        </div>

       
      </div>
    </div>
  );
};

export default StrategicSolutions;
