import React from 'react'
import Catcard from './Cards/Catcard'
import { useEffect,useState } from 'react'

function CategorySection() {

  let [category,setCategory]= useState([])
  
  // FETCHING CATEGORIES 
  const fetchCat = async()=>{
    let response =  await fetch('http://localhost:4001/viewCat');
    response = await response.json();
    console.log(response.data)
  console.log(typeof response.data)
    if(response.status){
      console.log('first')
      setCategory(response.data)
    }
    
  }

   

  useEffect(()=>{

    fetchCat();

  },[])
  

  return (
    <>
    <div  className='w-[1280px] border m-auto p-2 '>
        <Catcard/>
    </div>
    </> 
  )
}

export default CategorySection