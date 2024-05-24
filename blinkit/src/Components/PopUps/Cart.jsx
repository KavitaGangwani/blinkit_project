import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import emptycart from './../../images/emp_empty_cart.webp'


function Cart() {
  return (
    <>
      {/* cart ka alag when something is added to cart */}
      <div className='h-[100vh] w-[100vw] bg-[#1c191980] fixed top-0 left-0 flex flex-col justify-center items-center' >
        <div className='bg-[#F3F6FC] h-full w-[400px] absolute right-0'>
          <div className='bg-[white] p-[18px] flex justify-between'>
            <p className='font-bold'>My Cart</p>
            <FontAwesomeIcon className='  ' icon={faXmark} />

          </div>
          <div className='rounded-2xl flex flex-col items-center justify-center bg-[white] m-3 '>
            <img className='m-2' src={emptycart} width={144} height={144} alt="" />
            <p className='font-bold '>You don't have any items in your cart</p>
            <p className='text-[14px] text-slate-400 m-1'>Your favourite items are just a click away</p>
            <button className='bg-[#0D831E] p-[5px_10px] m-3 text-[white] rounded-md w-[130px] h-[36px] text-[12px]'>Start Shopping</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default Cart

