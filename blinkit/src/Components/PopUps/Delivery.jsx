import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Delivery() {
  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-[#2c20208c] fixed top-0 left-0' >

        <div className='w-[500px] h-[122px] absolute top-[86px] left-[93px] bg-[#F3F6FC] '>
          <div className='m-6 '>
            < p className='text-[14px]'> Change Location </p>
            <div className='flex items-center mt-2'>
              <button className='bg-[#0D831E] p-[5px_10px]  text-[white] rounded-md w-[130px] h-[36px] text-[12px]'>Detect my Location</button>
              <div className='mx-4'>
                <div className='rounded-full border border-slate-400 w-[29px] '><p className='text-[10px] text-center text-slate-400 p-1' >OR</p></div>
              </div>
              <input className='outline-none border rounded-xl h-[40px] w-[220px] p-2' type="text" name="" id="" placeholder='search delivery location' />

            </div>

          </div>
          <div>
            <FontAwesomeIcon className='absolute text-[12px] top-[15px] right-[15px]' icon={faXmark} />
          </div>

        </div>


      </div>
    </>
  )
}

export default Delivery