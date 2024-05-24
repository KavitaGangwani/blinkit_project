import React from 'react'
import ProductCard from './Cards/ProductCard'

function ProductsSection() {
  return (
    <>
    <div  className='w-[1280px] border m-auto p-2 '>
        <h1 className='font-bold text-[25px] m-2'>(Heading from props)</h1>
        <div>
            <ProductCard/>
        </div>
    </div>
    </>
  )
}

export default ProductsSection