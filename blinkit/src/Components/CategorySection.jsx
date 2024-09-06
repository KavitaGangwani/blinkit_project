import React, { useContext } from 'react'
import Catcard from './Cards/Catcard'
import { useEffect,useState } from 'react'
import { category } from '../Context/CategoryContext'

function CategorySection() {

  let {categories,setCategories}= useContext(category);
  

  return (
    <>
    <div className='w-[1280px] m-auto '>
    <div  className=' flex flex-wrap '>
      {categories.map((v,i)=>{
        return <Catcard image = {v.categoryImage} catName = {v.categoryName} key={v._id} />
      })}
        
    </div>
    </div>
    
    </> 
  )
}

export default CategorySection