import React from 'react'
import { Vortex } from "./ui/vortex";
import { InfiniteMovingSVGs } from "@/Components/ui/Movingsvg";

const Techstack = () => {
  return (
    <div id='stack' className='py-15'>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen ">
      <Vortex
       backgroundColor="transparent"
       rangeY={800}
       particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >

        <h1 className='heading'>My <span className='text-blue-300'>Tech Stack</span></h1>
        <div className='mt-8'>
        <div className='flex flex-col items-center max-lg:mt-10'>
           
        <InfiniteMovingSVGs
  techStack={[
    { svg: "/react.svg", name: "React" },
    { svg: "/nodejs.svg", name: "Node.js" },
    { svg: "/nextjs.svg", name: "Nextjs" },
    { svg: "/express.svg", name: "Express.js" },
    { svg: "/tailwind.svg", name: "Tailwind Css" },
    { svg: "/js.svg", name: "JavaScript" },
  
    // Add more tech stack icons here
  ]}
  direction="left"
  speed="normal"
  pauseOnHover={true}
/>
</div>
<div className='py-10'>
<InfiniteMovingSVGs
  techStack={[
    { svg: "/c++.svg", name: "C++" },
    { svg: "/html.svg", name: "Html" },
    { svg: "/mongo.svg", name: "MonogoDb" },
    { svg: "/css.svg", name: "Css" },
    { svg: "/sql.svg", name: "My Sql" },
    { svg: "/boot.svg", name: "BootStrap" },
    // Add more tech stack icons here
  ]}
  direction="right"
  speed="normal"
  pauseOnHover={true}
/>
</div>

</div>
    
</Vortex>
</div>
    </div>
  )
}

export default Techstack
