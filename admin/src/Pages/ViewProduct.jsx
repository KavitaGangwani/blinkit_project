import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { useNavigate } from 'react-router';

function ViewProduct() {
    let nav = useNavigate();


    let { changemenu } = useContext(mainContext);



    return (
        <div>

            <Header />

            <div className='flex  bg-[#F5F7FF]'>
                <Sidebar />

                <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px]  bg-[#F5F7FF]`}>

                    <h1 className='text-[25px] font-[500] mb-[10px]'>
                        Categories
                    </h1>
                    <div className=''>
                        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
                            <table >
                                <tr>
                                    <th>S.no</th>
                                    <th><button>Delete</button><br />
                                        <label className='text-[14px] font-light' htmlFor=""> <input type="radio" name="" id="" /> Select All </label></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Sub-Category</th>
                                    <th>Quantity</th>
                                    <th>Suplier</th>
                                    <th>Description</th>
                                    <th>Thumbnail</th>
                                    <th>Images</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {/* {/* {course.map((v,i)=>{
              return  */}
                                <tr>
                                    <td>1</td>
                                    <td><label htmlFor=""><input type="radio" /></label></td>
                                    <td>abcd </td>
                                    <td>abcd </td>
                                    <td>abcd </td>
                                    <td>abcd </td>
                                    <td>abcd </td>
                                    <td>abcd </td>
                                    <td>Description</td>
                                    <td> <img height={100} src="" alt="" /></td>
                                    <td><button className=''> jhj</button></td>
                                    <td className='text-center'>

                                        <button className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                                        <button className='bg-red-400 text-white px-5 py-1'>Delete</button>


                                    </td>
                                </tr>


                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default ViewProduct