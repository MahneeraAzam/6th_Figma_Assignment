import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { teamData } from "@/constant/team";

function AboutUs() {
  return (
    <>
      <section className="w-full py-[48px] xsm:py-[112px] text-center bg-webColr">
        <h1 className="h1 mb-[24px]">Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        <div className="w-full h-[723px] xsm:h-auto grid grid-cols-1 xsm:grid-cols-3 xsm:grid-rows-2 gap-x-[48px] gap-y-[48px] xsm:gap-y-[64px] mt-[80px] xsm:mt-[80px] overflow-y-auto">
        {/* cardDiv */}

      {teamData.map((item,index)=>{
        return(
          
            <div className=" flex flex-col justify-center" key={index}>
              <div className="inline-block m-auto mb-[24px]">
                <Image
                  src={item.src}
                  alt={"cardpic"}
                  width={80}
                  height={80}
                ></Image>
              </div>

              <h1 className="text-[20px] leading-[150%] font-semibold">
                {item.heading}
              </h1>
              <p className="text-[18px] leading-[150%] mb-[24px]">
                {item.bio}
              </p>

              <div className="flex gap-[14px] justify-center m-auto">
                <FaLinkedin size={24} />
                <FaTwitter size={24} />
                <RiGlobalLine size={24} />
              </div>
            </div>
           )
          })}
        </div>

        <Button variant="transparentBtn" className="mt-[48px] xsm:hidden">
          View All
        </Button>
      </section>
    </>
  );
}

export default AboutUs;


// {[...Array(6)].map((_, index) => (
// ))}