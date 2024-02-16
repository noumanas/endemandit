import Image from "next/image"
import Logo from "../../public/assets/Logo.png";
import Btn from "../../public/assets/Btn.png";
import rightArrow from "../../public/assets/rightArrow.png";


const navLinks =[
    {name:"Home"},
    {name:"Services"},
    {name:"Vendors"},
    {name:"Industries"},
    {name:"About"},
    {name:"Careers"},
]
export function Navbar(){

    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div>
                <Image src={Logo} alt="Logo" height={37} width={223}/>
            </div>
            <div>
                <div className="hidden lg:flex pl-[74px] gap-x-[56px] items-center justify-center">
                    {navLinks.map((item,index) => (
                        <p className="font-medium text-[#ffffff]" key={index}>{item.name}</p>
                    ))}
                    <div className="bg-[ABE03C] flex font-medium  text-[#ffffff] bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]" >
                        <p>Contact us</p>
                        <Image src={rightArrow} className="ml-2" alt="rightArrow"/>
                    </div>
                </div>
                <Image src={Btn} alt="Menubtn" className="lg:hidden"/>
            </div>
        </nav>
    )
}