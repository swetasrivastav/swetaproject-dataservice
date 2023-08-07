import React from 'react'
import photo01 from "../assets/photo01.png"
import photo02 from "../assets/photo02.png"
import photo03 from "../assets/photo03.png"
import line from "../assets/line.png"
import google from "../assets/google.png"
import medal from "../assets/medal.PNG"
import playicon from "../assets/playicon.png"
import rating from "../assets/rating.PNG"
import hearticon from "../assets/hearticon.PNG"


const Delightedcustomers = () => {
  return (
    <> 
     <div className='mt-12'>
  <h2 className='text-red-600 uppercase text-center text-lg font-bold'>Delighted Customers</h2>
<div className='flex justify-center mt-4 mb-12 gap-2 '>

 <p className='text-black  text-2xl  font-medium text-center   '>
Our Cust<span className='border-b-2 border-red-600'>omers </span> Love Us 
  </p>
  <img src={hearticon} alt='' className='w-5 h-5 mt-1'/>
  </div>
  </div>
  
  <div className='flex lg:justify-center lg:flex-row flex-col gap-6 mb-14 '>
  <div className='bg-white  lg:w-80 h-auto shadow-xl rounded-xl'>
    <img src={photo01} alt='' className='rounded-xl border-b-4 border-red-600 relative' />
   <img src={playicon} alt='' className='hidden lg:block w-12 h-12  absolute -bottom-72 left-96 ml-20 '/>
<h3 className='mt-3  font-bold text-black text-sm ml-3'>"I'm thankful to the Stellar team for<br/>
recovering corrupted files from my laptop."
</h3>
<p className='text-[10px] text-gray-500 font-medium ml-4 py-4 '>Nuzhat Nasreen</p>
</div>
<div className='bg-white lg:w-80 h-auto shadow-xl rounded-xl '>
    <img src={photo02} alt='' className='rounded-xl border-b-4 border-red-600 relative'/>
    <img src={playicon} alt='' className='hidden lg:block w-12 h-12  absolute -bottom-72 left-1/2 ml-24 '/>
<h3 className='mt-3 font-bold text-black text-sm ml-3'>"I'm very happy to easily retrieve all files<br/>
from my SSD drive."</h3>
<p className='text-[10px] text-gray-500 font-medium ml-4 py-4 '>Ananyabha Roy</p>
</div>
<div className='lg:w-80 h-auto shadow-xl rounded-xl bg-white '>
    <img src={photo03} alt='' className='rounded-xl border-b-4 border-red-600 relative' />
    <img src={playicon} alt='' className='hidden lg:block w-12 h-12  absolute -bottom-72 right-52'/>

<h3 className='mt-3  font-bold text-black text-sm ml-3'> "Very happy with professionalism and<br/>
Stellar's approach for data recovery"
</h3>
<p className='text-[10px] text-gray-500 font-medium ml-4 py-4 '>Jitendra Singh</p>
</div>
</div>
<img src={line} alt='' className='mx-auto' />
<div className='flex lg:flex-row flex-col lg:justify-center gap-6 lg:my-10 my-8 ml-14 '>
<div className='w-64 h-40 shadow-sm border border-gray-200 hover:shadow-xl hover:shadow-slate-600'>
<img src={google} alt='' className='mx-16 mt-7' /> 
<img src={rating} alt='' className='mx-16 ' /> 
</div>

<div className='w-64 h-40 border shadow-sm border-gray-200 hover:shadow-xl hover:shadow-slate-600'>
<img src={medal} alt='' className='mx-24 lmt-4 w-20' /> 
<h1 className='text-black text-base font-bold text-center'> Awarded CIO Choice</h1>
<p className='font-normal text-sm text-gray-800 text-center'>for Best Data Recovery Service</p>
</div>
</div>
        </>

  )
}

export default Delightedcustomers