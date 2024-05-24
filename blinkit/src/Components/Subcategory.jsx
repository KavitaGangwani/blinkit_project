import React from 'react'

function Subcategory() {
    return (
        <>
            <div className='w-[260] mt-3 '>
                <div className='flex py-3 ps-4 pe-10 border-b-2 hover:bg-green-50 active:bg-green-50 active:border-l-[#0D831E] active:border-l-4 items-center ' >
                    <div className='rounded-xl overflow-hidden  mx-1' >
                        <img src="" width={48} height={48} alt="" />
                    </div>
                    <p className='mx-2'>SubcategoryName</p>
                </div>
            </div>
        </>
    )
}

export default Subcategory