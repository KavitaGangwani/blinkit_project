import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { useNavigate } from 'react-router';

function ViewCategory() {
  let nav = useNavigate();
  let { changemenu } = useContext(mainContext);

  let [category, setCategory] = useState([])

  // FETCHING CATEGORIES 
  const fetchCat = async () => {
    let response = await fetch('http://localhost:4001/viewCat');
    response = await response.json();
    console.log(response.data)
    if (response.status) {
      setCategory(response.data)
    }


  }

  useEffect(() => {

    fetchCat();

  }, [])



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
                  <th>Category Name</th>


                  <th>Sub-Categories</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {category.map((v, i) => {
                  return(
                  <tr>
                    <td>{i+1}</td>
                    <td><label htmlFor=""><input type="radio" /></label></td>
                    <td>{v.categoryName} </td>
                    <td>...</td>
                    <td> <img height={100} src={v.categoryImage} alt="" /></td>
                    <td><button className=''> {v.categoryStatus}</button></td>
                    <td className='text-center'>

                      <button className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                      <button className='bg-red-400 text-white px-5 py-1'>Delete</button>


                    </td>
                  </tr>
                  )
                })}


              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default ViewCategory