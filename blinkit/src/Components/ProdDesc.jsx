import React from 'react'

import ProdDescLeft from './ProdDescLeft'
import ProdDescRight from './ProdDescRight'

function ProdDesc() {
    return (
        <>
            <div className='w-[1280px] border grid grid-cols-2 gap-[80px] m-auto'>
                <ProdDescLeft/>

                {/* RIGHT SIDE */}

                <ProdDescRight/>
            </div>
        </>

    )
}

export default ProdDesc