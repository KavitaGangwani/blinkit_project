import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { category } from './../../Context/CategoryContext'

function Catcard(props) {
  const nav = useNavigate()
    let {fetchCatByName} = useContext(category)
   
  return (
    <>
    <div className='w-[128px]'  >
        <img src={props.image} data-value={props.catName}  width={128} height={188} alt=""  onClick={async(e)=>{
        await fetchCatByName(e)
        nav(`cat/${props.catName}`)
        
    }} />
    </div>
    </>
  )
}

export default Catcard