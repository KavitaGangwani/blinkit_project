import React from 'react'
import bigbanner from './../images/Group-33704.webp'
import banner1 from './../images/pharmacy-WEB.avif'
import banner2 from './../images/Pet-Care_WEB.avif'
import banner3 from './../images/babycare-WEB.avif'


function BannerSection() {
  return (
    <>
    <div  className='w-[1280px] border m-auto '>
        <div>
            <img src={bigbanner}  alt="" />
        </div>
        <div className='flex p-2'>
            <img className='m-2' src={banner1} width={336} height={196} alt="" />
            <img className='m-2' src={banner2} width={336} height={196} alt="" />
            <img className='m-2' src={banner3} width={336} height={196} alt="" />
        </div>

    </div>
    </>
  )
}

export default BannerSection