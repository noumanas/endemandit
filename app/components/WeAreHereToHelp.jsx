import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png";
import WeAreHereToHelpImg from "../../public/assets/WeAreHereToHelp.png";

const WeAreHereToHelp = () => {
  return (
    <div className="pt-9 lg:px-40">
      <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center">
        <div className="w-2/4	 text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[72px] leading-none">
            {"We're"} Here
          </h1>
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[72px] leading-none">
            to Help
          </h1>

          <h2 className="font-bold text-[36px] font-Inter text-[#102356] lg:text-[36px]">
            Connect with Us for Innovative IT Solutions and Services
          </h2>

          <p className="text-[#102356] font-regular text-[18px] leading-[30px] ">
            {"Whetheryou're"} seeking to transform your business digitally,
            require specialized staffaugmentation, or just want to learn more
            about our services, EnDemand {"IT's"} teamis ready to assist you.
            Reach out to us through any of the following channels, and {"let's"}
            begin crafting your success story today.
          </p>
          <button className="mt-10 bg-[#ABE03C] flex font-medium h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]">
            Get Started
            <Image
              src={rightArrow}
              className="ml-2"
              height={14}
              width={14}
              alt="rightArrow"
            />
          </button>
        </div>

        <div className="w-2/4">
          <Image
            src={WeAreHereToHelpImg}
            alt="container"
            width={705}
            height={620}
            // className="lg:block mb-40 mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default WeAreHereToHelp;
