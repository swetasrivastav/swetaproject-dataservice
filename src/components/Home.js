import React from 'react'
import bannerimage from "../assets/bannerimage.png"
import logo from "../assets/logo.png"
import call from "../assets/call.png"
import computer from "../assets/computer.png"
import laptop from "../assets/laptop.png"
import pendrive from "../assets/pendrive.png"
import iconsdcard from "../assets/iconsdcard.png"
import externaldrive from "../assets/externaldrive.png"
import iconssd from "../assets/iconssd.png"
import iconcctv from "../assets/iconcctv.png"
import iconmobile from "../assets/iconmobile.png"
import iconserver from "../assets/iconserver.png"

const Home = () => {
  return (
   <>
   <div >
    <img src={bannerimage} alt='' className='w-full relative'/>
   <img src={logo} alt='' className='absolute top-0'/>
   <div className='flex items-center '>
   <img src={call} alt='' className='  absolute lg:top-4 lg:right-80 top-0  right-32 lg:w-7 lg:h-7 w-4 h-4 mt-1 '/>
   <div className=''>
   <h3 className='text-black absolute lg:top-3 lg:right-44 right-7  top-0 mr-3 text-[9px] lg:text-sm font-normal'>For Immediate Help</h3>
   <h4 className='text-black absolute lg:top-7 lg:right-44 top-3 right-14 lg:text-xl text-[9px] font-bold'>1800 102 3232</h4>
   </div>
   </div>
 
<div className='hidden lg:block'>
  <h1 className='absolute top-16 right-80 text-3xl font-bold pt-8 '>World's Most Reliable Data<br/>
Recovery Service</h1>
<p className='absolute top-48 text-sm font-medium text-gray-700 right-80 px-6'>Know about your Data Recovery possibility in 2 minutes</p>
<p className='absolute top-60 text-sm font-extrabold text-gray-900 right-1/3 px-16 '>Select your Data Carrier</p>
</div>
<div className='hidden lg:block'>
<div className='flex'>
<div className='border-2 border-gray-300 absolute top-64 mt-4 right-1/3 mr-16 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
  
  <img src={computer} alt='' className='mx-14 pt-3'/>

  <h3 className='text-sm text-black font-medium text-center mt-2 '>Computer</h3>
</div>
<div className='border-2 border-gray-300 absolute top-64 mt-4  right-80 mr-11 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={laptop} alt='' className='mx-14 pt-3  '/>
  <h3 className='text-sm text-black font-medium text-center mt-2 '>Laptop</h3>
</div>
<div className='border-2 border-gray-300 absolute top-64 mt-4  right-44 mr-3 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={pendrive} alt='' className='mx-16 pt-2  '/>
  <h3 className='text-sm text-black font-medium text-center mt-2 '>Pen Drive</h3>
</div>
</div>
<div className='flex '>
<div className='border-2 border-gray-300 absolute top-1/2  right-1/3 mr-16 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600 '>
  
<img src={iconsdcard} alt='' className='mx-16 pt-2 w-7  '/>
  <h3 className='text-sm text-black font-medium text-center mt-1  '>SD Card/<br/>Memory Card</h3>
</div>
<div className='border-2 border-gray-300 absolute top-1/2  right-80 mr-11 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={externaldrive} alt='' className='mx-16 pt-2  '/>
  <h3 className='text-sm text-black font-medium text-center mt-2 '>External Drive</h3>
</div>
<div className='border-2 border-gray-300 absolute top-1/2  right-44 mr-3  w-40 h-24 rounded-xl shadow-sm
 hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={iconssd} alt='' className='mx-14 pt-3  '/>
  <h3 className='text-sm text-black font-medium text-center mt-1 pr-2 '>SSD</h3>
</div>
</div>
<div className='flex '>
<div className='border-2 border-gray-300 absolute bottom-40 mb-4 right-1/3 mr-16 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={iconcctv} alt='' className='mx-14 pt-3 '/>
  <h3 className='text-sm text-black font-medium text-center mt-1'>CCTV/DVR</h3>
</div>

<div className='border-2 border-gray-300 absolute bottom-40 mb-4  right-80 mr-11 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={iconmobile} alt='' className='mx-16  pt-2   '/>
  <h3 className='text-sm text-black font-medium text-center mt-1'>Mobile</h3>
</div>
<div className='border-2 border-gray-300 absolute bottom-40 mb-4  right-44 mr-3 w-40 h-24 rounded-xl shadow-sm
hover:scale-110 hover:border-2 hover:bg-white hover:border-red-600'>
<img src={iconserver} alt='' className='mx-16 pt-3 '/>
  <h3 className='text-sm text-black font-medium text-center mt-1 '>Server/RAID/NAS</h3>
</div>
</div>
<div className='hover:scale-105 bg-red-600 absolute text-lg text-white font-semibold w-[510px] py-1.5 text-center rounded-lg bottom-28 mb-3  right-48'>
Get Free Quote
</div>
</div>
</div>
   
   </>
  )
}

export default Home