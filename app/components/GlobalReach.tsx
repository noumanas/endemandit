import map from "../../public/assets/map.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png";
import PainPoint1 from "../../public/assets/painPoint1.png";
import PainPoint2 from "../../public/assets/painPoint2.png";
import PainPoint3 from "../../public/assets/painPoint3.png";


    
const data =[
   {country:"Qatar"},
   {country:"UAE"},
   {country:"KSA"},
   {country:"Egypt"},
   {country:"India"},
   {country:"Pakistan"},

]

export function GlobalReach(){
    return(
        <div className="pt-9 lg:px-40 pb-9">
            <div className="px-[20px] py-20 items-center flex flex-col lg:flex-col  justify-center lg:justify-center">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-center ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]">Global Reach, Local Expertise</h1>

                    <Image className="hidden relative right-60 lg:block" src={strokeline} width={320} alt="line"/>

                    <p className="text-[#102356] font-bold text-[36px] leading-[30px] sl:pt-10">With multiple global locations, our reach spans across borders.</p>
                    <p>What truly sets us apart is our ability to integrate local expertise into our global solutions, ensuring a deeper understanding of regional nuances.</p>
                </div>
               <div className="flex gap-2 grid grid-rows-3 grid-flow-col lg:grid-flow-col lg:grid-rows-1">
               {data.map((item,index) => (
                       <div key={index} className={`group px-8 py-12 flex flex-col justify-start items-start rounded-lg hover:text-[#ABE03C] hover:ease-in duration-300 cursor-pointer`}>
                            <p className="font-bold text-[#102356] hover:text-[#ABE03C] text-[22px] hover:ease-in duration-300 ">{item.country}</p>
                       </div>
                    ))}
               </div>
               
            </div>
            <div className="">
                <Image src={map} alt="map"/>
            </div>
            <div className="flex flex-col justify-center items-center ">
               <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px] text-center">Addressing Challenges</h1>
               <Image className="relative" src={strokeline} width={250} alt="line"/>

               <h1 className="font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px] text-center">& Pain Points</h1>

                <p className="font-bold text-[#4A4A4A] text-[22px] text-center">Through meticulous research, we've identified key pain points in the industry, and our solutions are tailored to alleviate these challenges.</p>
                
                <div className="flex flex-col gap-16 pt-10 lg:flex-row">
                    <div className="h-[500px] w-[316px]">
                        <Image src={PainPoint1} alt="pain"/>
                        <div className="bg-[#102356] px-10 py-8 relative w-[316px] bottom-40 rounded-b-lg font-bold text-[18px] h-[178px]">

                            <p className="text-[#FFF]">Struggling to fill critical IT skill gaps within your team?</p>
                        </div>
                    </div>
                       
                    <div className="h-[500px] w-[316px]">

                        <Image src={PainPoint2} alt="pain"/>
                        <div className="bg-[#102356] px-10 py-8 relative w-[316px] bottom-40 rounded-b-lg font-bold text-[18px] h-[178px]">

                            <p className="text-[#FFF]">Keeping pace with a rapidly evolving digital landscape can be overwhelming.</p>
                        </div>
                    </div>
                    <div className="h-[500px] w-[316px]"> 
                        <Image src={PainPoint3} alt="pain"/>
                        <div className="bg-[#102356] px-10 py-8 relative w-[316px] bottom-40 rounded-b-lg font-bold text-[18px] h-[178px] ">
                            <p className="text-[#FFF]">Investing in local talent & supporting nationalization goals can feel complex.</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}