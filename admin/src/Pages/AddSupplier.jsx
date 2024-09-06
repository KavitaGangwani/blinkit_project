
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import DashboardItems from '../Common/DashboardItems'
import Footer from '../Common/Footer'
import { mainContext } from '../Context';


import { useNavigate, useParams } from 'react-router'
import { Form } from 'react-router-dom'

function AddSupplier() {
    let nav = useNavigate();
  let { changemenu } = useContext(mainContext);
  const [data,setData] = useState({})

  const addSupplier = async(e)=>{

    e.preventDefault();

    let response = await fetch('http://localhost:4001/addSup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
    });

    response = await response.json()
    console.log(response)
    alert('supplier added')
  }
  console.log(data)
 


  return (
    <>
     <div>
      
      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Categories
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <form action="" onSubmit={addSupplier} >
                Supplier Name
                <input  type="text" className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2' 
                name='supplierName'
                value={data.supplierName}
                onChange={(e)=>{setData({...data,supplier: e.target.value })}}
                
               />
               
                <div className='flex items-center mt-5  mb-8 gap-2'>
                  <input type="radio" name='supStatus' value={true} className='mx-2 w-[20px] h-[20px] text-[20px]'
                  onChange={(e)=>{setData({...data,supplierStatus: e.target.value })}}
                    /> Active
                  <input type="radio" name='supStatus' value={false} className='mx-2 w-[20px] h-[20px] text-[20px]'
                  onChange={(e)=>{setData({...data,supplierStatus: e.target.value })}}
                     /> Deactive
                </div>

                <input type="submit"  className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
                <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
              </form>
            </div>
          </div>
          <Footer className />
        </div>
      </div>

    </div>

    </>
  )
}

export default AddSupplier