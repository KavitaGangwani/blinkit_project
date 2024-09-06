import React from 'react'

function Subcategory(props) {
    let subcats = props.catbysub
    console.log(props)
    return (
        <>
        <div className='border w-[300px] '>
        <div className='w-[300] mt-3 '>
            {subcats.map((v, i) => {
                return (
                   
                        <div className='py-3 ps-4 pe-10 w-full border-b-2 hover:bg-green-50 active:bg-green-50 active:border-l-[#0D831E] active:border-l-4 items-center ' >
                            
                            <p key={i} className='mx-2'>{v}</p>
                        </div>
                    
                )
            })}
            </div>
            </div>

        </>
    )
}

export default Subcategory