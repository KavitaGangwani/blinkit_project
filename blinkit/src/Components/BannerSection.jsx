import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { category } from './../Context/CategoryContext'
import bigbanner from './../images/Group-33704.webp'
import banner1 from './../images/pharmacy-WEB.avif'
import banner2 from './../images/Pet-Care_WEB.avif'
import banner3 from './../images/babycare-WEB.avif'


function BannerSection() {
  let { fetchCatByName, categories } = useContext(category)
 
  let catNames = ['Paan Corner', 'Pet Care', 'Pharma & Wellness', 'Baby Care']
  const nav = useNavigate()
  return (
    <>
      <div className='w-[1280px] m-auto '>
        <div>
          <img src={bigbanner} data-value={catNames[0]} alt="" onClick={async(e) => {
            await fetchCatByName(e)
            nav(`cat/${catNames[0]}`)

          }} />
        </div>
        <div className='flex p-2'>
          <img className='m-2' data-value={catNames[2]} src={banner1} width={336} height={196} alt="" onClick={async(e) => {
           await fetchCatByName(e)
            console.log(e)
            nav(`cat/${catNames[2]}`)

          }} />
          <img className='m-2' data-value={catNames[1]} src={banner2} width={336} height={196} alt="" onClick={async(e) => {
            await fetchCatByName(e)
            nav(`cat/${catNames[1]}`)

          }} />
          <img className='m-2' data-value={catNames[3]} src={banner3} width={336} height={196} alt="" onClick={async(e) => {
            await fetchCatByName(e)
            nav(`cat/${catNames[3]}`)

          }} />
        </div>

      </div>
    </>
  )
}

export default BannerSection