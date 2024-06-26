import React, { useState , useEffect} from 'react'
import Header from '../Common/Header'
import logo from '../img/logo (1).svg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
function Login() {

  // MAKE A STATE FOR USERDATA
  const [userData,setuserData] = useState({admin_name: " ",
                                            password: " "})

  console.log(userData);

  let nav = useNavigate();

  // A FUNCTION WORKING ON FORM SUBMIT
   const loginHandler = async(e)=>{
    e.preventDefault();
    try{
      const respnse = await fetch('http://localhost:4001/login',{
                                   method:'POST' ,
                                   headers: {
                                    "Content-type" : "application/json"
                                   },
                                   body : JSON.stringify(userData)
      } )

      const res = await respnse.json();
      console.log(res)
     if(res.status){
      console.log(res);
      Cookies.set('admin_name',JSON.stringify(res));
        nav("/dashboard")
      
     }

   
    }
    catch(error){
      alert('sonething went wrong')
    }
  
  }


  // A FUNCTION TO CHECK THAT IF DATA IS IN COOKIES TO BE LOGGED IN
  const checkLogin = ()=>{

    let cookieData = Cookies.get('admin')
    console.log(cookieData);
    if(cookieData){
      nav('/dashboard');
    }
  }

  useEffect(()=>{
    checkLogin();
  },[])

 

  return (
   
    <div className='bg-[#F5F7FF] w-full h-[100vh] flex justify-center items-center'>
        <div className='w-[500px]  bg-white px-[50px] py-[50px] '>
            <img src={logo} alt="" width={180} className='mb-5' />
            <h3 className='text-black text-[16px] font-[400]'>Sign in to continue.</h3>

        <form action="" onSubmit={loginHandler}>  
        {/* ON FORM TAG A FUNCTION ON SUBMIT WILL RUN */}

            <input type="text" className=' mt-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]' placeholder='Username'  onChange={(e)=>{
              setuserData({...userData,admin_name :  e.target.value})}}  />
              {/* ON CHANGE ON INPUTS WHERE STATE WILL CHANGE */}
            <input type="text" className=' mt-6 mb-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]' placeholder='Password'  onChange={(e)=>{
              setuserData({...userData,password :  e.target.value})}}  />

            <input type="submit" className='w-full bg-[#4B49AC] text-center text-[30px] text-white py-5 rounded-[18px]  font-sans font-[400]' />
        <div className='flex items-center mt-4 justify-between mb-4'>
            <div className='flex items-center text-[gray] font-sans'> <input type="checkbox" className='mr-3 w-[17px] h-[17px]  appearance-none outline outline-2 outline-blue-700' />Keep me signed in</div>
            <div className='flex items-center text-[black] font-sans'>
            Forgot password? </div>
        </div>
        </form>
        </div>
    </div>
    
  )
}

export default Login