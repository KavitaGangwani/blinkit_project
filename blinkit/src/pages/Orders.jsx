import React from 'react'
import Account from '../Components/PopUps/Account'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'
import OrderRight from '../Components/OrderRight'

function Orders() {
  return (
    <>
    <Header/>
    <div>
        <div className=' w-[1000px] my-5 m-auto flex shadow-lg shadow-stone-50/500'>

            <SideBar/>
            <div>
          <OrderRight/>
        </div>
        </div>
        

    </div>
        </>
  )
}

export default Orders