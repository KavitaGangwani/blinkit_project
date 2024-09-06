import React, { useContext, useEffect, useRef, useState } from 'react'
import timer from './../../images/15-mins.avif'
import { product } from './../../Context/ProductContext'
import { useNavigate } from 'react-router-dom'





function ProductCard({prodDetails}) {

   


    
    let nav = useNavigate();
    // console.log(prodDetails.prodName)
    let {fetchProdByName} = useContext(product)
    const handleclick =(e)=>{
        console.log('hello')
        fetchProdByName(e);
        nav(`/prod/${encodeURIComponent(prodDetails.prodName)}`)


    }

    
  
   
    return (
        <>
        <div >
            <div className=' w-[179px] border rounded-lg shadow shadow-slate-200 m-2 bg-white'  onClick={handleclick} data-value={prodDetails.prodName}
           >
                <div className=" w-[179px] h-[140px]"  >
                    <img  className='mx-auto' src={prodDetails.prodImg} width={138} height={138} alt="" />
                </div>
                <div className=" w-[179px]  p-[0px_12px]">
                    <div className='w-[50px] h-[15px] bg-[#F3F6FC] m-1'>
                        <div className='rounded-[4px] flex text-[8px] font-bold'>
                            <img src={timer} width={11} height={11} alt="" />
                            <p>(6) MINS</p>
                        </div>
                    </div>
                    <div className='font-semibold text-[14px] m-[0_0_6px_0] h-[40px] overflow-hidden whitespace-nowrap text-ellipsis'>
                    {prodDetails.prodName}</div>
                    <div className='text-slate-400 text-[12px] mt-1'>{prodDetails.quantity}</div>
                    <div className='flex justify-between items-center '>
                        <p className='font-semibold text-[12px]' >Rs.{prodDetails.price}</p>
                        <button className='border border-[#0D831E] text-[#0D831E] bg-green-50 text-[14px] font-semibold px-3 py-1 rounded-lg my-3' >ADD</button>
                        {/* <div className=' bg-[#0D wh831E] text-[white]  font-bold rounded-lg w-[65px] h-[35px] py-1' >
                            <button className='mx-2'>+</button>
                            <span>1</span>
                            <button className='mx-2'>-</button>

                        </div> */}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProductCard