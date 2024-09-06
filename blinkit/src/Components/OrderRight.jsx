import React from 'react'
import address from './../../src/images/c55c5f6ddd0e42607e6c.webp'

function OrderRight() {
  return (
 <>
 <div className='w-[700px] h-[500px] border' >
    <div className='address text-center '>
        <div className='my-6'>
            <img src={address} className='mx-auto' alt="" width={224} height={224} />
        </div>
        <div className='text-center'>
            <p>You have no saved address</p>
            <p className='text-slate-400'>Tell us where you want your orders delivered</p>
            <button  className='bg-[#0D831E] p-3 my-2  text-[white] rounded-sm '>Add New Address</button>
        </div>
    </div>

 </div>
 </>
  )
}

export default OrderRight