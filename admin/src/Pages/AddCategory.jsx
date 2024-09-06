import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import DashboardItems from '../Common/DashboardItems'
import Footer from '../Common/Footer'
import { mainContext } from '../Context';


import { useNavigate, useParams } from 'react-router'
import { Form } from 'react-router-dom'

function AddCategory() {

  let nav = useNavigate();
  let { changemenu } = useContext(mainContext);

  const {id} = useParams();
  console.log(id)
 


  const [prevImg, setprevImg] = useState('')
  const [dataField,setDataField]= useState({})

  
  // PREVIEW IMAGE FUNCTION
  const imgPrevfunc = (e) => {
    

    console.log('run')
  
    const file = e.target.files[0];

    const newfile = new FileReader();

    if (file) {
      newfile.readAsDataURL(file);


      newfile.onload = () => {
        setprevImg(newfile.result);
      }


    }
  }
  

 

  // BY ID FETCH FUNCTION
  const byId = async()=>{

    let response = await fetch(`http://localhost:4001/viewCatid/${id}`)
    response = await response.json()
   
    setDataField(response.data)
    
  }
  useEffect(()=>{
    if(id){
      byId()
    }

  },[])

  useEffect(()=>{
    setprevImg(dataField.categoryImage)
  },[dataField])
 

  


// ADDITION OF CATEGORIES
  const addingCategory = async(e) => {

    e.preventDefault();
    let form = e.target
    let formData =  new FormData(form)
   
   
    if(!id){
      let response = await fetch('http://localhost:4001/addCat', {
        method: 'POST',
        // headers: {
        //   "Content-type": "application/json"
        // },
  
        body:formData
      });
  
      response = await response.json()
      console.log(response)
    }
    else{

      let response = await fetch(`http://localhost:4001/updateCat/${id}`, {
        method: 'PUT',
        // headers: {
        //   "Content-type": "application/json"
        // },
  
        body:formData
      });
  
      response = await response.json()
      console.log(response)
      if(response.status){
        alert('Data Updated Successfully')

      }
      
    }

   
    
   
    
  }

  return (
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
              <form action="" onSubmit={addingCategory} >
                Category Name
                <input  type="text" className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2' 
                name='categoryName'
                value={dataField.categoryName}
                onChange={(e)=>{setDataField({...dataField,categoryName: e.target.value })}}
                
               />
                {/* ADDING CATEGORY IMAGE IN THIS INPUT */}
                <input type='file' name='categoryImage' onChange={imgPrevfunc} id='file-input' className='border hidden border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' 
          
                 />
                <div className='flex items-center gap-0 mt-[80px]'>
                  <div className='w-full flex items-center'>
                    <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                    <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  ' >Upload</label>
                  </div>
                  <div className=''>
                    <img src={prevImg} alt="" width={150} />
                  </div>
                </div>

                <div className='flex items-center mt-5  mb-8 gap-2'>
                  <input type="radio" name='categoryStatus' value={true}  checked={dataField.categoryStatus} className='mx-2 w-[20px] h-[20px] text-[20px]'
                  onChange={(e)=>{setDataField({...dataField,categoryStatus: e.target.value })}}
                  
                    /> Active
                  <input type="radio" name='categoryStatus' checked={!(dataField.categoryStatus)} value={false} className='mx-2 w-[20px] h-[20px] text-[20px]'
                  onChange={(e)=>{setDataField({...dataField,categoryStatus: e.target.value })}}
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
  )
}


export default AddCategory