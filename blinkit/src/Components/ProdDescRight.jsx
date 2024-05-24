import React from 'react'
import timer from './../images/15-mins.avif'

function ProdDescRight() {
  return (
    <>
    <div className='border  p-10'>
                    <div className='border-b-[1px] '>
                        <p className='m-2'>links/kink/link</p>
                        <h1 className='font-bold text-[20px] m-2 '>ProductNAme</h1>
                        
                        <div className='rounded-[10px] m-2 w-[68px]  bg-[#F3F6FC] flex text-[12px] font-bold'>
                            <img src={timer} width={12} height={12} alt="" />
                            <p>(6) MINS</p>
                        </div>

                        <div className='m-2'>View all by Amul</div>
                        
                    </div>
              
                    <div className='my-2'>
                        <div className='flex justify-between border'>
                            <div>
                                <p className='font-bold text-[12px] text-slate-400'>Quantity</p>
                                <p className='font-bold text-[14px]'>price</p>
                                <p className='text-slate-400 font-semibold text-[10px]'>(inclusive of all taxes)</p>
                            </div>  
                            <button className='border border-[#0D831E] text-[#0D831E] bg-green-50 text-[14px] font-semibold px-4 py-1 rounded-lg h-[33px]' >ADD</button>

                        </div>
                        <div className='m-2'>
                            <h2 className='font-bold'>Why shop from blinkit?</h2>
                            <div className='flex m-2 my-2 text-[12px] text-slate-400 '>
                                <div className='overflow-hidden'>
                                    <img src="" width={56} height={56} alt="" />
                                </div>
                                <div className='mx-2' >
                                    <p className='fontt-semibold'>Superfast Delivery</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default ProdDescRight