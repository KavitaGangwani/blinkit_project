import React, { createContext, useState,useEffect } from 'react'

export let product = createContext();

 export function ProductContext(props) {

    let [products,setProducts] = useState([])
    let [prodByName,setProdbyName] = useState()

    const fetchProduct = async()=>{
        let response =  await fetch('http://localhost:4001/viewProd');
    response = await response.json();
  //   console.log(response.data)
  // console.log(typeof response.data)
    if(response.status){
      setProducts(response.data)
    }
    }
    

    const fetchProdByName = async(e,prodname)=>{
 
        let prodName= e.currentTarget.dataset.value
        // console.log(e.currentTarget)
        // console.log(prodName)
        let response =  await fetch(`http://localhost:4001/viewProd/${prodName}`);
        response = await response.json();
     
        if(response.status){
          setProdbyName(response.data)
          console.log(' product api runnning')
          
        }
        
      }
      
    
      useEffect(()=>{
    
        fetchProduct();
    
      },[])
      
  return (
    <product.Provider value = {{products, prodByName,fetchProdByName}}>
        {props.children}
    </product.Provider>
   
  )
}
