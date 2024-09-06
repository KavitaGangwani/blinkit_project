import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faXmark} from '@fortawesome/free-solid-svg-icons'

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

  const handleUpdate = (e)=>{
    const id = e.target.value
    nav(`/addCategory/${id}`)
  }

  const handleSubUpdate = (e)=>{
    let subname = e.target.dataset.value
    console.log(subname)
  
    nav(`/addSubCategory/${subname}`)

  }

  const handleSubDelete = async (e)=>{

    let subname = e.target.dataset.value
    console.log(subname)
    let response = await fetch(`http://localhost:4001/deleteSubCat/${subname}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(category)
    });
    response = await response.json();
    console.log(response)
    if (response.status) {
     alert('deleted')
     fetchCat()
    }


  }



  const handleDelete = async(e)=>{
    const id = e.target.value
    console.log(id)
    let response = await fetch(`http://localhost:4001/deleteCat/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(category)
    });
    response = await response.json();
    console.log(response)
    if (response.status) {
     alert('deleted')
     fetchCat()
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
                {category.map((v, pi) => {
                  return(
                  <tr>
                    <td>{pi+1}</td>
                    <td><label htmlFor=""><input type="radio" /></label></td>
                    <td>{v.categoryName} </td>
                    <td>{(v.subcategories).map((elem,i)=>{
                      
                      return(
                      <p className='flex justify-between'>{elem} 
                      <span className='text-slate-400 '>
                        <label  for={`up${pi}${i}`}   >
                        <input type='text' onClick={handleSubUpdate}  className='hidden' id={`up${pi}${i}`} data-value={elem}  />
                         
                           <FontAwesomeIcon className='m-1' icon={faEdit}  />
                        </label>
                       
                        <label htmlFor="" for={`del-${pi}${i}`} > 
                        <input type='text' onClick={handleSubDelete} className='hidden' data-value={elem}  id={`del-${pi}${i}`} />
                        <FontAwesomeIcon  className='m-1' icon={faXmark} /></label>
                       
                      </span>
                      </p>
                    )
                    })}</td>
                    <td> <img width={120} src={v.categoryImage} alt="" /></td>
                    <td><button className=''> {`${v.categoryStatus}`}</button></td>
                    <td className='text-center'>

                      <button className='bg-green-500 text-white px-5 mr-5 py-1' value={v._id} onClick={handleUpdate}>Edit</button>
                      <button className='bg-red-400 text-white px-5 py-1' value={v._id} onClick={handleDelete}>Delete</button>


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