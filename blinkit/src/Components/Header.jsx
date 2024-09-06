import React, { useContext, useState } from 'react'
import logo from './../images/BLINKIT_876a5ffa-38b0-4f7b-8c54-0c3b56d69c38.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { login } from '../Context/LoginContext'
import Login from './PopUps/Login'
import Cart from './PopUps/Cart'
import { useNavigate } from 'react-router-dom'


function Header() {

  let {isLogin,setLogin} = useContext(login)
  // console.log(isLogin,setLogin)
   const nav = useNavigate()

  
   
 

 

  return (
    <>
      <div className="grid grid-cols-[181px_322px_702px_163px_163px] h-[86px] w-100 border-b border-inherit ">
        {/* LOGO */}
        <div className=' border-e border-inherit hover:bg-[#F8F8F8] flex items-center justify-center ' onClick={()=>{
          nav('/')
        }}>
          <img src={logo} width={134} height={30} alt="" />
        </div>
        {/* DELIVERY */}
        <div className='hover:bg-[#F8F8F8] flex items-center justify-center '>
          <div className="delivery w-[189px] h-[42px]">
            <p className='bold'>Delivery in (9) minutes</p>
            <p>xyz,xyz,India <span>arrow</span></p>

          </div>
        </div>
        {/* /SEARCH BAR */}
        <div className=' flex items-center justify-center '>

          <div className='w-[100%] h-[48px] border bg-[#F8F8F8] grid grid-cols-[5%_95%] p-[0_12px] rounded-xl relative truncate '>
            <FontAwesomeIcon className='p-[14px_0] text-[18px]' icon={faMagnifyingGlass} />
            <div className=' relative'>
              <input className='bg-[#F8F8F8] h-[100%] w-[100%] absolute outline-none ' type="text" placeholder='' onFocus={()=>{
                console.log('hekko')}}/>
              <div className="placeholder text-slate-400 animate-inputPlace absolute  z-0"><p>Search ("milk")</p></div>
            </div>

          </div>


        </div>
        {/* LOGIN */}
        <div className=' flex items-center justify-center hover:bg-[#F8F8F8] text-[20px]' onClick={()=>{setLogin(true)}} >Login</div>
        {isLogin? <Login/>:""}
        {/* MY CART */}
        <div className=' flex items-center justify-center '>
          <button className='bg-[#0D831E] w-[112px] h-[52px] p-[5px_10px] bold text-[white] rounded-md  flex justify-center  items-center font-bold'>
            <div className='p-[0_8px_0_0] hover:animate-wiggle text-[18px]'><FontAwesomeIcon icon={faCartShopping} /></div>
            <p > My cart</p>

          </button>
        </div>
      </div>

      
    </>
  )
}

export default Header