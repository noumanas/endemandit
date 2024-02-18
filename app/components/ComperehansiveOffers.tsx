import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import Workforce from "../../public/assets/Workforce.png"
import strokeline from "../../public/assets/strokeline.png"

const data =[
    {title:'Consulting',discription :'Empower your decisions with our Consulting services. Gain strategic insights tailored to your unique challenges, ensuring you are equipped to make informed choices that lead to lasting success.'},
    {title:'Implementation', discription:"Revolutionize your operations with Implementation services that seamlessly integrate cutting-edge technologies into your existing setup. Transform your systems effortlessly for a future-ready infrastructure."},
    {title:'Managed Services',discription:"Ensure the uninterrupted flow of your operations with our Managed Services. Enjoy 24/7 support that actively monitors, manages, and troubleshoots issues, providing you with the reliability and stability your business demands."},
    {title:'Business Process Outsourcing',discription:"Our trained and experienced teams of BPO professionals deliver an instant boost to your workforce with on-time, high-quality results."}

]
    


export function ComperehansiveOffers(){
    return(
        <div className="pt-9 lg:px-40">
            <div className="px-[20px] items-center flex flex-col lg:flex-row  justify-center lg:justify-start">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]">Unlock Our </h1>
                    <Image className="relative" src={strokeline} width={250} alt="line"/>
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]">Comprehensive Offerings</h1>

                    <p className="text-[#102356] font-regular text-[12px] leading-[30px]">We leave no angle uncovered, no stone unturned to accelerate and enhance your transformation journey. </p>
                </div>
               
            </div>
            <div className="flex gap-[40px] pt-9 flex-col lg:flex-row px-8">
            {data.map((item,index) => (
                       <div key={index} className="group lg:h-[400px] lg:w-[558px] rounded-lg shadow-xl hover:bg-[#102356] hover:border-4 hover:border-[#ABE03C]">
                            <p className="px-10 py-10 font-bold text-[30px] text-[#102356] group-hover:text-white ">
                                {item.title}
                            </p>
                            <p className="px-10 lg:pb-0 group-hover:text-white  pb-10 font-regular text-[#4A4A4A] text-[18px]">
                                {item.discription}
                            </p>
                       </div>
                    ))}
            </div>
            
        </div>
    )
}