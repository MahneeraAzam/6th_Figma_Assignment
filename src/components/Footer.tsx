import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/constant/footer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer
        className="w-full
        px-[24px] py-[48px] xsm:p-[80px]
          flex 
          flex-col 
          gap-[80px]
          text-center xsm:text-start"
      >
        {/* TopDiv */}
        <div
          className="w-full 
        flex 
        flex-col xsm:flex-row
         justify-between 
         items-center"
        >
          <div className="w-[287px] xsm:-auto flex flex-col xsm:flex-row gap-[16px]">
            <p className="text-[18px] leading-[150%] font-semibold">
              Subscribe to our newsletter
            </p>
            <p className="text-[16px] leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex gap-[16px] flex-col mt-[24px] xsm:mt-0">
            <div className="flex gap-4 flex-col xsm:flex-row">
              <Input
                placeholder="Enter your email"
                className="w-full xsm:w-[265px] h-[48px] border-black"
              />
              <Button variant={"transparentBtn"} className="w-full xsm:w-auto">
                Subscribe
              </Button>
            </div>

            <p className="">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        {/* midDiv */}
        <div className="w-full flex flex-col xsm:flex-row gap-[40px] text-center">
          <div className="xsm:w-[250px] h-[40px] inline-block xsm:block m-auto xsm:m-0">
            <Image
              src="./Assets/Logo.svg"
              alt="logopic"
              width={130}
              height={40}
            ></Image>
          </div>

          {footerData.map((item, index) => {
            return (
              <div
                className="w-[250px] flex flex-col gap-[16px] m-auto xsm:text-start"
                key={index}
              >
                <h3 className="text-[16px] leading=[150%] font-semibold">
                  {item.heading}
                </h3>

                <ul className="flex flex-col gap-[8px]">
                  <li>
                    <Link href="#!">{item.li1}</Link>
                  </li>
                  <li>
                    <Link href="#!">{item.li2}</Link>
                  </li>
                  <li>
                    <Link href="#!">{item.li3}</Link>
                  </li>
                  <li>
                    <Link href="#!">{item.li4}</Link>
                  </li>
                  <li>
                    <Link href="#!">{item.li5}</Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        {/* BottomDiv */}

        <div className="w-full h-auto xsm:h-[57px] flex flex-col xsm:flex-row justify-between items-end border-t-[1px] border-black  pt-[32px] xsm:pt-[0px] text-center ">
          <div className="flex flex-row xsm:flex-row gap-[24px]">
            <p>2023 Ddsgnr. All right reserved.</p>

            <div className="flex gap-[24px]">
              <Link href={"#!"}>Privacy Policy</Link>
              <Link href={"#!"}>Terms of Service</Link>
              <Link href={"#!"}>Cookies Settings</Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[12px] m-auto xsm:m-0 mt-[24px] xsm:mt-0">
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;