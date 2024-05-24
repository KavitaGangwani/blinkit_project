import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Sliderbutton() {
  return (
    <>
    <div className='w-[35px] h-[35px] rounded-full py-1 px-3 bg-white border shadow shadow-stone-500'>
    <FontAwesomeIcon  icon={faChevronLeft} />

    </div>
    </>
  )
}

export default Sliderbutton