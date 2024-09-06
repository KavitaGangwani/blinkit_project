import React from 'react'
import logo from './../images/BLINKIT_876a5ffa-38b0-4f7b-8c54-0c3b56d69c38.webp'

function Payment() {
  return (
    <>
    <div className="grid grid-cols-[181px_322px_702px_163px_163px] h-[86px] w-100 border-b border-inherit shadow-sm ">
        {/* LOGO */}
        <div className=' hover:bg-[#F8F8F8] flex items-center justify-center '>
          <img src={logo} width={134} height={30} alt="" />
        </div>
    </div>
    <div className='w-[1000px] mx-auto my-3  grid grid-cols-[730px_270px] gap-2'>
        <div>
            <h1 className='font-bold text-[28px] my-2'>Select Payment Method</h1>
            <div className='border rounded-xl'>
                <ul>
                    <li className=' border-b-[1px] p-4 text-[22px]'>wallets</li>
                    <li className=' border-b-[1px] p-4 text-[22px]'>wallets</li>
                    <li className=' border-b-[1px] p-4 text-[22px]'>wallets</li>
                    <li className=' border-b-[1px] p-4 text-[22px]'>wallets</li>
                    <li className=' border-b-[1px] p-4 text-[22px]'>wallets</li>
                    <li className=' p-4 text-[22px]'>wallet</li>
                </ul>
            </div>
        </div>
        <div className='border'>
            <div className='p-4 border-b-[1px]'>
                <h1 className='text-slate-400 font-semibold text-[18px]'>Delivery Address</h1>
                <p className='text-slate-300 text-[14px] '> adresssssssssssssssssssssssssssssss</p>
            </div>
            <div className='bg-stone-100 text-slate-400 flex justify-between p-3 border-b-[1px]'>
                <span>My orders</span>
                <span>x items</span>
            </div>
            {/* mapping will take place */}

            <div className='flex justify-between p-3 text-[14px] text-slate-400 border-b-[1px]'>
                <span>no.</span>
                <div>
                    <img src="" alt="" />
                </div>
                <div className=''>
                    <p>name </p>
                    <p className='font-bold'>pricd</p>
                    <p>qunatity</p>
                </div>
                
            </div>
            <button>Pay Now</button>


        </div>

    </div>
    </>
  )
}

export default Payment