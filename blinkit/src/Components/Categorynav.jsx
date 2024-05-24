import React from 'react'

function Categorynav() {
  return (
    <>
      <div className='w-full shadow shadow-slate-400/50'>
        <div className='w-[1220px] sticky px-6  m-auto '>
          <ul className='flex justify-stretch'>
            <li className='p-[14px_13px] text-slate-400 text-[14px] hover:bg-[#F3F6FC] '>cat1</li>
            <li>cat1</li>
            <li>cat1</li>
            <li>cat1</li>
            <li>cat1</li>
            <li>cat1</li>
            <li>cat1</li>
            <li>More</li>
          </ul>
          {/* <div className='w-[200px] h-[289px] overflow-scroll'>
          <ul className=''>
            <li className='p-[14px_13px] text-slate-400 text-[14px] hover:bg-[#F3F6FC] border-b-[1px] '> more category</li>
            
          </ul>
        </div> */}

        </div>
      </div>
    </>
  )
}

export default Categorynav