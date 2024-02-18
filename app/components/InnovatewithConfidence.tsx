import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image";
import strokeline from "../../public/assets/strokeline.png"


const data =[
    {title:'Digital Transformation Advisory',desc:'Strategic guidance to navigate your digital evolution.'},
    {title:'Resource Augmentation' , desc:'Empower your projects with top-tier talent.'},
    {title:'Middleware & Integration',desc:'Connect and synchronize your systems for max efficiency.'},
    {title:"Application Development & Modernization" , desc:'Strategic guidance to navigate your digital evolution.'},
    {title:'Business Process Management & Automation',desc:'Empower your projects with top-tier talent.'},
    {title:'Cloud Services',desc:'Connect and synchronize your systems for max efficiency.'},
    {title : "Data Analytics & AI", desc:"Strategic guidance to navigate your digital evolution."},
    {title:"DevOps",desc : "Empower your projects with top-tier talent."},
    {title:"Quality Assurance & Testing", desc:"Connect and synchronize your systems for max efficiency."},
    {title:"Full Stack Development",desc:"Strategic guidance to navigate your digital evolution."},
    {title:"Portals", desc:"Empower your projects with top-tier talent."},
    {title:"Cyber Security", desc:"Connect and synchronize your systems for max efficiency."}
]
    


export function InnovatewithConfidence(){
    return(
        <div className="pt-9 lg:px-40 pb-9">
            <div className="px-[20px] py-20 items-center flex flex-col lg:flex-row  justify-center lg:justify-start">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#FFFFFF] lg:text-[62px]">Innovate with</h1>

                    <Image className="relative" src={strokeline} width={320} alt="line"/>
                    <h1 className="font-extrabold text-[36px] font-Inter text-[#FFFFFF] lg:text-[62px]"> Confidence</h1>

                    <p className="text-[#FFFFFF] font-bold text-[36px] leading-[30px] sl:pt-10">Leverage Our End-to-End Services and Never Slow Down</p>
                </div>
               
            </div>
            <div className="flex gap-[40px] pt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  px-8  ">
            {data.map((item,index) => (
                       <div key={index} className={`group px-10 py-12 flex flex-col justify-start items-start gap-[10px] bg-[#FFFFFF] rounded-lg hover:bg-[#ABE03C] hover:ease-in duration-300 cursor-pointer`}>
                            <p className="font-bold text-[#102356] text-[22px]">{item.title}</p>
                            <p className="text-[#102356] text-[18px]">{item.desc}</p>
                       </div>
                    ))}
            </div>
            
        </div>
    )
}