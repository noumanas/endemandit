import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import Imagecontainer from "../../public/assets/Imagecontainer.png"
import Imagecontainer2 from "../../public/assets/Imagecontainer2.png"

export function RapidDigtal(){
    return(
        <div className="pt-9">
            <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center">
                <div className="">
                    <h1 className="font-extrabold text-[36px] leading[40px] font-Inter text-[#ffffff] mt-20">Your Rapid Digital Transformation Partner</h1>
                    <p className="text-[#fff] font-regular text-[18px]">Since our inception, We have been a trailblazer in the DX space, operating globally with a strong focus on the Middle East. Collaborating seamlessly 
with both Government and Private Sector organizations, we bring 
innovation, talent and reliability to the forefront.</p>
                    <div className="mt-10 bg-[ABE03C] flex font-medium  text-[#ffffff] bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]" >
                            <p>Explore our services</p>
                            <Image src={rightArrow} className="ml-2" alt="rightArrow"/>
                    </div>
                </div>
               
                <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/>
                <Image src={Imagecontainer2} alt="container" width={824} height={549} className="hidden lg:block mb-40 mt-20"/>


            </div>
        </div>
    )
}