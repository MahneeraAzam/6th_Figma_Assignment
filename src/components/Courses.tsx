import React from 'react'
import CoursesCards from './CoursesCards';

function Courses() {
  return (
    <>
      <section className='w-full h-[636px] pt-[112px]'>
        <div className='w-[768px] m-auto'>
          <h2 className='font-bold text-[48px] leading-[57.6px] text-[#000000]'>Explore Courses By Category</h2>

          <p className='mt-[24px] text-[18px] leading-[27px] text-[400] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        </div>

        <div className='w-full mt-[80px] flex gap-[24px] flex-wrap'>
    
   
        <CoursesCards/>

        <div className='w-[155px] h-[48px] border-solid mx-[112.5px] px-[445px]'> 
<button className='w-[155px] h-[48px] border-solid border-black border-[1px] rounded-[5px]'>View All Courses</button>
</div> 

        </div>

      </section>
    </>
  )
}

export default Courses