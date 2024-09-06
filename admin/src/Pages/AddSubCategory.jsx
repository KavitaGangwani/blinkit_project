import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import DashboardItems from '../Common/DashboardItems'
import Footer from '../Common/Footer'
import { mainContext } from '../Context'
import prev from '../img/generic-image-file-icon-hi.png'
import { useNavigate, useParams } from 'react-router'


// import AdminForms from '../Common/AdminForms'

function AddSubCategory() {

  let nav = useNavigate();
  let {changemenu} = useContext(mainContext);

  let [category, setCategory] = useState([])
  const [data,setData] = useState({})

  let {subname} = useParams();
  // console.log(subname)

  const bySubName = async()=>{

    let response = await fetch(`http://localhost:4001/viewSubCatbysub/${subname}`)
    response = await response.json()
    console.log(response)
    setData(response.data)
    
    
    
    
  }
  useEffect(()=>{
    if(subname){
      
      bySubName()
      
    
      
      
      
    }

  },[])

  // useEffect(()=>{
  //   console.log('changes in data')
    
  // },[data])
  


  const fetchCat = async () => {
    let response = await fetch('http://localhost:4001/viewCat');
  response = await response.json();
    if (response.status) {
      setCategory(response.data)
    }
  }


 

  const addSubCat = async(e)=>{
    e.preventDefault();

    if(!subname){
      let response = await fetch('http://localhost:4001/addSubCat', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(data)
      });
  
      response = await response.json()
      console.log(response)
      alert('subcategory added')

    }
    else{
      let response = await fetch(`http://localhost:4001/updateSubCat/${subname}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(data)
      });
  
      response = await response.json()
      console.log(response)
      if(response.status){
        alert('subcategory updated')
        nav('/viewCategory')
      }
     

    }
    

  }
  
 

  useEffect(() => {

    fetchCat();

  }, [])

  let [prevCat,setprevCat] =useState('')

  console.log(data)
  
 

 
  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>

      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Sub-Categories
        </h1>
        <div className=''>
          <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          <form  onSubmit={addSubCat} >
            Category Name
            <select   id="" name="categoryName"  className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md' value = {data.categoryName}  onChange={(e)=>{setData({...data,categoryName: e.target.value })}} >
              {category.map((v,i)=>{
                // console.log(v)
                return(
                  <option  key={i} value={v._id}  >{v.categoryName}</option>
                )

              })}
              
            </select>
            Sub-Category Name
            <input type="text" name='Subcategory' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' 
            value={data.Subcategory}
            onChange={(e)=>{setData({...data,Subcategory: e.target.value })}}  />
            
            <div className='flex items-center mt-5  mb-8 gap-2'>
            <input type="radio" name='SubcategoryStatus' checked={(!data.categoryStatus)} value={true} className='mx-2 w-[20px] h-[20px] text-[20px]' onChange={(e)=>{setData({...data,SubcategoryStatus: e.target.value })}}  /> Active
            <input type="radio" name='SubcategoryStatus' checked={(data.categoryStatus)} value={false} className='mx-2 w-[20px] h-[20px] text-[20px]'  onChange={(e)=>{setData({...data,SubcategoryStatus: e.target.value })}}   /> Deactive
            </div>
            
            <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
            <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
          </form>
          </div>
        </div>
      <Footer />
      </div>
    </div>

    </div>
  )
}

export default AddSubCategory