import rightArrowWhite from "../../public/assets/rightArrowWhite.png";
import Image from "next/image"
import harnessContainer from "../../public/assets/harnessContainer.png"
import Imagecontainer2 from "../../public/assets/Imagecontainer2.png"

export function Harness(){
    return(
        <div className="pt-9 lg:px-40">
            <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[72px]">Harness Your Unique Potential</h1>
                    <p className="text-[#102356] font-regular text-[18px] leading-[30px]">Our strength lies in crafting bespoke transformation solutions tailored to your organization's distinct needs, ensuring a seamless and effective journey towards digital excellence.</p>
                    <button className="mt-10 bg-[#102356] flex font-medium h-[60px] w-[228px] items-center justify-center rounded-lg text-[#FFFFFF]" >
                            Get Started
                            <Image src={rightArrowWhite} className="ml-2" height={14} width={14} alt="rightArrow"/>
                    </button>
                </div>
               
                {/* <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/> */}
                <Image src={harnessContainer} alt="container" width={700} height={549} className="lg:block mb-40 mt-20"/>


            </div>
        </div>
    )
}