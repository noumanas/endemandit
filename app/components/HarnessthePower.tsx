import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import Workforce from "../../public/assets/Workforce.png"
import strokeline from "../../public/assets/strokeline.png"
import {HarnessSlider} from "./HarnessthePower/HarnessSlider";
import dyamics365 from "../../public/assets/dyamics365.png";
import salesforce from "../../public/assets/salesforce.png"
import sie from "../../public/assets/sie.png"
export function HarnessthePower(){
    return(
        <div className="pt-9 lg:px-40">
            <div className="px-[20px] items-center flex flex-col lg:flex-col  justify-center">
                <div className="text-center lg:text-left items-center flex flex-col justify-center lg:items-start ">
                    <h1 className="font-bold text-[36px] font-Inter text-[#FFFFFF] lg:text-[55px]">Harness the Power of Microsoft</h1>
                    {/* <Image className="relative" src={strokeline} width={250} alt="line"/> */}
                    <h1 className="font-bold text-[36px] font-Inter text-[#FFFFFF] lg:text-[55px]">Dynamics, Salesforce, and Siebel</h1> 

                    <p className="text-[#FFFFFF] font-regular text-[12px] leading-[30px]">CRM technology stands at the forefront of business strategy, driving sales, and nurturing customer loyalty. EnDemand IT offers comprehensive CRM solutions and services designed to meet the unique needs of your business.</p>
                </div>
               <div className="flex gap-10 py-10">
                <HarnessSlider
                    companylogo={dyamics365}
                    peragraph="Unify Your Customer Data"
                    heading="Drive Sales and Marketing Success"
                    stepheadingOne="Tailored Dynamics Solutions:"
                    stepperagrapOne="With Microsoft Dynamics CRM, unlock a world where every customer interaction counts. We deliver tailored solutions that bring together information from all data sources, providing a 360-degree view of your customers."
                    stepheadingTwo="Expert Implementation:"
                    stepperagrapTwo="Our Microsoft-certified professionals ensure that Dynamics CRM fits seamlessly into your business, enhancing your sales, marketing, and customer service operations."
                />
                 <HarnessSlider
                    companylogo={salesforce}
                    peragraph="Engage and Grow Your Customer Base"
                    heading="Personalized Customer Journeys 
                    for Enhanced Engagement"
                    stepheadingOne="Salesforce Customization:"
                    stepperagrapOne="As a comprehensive CRM solution, Salesforce offers endless possibilities forcustomization. EnDemand IT crafts personalized customer journeys, ensuringhigher engagement and conversion rates."
                    stepheadingTwo="Cloud-Based Innovation:"
                    stepperagrapTwo="Our Salesforce experts help you harness thecloud, delivering CRM solutions that scale with your business and keep youagile."
                />
                  <HarnessSlider
                    companylogo={sie}
                    peragraph="Comprehensive and Robust CRM Systems"
                    heading="Optimize Your Enterprise 
                    CRM Needs"
                    stepheadingOne="Tailored Dynamics Solutions:"
                    stepperagrapOne="With Microsoft Dynamics CRM, unlock a world where every customer interaction counts. We deliver tailored solutions that bring together information from all data sources, providing a 360-degree view of your customers."
                    stepheadingTwo="Expert Implementation:"
                    stepperagrapTwo="Our Microsoft-certified professionals ensure that Dynamics CRM fits seamlessly into your business, enhancing your sales, marketing, and customer service operations."
                />
               </div>
                {/* <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/> */}
                {/* <Image src={Workforce} alt="container" width={700} height={549} className="lg:block mb-40 mt-20"/> */}


            </div>
        </div>
    )
}