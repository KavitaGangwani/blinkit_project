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

    const [prevImg, setprevImg] = useState('');
    let [thumbnails,setThumbnails] = useState([])

    let [subId, setSubid] = useState(8)

    // PREVIEW IMAGE FUNCTION
    const imgPrevfunc = (e) => {
        let file = e.target.files
       

        console.log('run')

            let newfile = new FileReader();

            if (file) {

                newfile.readAsDataURL(file.item(0));

                newfile.onload = () => {
                
                    setprevImg(newfile.result);
                }
        }
    }

    const imgPrevfunc2 = (e) => {
        let file = e.target.files
       

        console.log('run')

        

            if (file) {

                if(file.length>1){
                    for(let i=0 ; i<file.length;i++  ){
                         let newfiles = new FileReader();
                        console.log('more than 1')
                        newfiles.readAsDataURL(file.item(i));

                        newfiles.onload = () => {
                            console.log(newfiles)

                            setThumbnails((prev)=>[...prev,newfiles.result]);
                        }
        
                    }
                }
        }
    }

   
    let [category, setCategory] = useState([])
    let [supplier, setSupplier] = useState([])
    let [subcategory, setSubcategory] = useState([])


    const fetchData = async () => {
        let catresponse = await fetch('http://localhost:4001/viewCat');
        catresponse = await catresponse.json();
        if (catresponse.status) {
            setCategory(catresponse.data)
        }

        let supresponse = await fetch('http://localhost:4001/viewSup');
        supresponse = await supresponse.json();
        if (supresponse.status) {
            setSupplier(supresponse.data)
        }
    }

    const handleCat = async(e)=>{
        const catId = e.target.value 
        let response = await fetch(`http://localhost:4001/viewSubCat/${catId}`);
        response = await response.json();
        if (response.status) {
            setSubcategory(response.data)
        }
    }

    useEffect(() => {

        fetchData();

    }, [])

    // Add product
    const addProduct =  async(e)=>{

        e.preventDefault();
        let form = e.target
        let formData =  new FormData(form)
        // console.log(formData);
        
        let response = await fetch('http://localhost:4001/addProd', {
          method: 'POST',
          // headers: {
          //   "Content-type": "application/json"
          // },
    
          body:formData
        });
    
        response = await response.json()
        console.log(response)
        alert('product has been successfuly added')
        window.location.reload();

    }




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
                            <form action="" onSubmit={addProduct} >
                                Product Name
                                <input type="text" name='prodName' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />
                                Price
                                <input type="text" name='price' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />
                                Category
                                <select name="category" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md' onChange={handleCat}>
                                    {category.map((v, i) => {
                                        // console.log(v)
                                        return (
                                            <option selected key={i} value={v._id} className='' >{v.categoryName}</option>
                                        )

                                    })}
                                </select>
                                Sub-Category
                                <select name="subcategory" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md' onChange={(e)=>{
                                    console.log(e.target.value)

                                }}>
                                    {subcategory.map((v, i) => {
                                        console.log(v)

                                        return (
                                            <option key={i} value={v._id} >{v.Subcategory}</option>
                                        )




                                    })}
                                </select>

                                Quantity
                                <input type="text" name='quantity' className='border px-4 border-gray-400 w-full h-[40px] outline-none rounded-md mb-3 mt-2 ' />

                                Supplier
                                <select name="supplier" id="" className='w-full border my-3 border-gray-400 h-[40px] outline-none rounded-md'>
                                    {supplier.map((a, b) => {
                                        return (

                                            <option key={b} value={a._id} className='' >{a.supplierName}</option>
                                        )
                                    })}
                                </select>

                                Product Description
                                <textarea name="prodDesc" id="" className='border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]' cols="30" rows="10"></textarea>


                                <input type="file" onChange={imgPrevfunc} name='prodImg' id='file-input' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />

                                <div className=' flex items-center gap-0 mt-[80px]'>
                                    <div className='w-full flex items-center'>
                                        <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                        <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                                    </div>
                                    <div className=''>
                                        <img src={prevImg} alt="" width={150} />
                                    </div>
                                </div>

                                <input type="file" onChange={imgPrevfunc2} name='images' multiple='multiple' id='file-input-x' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                <div className=' flex items-center gap-0 mt-[80px]'>
                                    <div className='w-full flex items-center'>
                                        <input type="text" readOnly placeholder='Upload Files' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[60%] h-[50px]' />
                                        <label id="file-input-label" for="file-input-x" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                                        <div className='flex'>
                                            {thumbnails.map((x,y)=>{
                                                return(
                                                    <img className='m-1' src={x} alt="" width={50} />
                                                )
                                            })}
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center mt-5  mb-8 gap-2'>
                                    <input type="radio" name='prodStatus' value={true} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                                    <input type="radio" name='prodStatus' value={false} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
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