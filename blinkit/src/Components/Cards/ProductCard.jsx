import React from 'react'
import timer from './../../images/15-mins.avif'





function ProductCard() {
    return (
        <>
            <div className=' w-[179px] border rounded-lg shadow shadow-slate-200 m-2'>
                <div className=" w-[179px] h-[140px] border">
                    <img className='mx-auto' src="" width={140} height={140} alt="" />
                </div>
                <div className=" w-[179px]  p-[0px_12px]">
                    <div className='w-[50px] h-[15px] bg-[#F3F6FC] m-1'>
                        <div className='rounded-[4px] flex text-[8px] font-bold'>
                            <img src = {timer} width={11} height={11} alt="" />
                            <p>(6) MINS</p>
                            </div>
                    </div>
                    <div className='border font-semibold text-[14px] m-[0_0_6px_0]'>title</div>
                    <div className='text-slate-400 text-[12px] mt-1'>Quantity</div>
                    <div className='flex justify-between items-center '>
                        <p className='font-semibold text-[12px]' >Price</p>
                        <button className='border border-[#0D831E] text-[#0D831E] bg-green-50 text-[14px] font-semibold px-3 py-1 rounded-lg my-3' >ADD</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard