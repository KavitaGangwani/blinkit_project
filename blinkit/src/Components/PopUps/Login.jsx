import React, { useContext, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import applogo from './../../images/app_logo.svg'
import { login } from '../../Context/LoginContext'
import OtpInput from 'react-otp-input';

import OTPInput, { ResendOTP } from "otp-input-react";



function Login() {

    let { isLogin, setLogin, loggedIn, setLoggedIn } = useContext(login)
    //   console.log(isLogin,setLogin)

    let [noEmailEnter, setEmailEnter] = useState(true)


    const [otp, setOtp] = useState(' ');
    let [formData, SetFormData] = useState({})
    console.log(otp, setOtp)

    const bg = useRef()

    const emailSubmit = (e) => {
        e.preventDefault()
        console.log(formData, "on submit")
        setEmailEnter(false)

    }

    const generateOtp = async () => {

        let response = await fetch('http://localhost:4001/generateotp', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })

        response = await response.json()
        console.log(response)

    }

    const matchOtp = (e) => {
        console.log(e.target)
    }




    return (
        <>

            <div ref={bg} className='h-[100vh] w-[100vw] bg-[#1a1717a7] fixed top-0 left-0'>
                {(!loggedIn) ? (noEmailEnter) ?
                    <div className='bg-[white] h-[340px] w-[570px] absolute border -translate-y-1/2 -translate-x-1/2 top-[50%] left-[50%] rounded-2xl truncate  '>
                        <div className='h-[64px] w-[92%] m-4 flex gap-[215px] '>
                            <div>
                                <FontAwesomeIcon icon={faArrowLeft} onClick={() => { setLogin(false) }} />
                            </div>
                            <div className=''>
                                <img src={applogo} alt="" />
                            </div>
                        </div>
                        <div className='w-[270px] h-[56.8px] m-auto text-center'>
                            <p className='font-bold text-[20px]'>India's last minute app</p>
                            <p >Log in or Sign up</p>

                        </div>
                        <div className='w-[300px] h-[115px] my-5 mx-auto'>
                            <form action="" className='flex flex-col ' onSubmit={emailSubmit}>
                                <input className='h-[47px] outline-none border rounded-xl font-[bold]' type="email" placeholder='Enter email' required
                                    name='email'
                                    value={formData.email}
                                    onChange={(e) => { SetFormData({ ...formData, email: e.target.value }) }} />
                                <button type='submit' className='w-full h-[50px] mt-4 rounded-xl bg-[#9c9c9c] text-[white]' onClick={generateOtp}>Continue</button>
                            </form>
                        </div>
                        <div className='bg-[#fbfbfb] text-center text-[12px] p-[8px_0px]'>
                            <p>By continuing, you agree to our Terms of service & Privacy policy</p>
                        </div>

                    </div> :
                    <div className='bg-[white] h-[340px] w-[570px] absolute border -translate-y-1/2 -translate-x-1/2
    top-[50%] left-[50%] rounded-2xl truncate  '>
                        <div className=' w-[92%] m-5 flex gap-[200px] border-b-2 pb-3'>
                            <div>
                                <FontAwesomeIcon icon={faArrowLeft} onClick={() => { setEmailEnter(true) }} />
                            </div>
                            <div className=''>
                                <p>OTP Verification</p>
                            </div>
                        </div>
                        <div className='w-[270px] h-[56.8px] m-auto my-2 text-center'>
                            <p >We have sent a verification code to</p>
                            <p className='font-semibold text-[20px]'>(entered email)</p>

                        </div>
                        <div className='w-[330px] h-[115px] my-5 mx-auto text-center' >
                            <form action="" className='flex flex-col '>
                                
                                    <OtpInput 
                                        containerStyle={' w-[330px] m-auto grid grid-cols-4 '}
                                        value={otp}
                                        onChange={matchOtp}
                                        numInputs={4}
                                        shouldAutoFocus = {true}
                                        inputStyle={'px-8 py-3 text-[22px] m-2 focus:border-slate-500 border outline-none rounded-xl '}
                                    
                                        renderInput={(props) => <input name='otp' value={otp} {...props} />}/>

                                {/* <OTPInput className='w-[330px] h-[50px] border m-auto ' value={otp} onChange={setOtp} autoFocus OTPLength={4} otpType="number" disabled={false}inputClassName = 'px-8 py-3 text-[22px] m-2 focus:border-slate-500 border outline-none rounded-xl' style = {{color:'black'}} inputStyles = {{color:'black'}}/> */}

                            </form>
                            <p className='text-slate-400 my-2'>Resend code (in xy seconds) </p>
                        </div>


                    </div> : <div className='bg-[white] h-[340px] w-[570px] absolute border -translate-y-1/2 -translate-x-1/2
                top-[50%] left-[50%] rounded-2xl truncate flex flex-col items-center justify-center  '>


                    <div >
                        <FontAwesomeIcon className='text-[#0D831E] my-2 text-[30px]' icon={faCircleCheck} />
                    </div>
                    <p className='text-[#0D831E] '>Successfully Logged In</p>
                </div>}










            </div>
        </>
    )
}

export default Login