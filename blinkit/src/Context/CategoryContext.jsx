import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export let category = createContext();

 export function CategoryContext(props) {
    let [categories,setCategories]= useState([])
    let [nameCat, setNameCat] = useState({})
    console.log(nameCat)
    // const nav = useNavigate()
  
    

    
  // FETCHING CATEGORIES 
  const fetchCat = async()=>{
    let response =  await fetch('http://localhost:4001/viewCat');
    response = await response.json();
  //   console.log(response.data)
  // console.log(typeof response.data)
    if(response.status){
      setCategories(response.data)
    }
    
  }

  const fetchCatByName = async(e,catname)=>{
    
   let catName

    // If e and e.target exist, use the dataset value
    if (e && e.target && e.target.dataset) {
        catName = e.target.dataset.value || catname;
    }else{
      catName = catname

    }
    // console.log(e.target)
    console.log(catName ,'jhjhjh')
    let response =  await fetch(`http://localhost:4001/viewCat/${catName}`);
    response = await response.json();
 
    if(response.status){
      setNameCat(response.data)
      console.log(' fetched by category name api runnning')
      
    }
    
  }

  useEffect(()=>{

    fetchCat();

  },[])
  
    
  return (
    <category.Provider value = {{categories,setCategories,fetchCatByName,nameCat,setNameCat}}>
        {props.children}
    </category.Provider>
   
  )
}
