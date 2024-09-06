import React from 'react'

function SideBar() {
  return (
  <>
  <div className=' w-[300px] border '>
        <div className='w-[300] '>
            <div className='text-slate-400 text-center p-5 border-b-2'>
                email
            </div>
            
                   
                        <div className='py-3 ps-4 pe-10 w-full border-b-2 hover:bg-stone-100 active:bg-stone-100 text-slate-400  items-center ' >
                            
                            <p className='mx-2 '>My orders</p>
                        </div>
             
            </div>
            </div>

  </>
  )
}

export default SideBar