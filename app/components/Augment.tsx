import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import Workforce from "../../public/assets/Workforce.png"

export function Augment(){
    return(
        <div className="pt-9 lg:px-40">
            <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#FFFFFF] lg:text-[62px]">Augment Your Workforce</h1>
                    <p className="font-bold text-[26px] text-[#ffffff]">Unleash People-Powered Transformation</p>
                    <p className="text-[#FFFFFF] font-regular text-[12px] leading-[30px]">While solutions are essential, our primary focus is on empowering your workforce with the right talent. We deploy skilled Digital Transformation resources, on-site and remotely, at lightning speed. </p>
                    <p className="font-bold text-[#ffffff] text-[12px] mt-[1px]">
                    Let us fulfill your talent needs.
                    </p>
                    <button className="mt-10 bg-[#ABE03C] flex font-medium h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]" >
                            Inquire Now
                            <Image src={rightArrow} className="ml-2" height={14} width={14} alt="rightArrow"/>
                    </button>
                </div>
               
                {/* <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/> */}
                <Image src={Workforce} alt="container" width={700} height={549} className="lg:block mb-40 mt-20"/>


            </div>
        </div>
    )
}