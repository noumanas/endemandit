import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import Imagecontainer from "../../public/assets/Imagecontainer.png"
import Imagecontainer2 from "../../public/assets/Imagecontainer2.png"
import strokeline from "../../public/assets/strokeline.png"

export function ShapingTomorrow(){
    return(
        <div className="pt-9 lg:px-40 py-40">
            <div className="px-[20px] text-center items-center flex flex-col lg:flex-row  justify-center lg:text-center ">
                <div className="text-center lg:text-center items-center flex flex-col justify-center lg:items-center ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#ffffff] lg:text-[72px]">Shaping Tomorrow with </h1>
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#ffffff] lg:text-[72px]">EnDemand IT’s Expertise</h1>
                    <Image className="relative" src={strokeline} width={250} alt="line"/>
                    <p className="text-[#fff] font-bold text-[36px] leading-[36px] py-10">Crafting Digital Excellence Across Borders</p>
                    <p className="text-[#fff] font-regular text-[18px] leading-[30px]">In the heart of the Middle East&apos;s rapidlyevolving digital landscape, EnDemand IT stands as a beacon of innovation andexcellence. Founded on the principles of technological advancement andcustomer-centric solutions, our mission is to empower businesses across SaudiArabia, UAE, and Qatar with cutting-edge digital transformation and effectiveresource augmentation.</p>
                    {/* <button className="mt-10 bg-[ABE03C] flex font-medium bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]" >
                            Explore our services
                            <Image src={rightArrow} className="ml-2" alt="rightArrow"/>
                    </button> */}
                </div>
               
                {/* <Image src={Imagecontainer2} alt="container" width={700} height={549} className=" lg:block mb-40 mt-20"/> */}


            </div>
        </div>
    )
}