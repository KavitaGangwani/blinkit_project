import React from 'react'

import ProdDescLeft from './ProdDescLeft'
import ProdDescRight from './ProdDescRight'

function ProdDesc(props) {
    console.log(props)
    
    return (
        <>
            <div className='w-[1280px] border grid grid-cols-2 gap-[80px] m-auto'>
                <ProdDescLeft prod = {props.products}/>

                {/* RIGHT SIDE */}

                <ProdDescRight prod = {props.products}/>
            </div>
        </>

    )
}

export default ProdDesc