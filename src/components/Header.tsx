import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image"
import Link from 'next/link';
import { Button } from './ui/button';
function Header() {
  return (
   <>
   <header className='w-full flex gap-[16px] flex-col'>
    <div className='w-full h-[54px] bg-headercolor px-[62px] py-[15px] sm:flex-row flex justify-between sm:justify-between items-center border-b-[2px] border-slate-400'>

        <div className='inline-flex gap-4 justify-between text-[14px]'>
            <p >Phone Number: 956 742 455 678</p>
            <div className='w-[1px] h-[20px] bg-[#676767]'></div>
            <p>Email:info@ddsgnr.com</p>
        </div>

        <div className='flex gap-[12px]'>
        <FaFacebookF size={24} />
        <FaInstagram size={24}/>
        <FaTwitter size={24}/>
        <FaLinkedin size={24} />

        </div>

    </div>

    <div className='w-full h-[72px] px-[64px] py-[16px] bg-headercolor xl:flex-row flex justify-between items-center border-b-[2px] border-slate-400'>
        <Image src={"./Assets/Logo.svg"} alt='logo' width={130} height={41}/>

        <div className='w-[910px] h-full bg-white flex justify-between lg:w-[910px] md:w-[750px] items-center border-b-[2px]'>
            <ul className='h-full flex gap-[52px] items-center lg:gap-[32px] sm:gap-[5px]'>
                <li><Link href={"/"} className='text-[16px] leading-[150%] border-solid border-black border-b-[1px]'>Home</Link></li>
                <li><Link href={"/"} className='sm:px-[10px] text-[16px] leading-[150%]'>Courses</Link></li>
                <li><Link href={"/"} className='sm:px-[10px] text-[16px] leading-[150%]'>Services</Link></li>
                <li><Link href={"/"} className='sm:px-[10px] text-[16px] leading-[150%]'>Achievements</Link></li>
                <li><Link href={"/about"} className='sm:px-[10px] text-[16px] leading-[150%]'>About Us</Link></li>
                <li><Link href={"/testimonial"} className='sm:px-[10px] text-[16px] leading-[150%]'>Testimonial</Link></li>
                
            </ul>

            <div className='flex gap-[16px] items-center'>
                <Button className='bg-white border-[1px] border-[black] text-black hover:bg-transparent'>Login</Button>
                <Button>Sign up</Button>

            </div>
        </div>
    </div>

</header>

   </>
  )
}

export default Header