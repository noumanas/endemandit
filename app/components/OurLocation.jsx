import OurLocationImg from "../../public/assets/ourLocationImg.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png";
import UAEImg from "../../public/assets/UAEImg.png";
import KSAImg from "../../public/assets/KSAImg.png";
import PAKIMG from "../../public/assets/PAKIMG.png";
import INDImg from "../../public/assets/INDImg.png";
import EgyptImg from "../../public/assets/EgyptImg.png";

const OurLocation = () => {
  return (
    <div className="flex items-center flex-col w-full pt-9 lg:px-40 pb-9">
      <div className="px-[20px] py-20 items-center flex flex-col lg:flex-col  justify-center lg:justify-center">
        <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-center ">
          <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]">
            Our Locations
          </h1>

          <p>
            Find us at the heart of your region. Ouroffices are strategically
            located to serve you better:
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col w-full">
        <Image src={OurLocationImg} alt="map" />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-32">
        <div className="flex items-center flex-col">
          <Image src={UAEImg} alt="UAE"></Image>
          <h4>United Arab Emirates</h4>
          <p>Regal Tower, Business Bay, Dubai</p>
        </div>

        <div className="flex items-center flex-col">
          <Image src={KSAImg} alt="Kingdom of Saudi Arabia"></Image>
          <h4>Kingdom of Saudi Arabia</h4>
          <p>Prince Mamdouh bin Abdul Aziz, Riyadh</p>
        </div>

        <div className="flex items-center flex-col">
          <Image src={PAKIMG} alt="Pakistan"></Image>
          <h4>Pakistan</h4>
          <p>Sohail Center, G7, Islamabad</p>
        </div>

        <div className="flex items-center flex-col">
          <Image src={INDImg} alt="India"></Image>
          <h4>India</h4>
          <p>U1 2nd Floor, Sec 63, Noida</p>
        </div>

        <div className="flex items-center flex-col">
          <Image src={EgyptImg} alt="Egypt"></Image>
          <h4>Egypt</h4>
          <p>SamaTower, Ring Road, Cairo</p>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
