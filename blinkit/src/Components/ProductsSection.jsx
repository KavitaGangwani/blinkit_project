import React from 'react'
import ProductCard from './Cards/ProductCard'

function ProductsSection(props) {
  
  let products = props.product
  let heading = 'font-bold text-[25px] m-2'
  let prodiv = ''
  
  // console.log(props.catname)
  if(props.catname){
    
    heading ='font-bold text-[18px]  m-2'
    prodiv = 'bg-slate-100'
    // console.log(heading,prodiv)
  }
  // console.log(products,'pro')
  return (
    <>
    <div  className='w-[1280px]  m-auto '>
        <h1 className={heading}>{props.heading}</h1>
        <div className={`flex ${prodiv}`} >
          {products.map((v,i)=>{
            // console.log(v,'this is v')
            return(
              <ProductCard prodDetails = {v} key={v._id}/>
              
            )
            
          })}
         
        </div>
    </div>
    </>
  )
}

export default ProductsSection