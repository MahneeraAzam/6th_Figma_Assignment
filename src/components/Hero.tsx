import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"

function Hero() {
  return (
    <>
    <section>
        {/* TopDiv */}
        <div className='
        flex
        flex-col xsm:flex-row
        '>


            {/* leftDiv */}
            <div className='
            w-full xsm:w-1/2
            py-[64px]  xsm:py-[250px]
            px-[24px] xsm:px-[0]
            flex
            justify-center
            items-center
              '>
            <div className='
            w-full 
            px-[0px]  xsm:px-[80px]
            '>
                <h1 className='
                text-[40px] xsm:text-[56px] 
                leading-[120%] 
                font-bold 
                mb-[24px] '>Learn new skills online with ease</h1>
                <p className='text-[18px] leading-[150%] mb-[40px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                <Button className='mr-[16px]'>Start learning now</Button>
                <Button variant={"transparentBtn"}>Explore Courses</Button>
            </div>
            </div>


            {/* RightDiv */}
            <div className='
            w-full xsm:w-1/2 
            h-[390px] xsm:h-[800px]
            flex 
            justify-center
            overflow-hidden
            '>
                <Image src="./Assets/Image.svg" alt="mainImg" width={640} height={900} className='
                w-[428px] xsm:w-[640px] 
                h-[600px] xsm:h-[900px]
                '></Image>
            </div>
        </div>







        {/* bottomImgDiv */}
        <div className='w-full py-[48px] xsm:py-[80px] 
        px-[24px] xsm:px-[8px] 
        flex flex-col xsm:flex-row 
        justify-between 
        items-center 
        gap-[24px] xsm:gap-[0] 
        bg-webColr'>

          <div className='w-[320px]'>
            <p className='text-[24px] leading-[140%] font-bold'>Trusted by 2000+ companies worldwide.</p>
            </div>

            <div className='flex 
            gap-[16px] xsm:gap-[19px] overflow-x-auto'>
              <Image src="./Assets/air2.svg" alt="logopic" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>

              <Image src="./Assets/air5.svg" alt="pic2" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>

              <Image src="./Assets/air4.svg" alt="picthree" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
              <Image src="./Assets/air6.svg" alt="pic4" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>

              <Image src="./Assets/air1.svg" alt="pic5" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>

              <Image src="./Assets/air3.svg" alt="pic" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero