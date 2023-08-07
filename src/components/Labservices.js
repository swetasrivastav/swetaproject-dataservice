import React from 'react'
import callblackicon from "../assets/callblackicon.PNG"
import photo04  from "../assets/photo04.PNG"
import arrowicon  from "../assets/arrowicon.PNG"


const Labservices = () => {
  return (
    <>
    <div className='bg-[#F5F5F4] mt-20'>
    
     <div className='py-10'>
       <h1 className='text-lg font-bold text-center text-red-600  uppercase'>stellar in-lab service</h1>
       <p className='lg:text-2xl text-base text-black text-center font-normal mt-4'>World's Most-Trusted Data Recov<span className='border-b-2 border-red-600'>ery Ser</span>vice - Care & Delight for 25+ Years</p>
       <p className='text-center mt-10 text-sm'>whatever the reason for data loss, the experts at stellar get back your critical data from all external & internal storage media irrespective of the operating system. Our<br/>
       risk-free, secure, and world - class services have helped innumerable clients in critical data loss situations.
       </p>
   </div>
  <div className='flex  lg:flex-row flex-col-reverse justify-center gap-10 lg:gap-32'>
    <div className='lg:ml-32 ml-2'>
      <h1 className='text-black text-lg lg:text-2xl font-normal'><span className='border-b-2 border-red-600'>Best in </span> 
     Class Disk Recovery Service</h1>
     <div className='flex mt-8 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3 '/>
     <p className='text-sm text-gray-900'>Data recovery with utmost safety and privacy </p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'>No Recovery - No Charge policy*</p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'>Unparalleled data recovery<span className='text-black font-bold'> success rate of 80%</span></p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'>India’s only <span className='text-black font-bold'>certified class 100 Clean Room Lab</span></p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'>Largest inventory over <span className='text-black font-bold'>15,000 donor</span> hard drives </p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'>we service<span className='text-black font-bold'> 40,000 + data recovery jobs </span>annually</p>
     </div>
     <div className='flex mt-2 gap-3 items-center' >
     <img src={arrowicon} alt='' className='w-3'/>
     <p className='text-sm text-gray-900'><span className='text-black font-bold'>ISO 9001 & ISO 27001</span> certified organization </p>
     </div>
     <div className='flex lg:flex-row flex-col lg:gap-4'>
     <div className='w-48 border-2 border-gray-600 mt-8 hover:scale-105'>
      <div className='flex px-4 py-3 gap-3 items-center'>
      <img src={callblackicon} alt='' className='w-4 h-4  '/>
<p className='text-lg font-semibold'>1800-102-3232</p>
</div>
     </div>
     <div className='w-48 h-14 mt-8 rounded-md hover:scale-105 bg-red-600 text-white uppercase text-center '>
<p className='mt-4 text-base font-semibold'>get free Quote</p>
     </div>
     </div>
     <div className='mt-2 mb-24'>
      <p className='text-sm text-black'>*<span className='text-sm text-red-600'>Terms & Conditions</span> Apply.</p>
     </div>
    </div>
  <div>
    <img src={photo04} alt='' className='lg:w-9/12 '/>
   </div>
  </div>
     </div>
      </>
  )
}

export default Labservices