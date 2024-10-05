import Contact from "@/Components/Contact";
import Grid from "@/Components/Grid";
import Hey from "@/Components/Hey";
import Services from "@/Components/Services";
import Techstack from "@/Components/Techstack";
import { FloatingNav } from "@/Components/ui/FloatingNav";


import { FaHome } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiStack } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";



export default function Home() {
  return (
     <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
   
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link:'/' , icon: <FaHome />},
        {name:'About', link:'#about',icon:<BsInfoCircle />},
        {name:'Tech Stack', link:'#stack',icon:<PiStack />},
      {name:'Services', link:'#services',icon: <MdMiscellaneousServices />},
      {name:'Contact', link:'#contact',icon:<RiCustomerService2Line />}
      
      
      ]}/>
     <Hey/>
        <Grid/>
        <Techstack/>
        <Services/>
        <Contact/>
        
        
      </div>
    </main>
  );
}
