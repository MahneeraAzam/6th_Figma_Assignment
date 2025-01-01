import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Image from "next/image"

function Testimonial() {
  return (
    <>
    <section className='w-full px-[24px] xsm:px-[64px] py-[112px]'>
    <h1 className='h1 mb-[24px]'>Customer testimonials</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* cardsDiv */}
    <div className='mt-[80px]w-full flex gap-[32px] flex-row overflow-x-auto'>
            {/* cards */}

            {[...Array(3)].map((_,index)=>{return(

        <div className='shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black' key={index}>

                        <div className='flex gap-[4px] mb-[24px]'>
                        <FaStar size={20}/>
                        <FaStar size={20}/>
                        <FaStar size={20}/>
                        <FaStar size={20}/>
                        <FaStar size={20}/>
                        </div>
            
                        <p className='mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            
                        <div className='flex gap-[20px]'>
                            <div className='w-[56px] h-[56px] rounded-full overflow-hidden'>
                                <Image src="./Assets/Avatar Image.svg" alt="frstpic" width={56} height={65}></Image>
                            </div>
            
            
                            <div className='h-full flex flex-col justify-start'>
                                <h1>James Nduku</h1>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
            )})}

    </div>
    </section>
    </>
  )
}

export default Testimonial