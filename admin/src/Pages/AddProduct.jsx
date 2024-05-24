import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import DashboardItems from '../Common/DashboardItems'
import Footer from '../Common/Footer'
import { mainContext } from '../Context'
import prev from '../img/generic-image-file-icon-hi.png'
import { useNavigate, useParams } from 'react-router'

// import AdminForms from '../Common/AdminForms'

function AddProduct() {

    let nav = useNavigate();
    let { changemenu } = useContext(mainContext);



    return (
        <div>

            <Header />

            <div className='flex  bg-[#F5F7FF]'>
                <Sidebar />

                <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

                    <h1 className='text-[25px] font-[500] mb-[10px]'>
                        Product Details
                    </h1>
                    <div className=''>
                        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
                            <form action="" >
                                Product Name
                                <input type="text" name='coursesName' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />
                                Price
                                <input type="text" name='coursesPrice' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />
                                Category
                                <select name="coursescat" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md'>
                                    <option value="" className=''>category</option>
                                </select>
                                Sub-Category
                                <select name="coursescat" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md'>
                                    <option value="" className=''>subcategory</option>
                                </select>
                                Quantity
                                <input type="text" name='coursesPrice' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />
                                
                                Supplier
                                <select name="coursescat" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md'>
                                    <option value="" className=''>Supplier</option>
                                </select>

                                Product Description
                                <textarea name="coursesDescription" id="" className='border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]' cols="30" rows="10"></textarea>
                                <input type="file" name='image' id='file-input' className='border hidden border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />

                                <div className='flex items-center gap-0 mt-[80px]'>
                                    <div className='w-full flex items-center'>
                                        <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                        <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                                    </div>
                                    <div className=''>
                                        <img src='' alt="" width={150} />
                                    </div>
                                </div>

                                <input type="file" name='images[]' multiple='multiple' id='file-input-x' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                <div className='flex items-center gap-0 mt-[80px]'>
                                    <div className='w-full flex items-center'>
                                        <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                        <label id="file-input-label" for="file-input-x" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                                    </div>
                                    </div>
                                
                                <div className='flex items-center mt-5  mb-8 gap-2'>
                                    <input type="radio" name='courseStatus' value={true} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                                    <input type="radio" name='courseStatus' value={false} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
                                </div>

                                <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
                                <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
                            </form>
                        </div>
                    </div>
                    <Footer className />
                </div>
            </div>

        </div>
    )
}

export default AddProduct