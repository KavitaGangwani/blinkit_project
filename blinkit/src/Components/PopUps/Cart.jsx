import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import emptycart from './../../images/emp_empty_cart.webp'
import timer from './../../images/15-mins.avif'




function Cart() {
  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-[#1c191980] fixed top-0 left-0 flex flex-col justify-center items-center' >

        {/* WHEN CART IS EMPTY*/}
        {/* <div className='bg-[#F3F6FC] h-full w-[400px] absolute right-0 '>
          <div className='bg-[white] p-[18px] flex justify-between'>
            <p className='font-bold'>My Cart</p>
            <FontAwesomeIcon className='  ' icon={faXmark} />

          </div>
          </div> */}
        {/* <div className='rounded-2xl flex flex-col items-center justify-center bg-[white] m-3 '>
            <img className='m-2' src={emptycart} width={144} height={144} alt="" />
            <p className='font-bold '>You don't have any items in your cart</p>
            <p className='text-[14px] text-slate-400 m-1'>Your favourite items are just a click away</p>
            <button className='bg-[#0D831E] p-[5px_10px] m-3 text-[white] rounded-md w-[130px] h-[36px] text-[12px]'>Start Shopping</button>

      </div> */}

        {/* WHEN SOMETHING IS IN CART     */}
        <div className='bg-[#F3F6FC] h-full w-[400px] absolute right-0 '>
          <div className='bg-[white] p-[18px] flex justify-between'>
            <p className='font-bold'>My Cart</p>
            <FontAwesomeIcon className='  ' icon={faXmark} />

          </div>
          <div className=' p-3 w-[380px] '>
            <div className='rounded-2xl bg-[white] p-2'>
              <div className='flex  items-center m-2 '>

                <div className='bg-[#F4F7FD] rounded-lg ' >
                  <img src={timer} width={48} height={48} alt="" />
                </div>
                <div className='mx-2'>
                  <p className='font-bold text-[15px] '>Delivery in (8) minutes</p>
                  <p className='text-[13px] text-slate-400'>Shipment of (1) item</p>


                </div>
              </div>

              {/* map */}
              <div className='prods flex items-center justify-between  mx-2 my-4 '>
                <div className='flex'>
                  <div className='rounded-lg border ' >
                    <img src='' width={70} height={70} alt="" />
                  </div>
                  <div className='mx-3'>
                    <p className='text-[13px] text-slate-400'>product namw</p>
                    <p className='text-[13px] text-slate-400'>quantity</p>
                    <p className='font-bold text-[12px] '>Price</p>
                  </div>
                </div>

                <div className=' bg-[#0D831E] text-[white]  font-bold rounded-lg w-[65px] h-[35px] py-1' >
                  <button className='mx-2'>+</button>
                  <span>1</span>
                  <button className='mx-2'>-</button>

                </div>

              </div>
            </div>

            {/* BILL */}
            <div className='rounded-2xl bg-[white] p-2 my-3'>
              <div className='mx-2'>
                <p className='font-bold text-[15px] '>Bill Details</p>
                <div className='flex justify-between text-slate-500 text-[14px] my-1'>
                  <div>
                    <p>Items total</p>
                  </div>
                  <div>
                    <p>amounr</p>
                  </div>
                </div>
                <div className='flex justify-between  text-slate-500 text-[14px] my-1'>
                  <div>
                    <p>Delivery</p>
                  </div>
                  <div>
                    <p>amounr</p>
                  </div>
                </div>
                <div className='flex justify-between my-1'>

                  <div>

                    <p className='font-bold'>Grand total</p>
                  </div>
                  <div>
                    <p>amounr</p>
                  </div>
                </div>


              </div>




            </div>

            {/* CANCEL */}
            <div className='rounded-2xl bg-[white] p-2 my-3'>
              <div className='mx-2'>
                <p className='font-bold text-[15px] '>Cancellation Policy</p>
                <p className='text-[13px] text-slate-400'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>


              </div>




            </div>

            {/* Proceed */}
            <div className='bg-[white] rounded-xl p-[10px] flex justify-between fixed bottom-0 right-0 '>
              <div className='w-[360px] bg-[#0D831E] text-[white]  rounded-lg flex justify-between items-center p-2'>
                <div>
                  <p className='text-[18px] font-medium'>total mount</p>
                  <p className='text-slate-50 font-light '>TOTAL</p>
                </div>
                <div>
                  <p className=''>Login To Proceed/ (proceed when logged in)/proceed to pay after adrees is selected
                    <FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
              </div>
            </div>

          </div>








        </div>

        {/* AFTER PROCEED */}
        {/* address */}

        <div className='bg-[#F3F6FC] h-full w-[400px] absolute right-0 '>
          <div className='bg-[white] p-[18px]'>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              <p className='font-bold mx-2'> Select Delivery Address </p>
            </div>

          </div>
          <div className='rounded-2xl flex items-center font-bold  bg-[white] m-3  text-[#0D831E] p-2 '>
            
              <span className='text-[18px] font-bolder  me-2'>+</span>
              <p> Add a new address</p>
           

          </div>
          <p className='text-slate-400 font-semibold m-3 text-[14px]'>Your Saved Address</p>
          {/* map */}
          <div className='rounded-2xl p-2 bg-[white] m-3' >
            <p>Home</p>
            <p className='text-slate-500 text-[13px]'>address</p>
            <button className='text-[13px]'>edit</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Cart

