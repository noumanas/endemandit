import Image from "next/image";
import { Navbar } from "./components/Navbar";
import {RapidDigtal} from "./components/RapidDigital"

export default function Home() {
  return (
    <>
    <div className="bg-[#0f2152]">
      <Navbar/>
      <RapidDigtal/>
    </div>
      
    </>
  
  );
}
