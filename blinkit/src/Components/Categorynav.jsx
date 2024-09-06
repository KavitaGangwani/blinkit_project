
import React, { useContext ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { category } from './../Context/CategoryContext' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Categorynav(props) {

  const nav = useNavigate()
  let {fetchCatByName} = useContext(category)

  // console.log(props, "from nav")
  let navcategories = (props.cats).slice(0, 7)
  let x = (props.cats).length
  let morecategories = (props.cats).slice(7, x)

  let [moreState, setmoreState] = useState(false)
  
  return (
    <>
      <div className='w-full shadow shadow-slate-400/50'>
        <div className='w-[1220px] sticky px-6  m-auto '>
          <ul className='flex justify-stretch px-4'>
            {navcategories.map((v, i) => {
              return (
                <li className='p-[14px_13px] text-slate-500  hover:bg-[#F3F6FC] ' key={v._id}  data-value={v.categoryName} onClick={(e)=>{
                  fetchCatByName(e);
                  nav(`/cat/${encodeURIComponent(v.categoryName)}`)
               }} >{v.categoryName}</li>

              )
            })}
            <li className='p-[14px_13px] text-slate-500  hover:bg-[#F3F6FC]' onClick={() => {
              if(!moreState){
                setmoreState(true)
              }
              else{
                setmoreState(false)
              }
             
            }}>More <FontAwesomeIcon icon={faChevronDown} /></li>
          </ul>
          {(moreState) ? (<div className='w-[200px] h-[189px] bg-white overflow-scroll absolute right-[-12px] shadow-lg'>
            <ul className=''>
              {morecategories.map((v, i) => {
                return (
                  <li className='p-[14px_13px] text-slate-500  hover:bg-[#F3F6FC] border-b-[1px] '  data-value={v.categoryName} onClick={(e)=>{
                    fetchCatByName(e);
                    nav(`/cat/${encodeURIComponent(v.categoryName)}`)
                 }} >{v.categoryName}</li>

                )
              })}


            </ul>
          </div>)
            : ' '}



        </div>
      </div>
    </>
  )
}

export default Categorynav