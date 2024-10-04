import React from "react";
import { Vortex } from "./ui/vortex";
import { FaLocationArrow } from "react-icons/fa";
import GlowButton from "./ui/GlowButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Stats from "@/Components/Stats";

const Hey = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen ">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
       

        <div className="flex items-center justify-center h-full relative z-10">
          {" "}
          {/* Centering the content */}
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col items-center">
            <h2 className="text-xl text-center tracking-widest text-blue-100 leading-tight">
              TURNING YOUR CONCEPTS INTO REALITY
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl uppercase leading-tight text-white mt-4"
              words="Transforming Ideas Into Innovative Software Solutions!"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white max-w-[65vw] mt-3">
              Hi, I&apos;m Saif—bringing your vision to life with scalable
              software solutions.
            </p>

            {/* <a href="#about">
              <GlowButton
                title="Checkout My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a> */}
            {/* <div className="mt-6">
          <Stats />
          </div> */}
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Hey;
