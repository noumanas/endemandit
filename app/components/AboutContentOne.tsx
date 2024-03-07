import rightArrow from "../../public/assets/rightArrow.png";
import Image from "next/image"
import ImageContainerAbout from "../../public/assets/ImagecontainerAbout.png"
import strokeline from "../../public/assets/strokeline.png"
import Embracing from "../../public/assets/Embracing.png"
import clientCentric from "../../public/assets/clientCentric.png"
import Enabling from "../../public/assets/Enabling.png"
import { AboutcontentInner } from "./AboutcontentInner";
export function AboutContentOne(){
    return(
        <div className="pt-0 lg:px-40">
         <Image src={ImageContainerAbout} alt="container" height={634} width={1170} className="" />
         <AboutcontentInner 
        Peragraph="OUR JOURNEY"
        heading="Embracing Change, Leading Innovation"
        lastPeragraph="Our strength lies in crafting bespoke transformation solutions tailored to your organization's distinct needs, ensuring a seamless and effective journey towards digital excellence."
        image={Embracing}
         />
        <div> 
            <AboutcontentInner 
            Peragraph="OUR PEOPLE"
            heading="The Heart of Innovation"
            lastPeragraph="Our greatest asset is our people—EnDemand IT'sprofessionals are not just skilled in their respective fields; they're alsoadept at bridging gaps between technology and practicality, ensuring that everydigital solution is grounded in real-world effectiveness."
            image={Embracing}
            />
         </div>
         <div> 
            <AboutcontentInner 
            Peragraph="OUR APPROACH"
            heading="Client-Centric, Results-Driven"
            lastPeragraph="At EnDemand IT, we place our clients at theheart of everything we do. Our approach is collaborative, transparent, and results-driven. We understand that each business is unique, and we dedicateourselves to crafting solutions that align with our clients' specific goals andaspirations."
            image={clientCentric}
            />
         </div>
         <div> 
            <AboutcontentInner 
            Peragraph="OUR COMMITMENT"
            heading="Enabling Growth, Building Partnerships"
            lastPeragraph="Beyond delivering solutions, we strive to build lasting partnerships with our clients. We are dedicated to enabling growth, fostering innovation, and helping businesses 
            navigate the complexities of the digital world."
            image={Enabling}
            />
         </div>
        </div>
    )
}