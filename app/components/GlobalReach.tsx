import map from "../../public/assets/map.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png";
    
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

                    <Image className="relative right-60" src={strokeline} width={320} alt="line"/>

                    <p className="text-[#102356] font-bold text-[36px] leading-[30px] sl:pt-10">With multiple global locations, our reach spans across borders.</p>
                    <p>What truly sets us apart is our ability to integrate local expertise into our global solutions, ensuring a deeper understanding of regional nuances.</p>
                </div>
               <div className="flex gap-[40px]">
               {data.map((item,index) => (
                       <div key={index} className={`group px-10 py-12 flex flex-col justify-start items-start gap-[10px] bg-[#FFFFFF] rounded-lg hover:bg-[#ABE03C] hover:ease-in duration-300 cursor-pointer`}>
                            <p className="font-bold text-[#102356] text-[22px]">{item.country}</p>
                       </div>
                    ))}
               </div>
            </div>
            <div className="">
                <Image src={map} alt="map"/>
            </div>
            
        </div>
    )
}