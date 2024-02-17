import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { RapidDigtal } from "./components/RapidDigital";
import { Harness } from "./components/Harness";
import { Navigate } from "./components/Navigate";
import { Augment } from "./components/Augment";
import { ComperehansiveOffers } from "./components/ComperehansiveOffers";
export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[#0f2152]">
          <RapidDigtal />
        </div>
        <div>
          <Harness />
          <Navigate />
        </div>

        <div className={`bg-[url(../public/assets/backgroundAugment.png)]`}>
          <Augment />
        </div>
      <div className={`bg-[url(../public/assets/backgroundAugment.png)]`}>
        <Augment/>
      </div>
      <div>
        <ComperehansiveOffers/>
      </div>
    </div>
   
      
    </>
  );
}
