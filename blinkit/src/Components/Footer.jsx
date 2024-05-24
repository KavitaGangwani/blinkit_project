import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faThreads } from '@fortawesome/free-brands-svg-icons'
import appstore from './../images/d61019073b700ca49d22.webp'
import googlestore from './../images/8ed033800ea38f24c4f0.webp'

function Footer() {
    return (
        <>
            <div className='w-[1280px] m-auto' >

                <div className='w-[1280px] bg-[#FCFCFC] grid grid-cols-3 gap-8 '>
                    <div className="text-[12px] text-slate-400 my-4">
                        <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024</p>
                    </div>
                    <div className=" px-6 grid grid-cols-3 mt-6 ">
                        <div>
                            <p className='text-slate-400 font-bold'>Download App</p>
                        </div>
                        <div >
                            <img className='mx-auto' src={appstore} width={92} height={34} alt="" />
                        </div>
                        <div>
                            <img className='mx-auto' src={googlestore}  width={92} height={34} alt="" />
                        </div>
                    </div>

                    <div className="  ps-[80px] my-4 ">
                        <div className= '  grid grid-cols-5 gap-3 text-[40px] '>
                        <FontAwesomeIcon className='mx-4' icon={faFacebookF} />
                        <FontAwesomeIcon className='mx-4' icon={faTwitter} />
                        <FontAwesomeIcon className='mx-4' icon={faInstagram} />
                        <FontAwesomeIcon className='mx-4' icon={faLinkedinIn} />
                        <FontAwesomeIcon className='mx-4' icon={faThreads} />
                        </div>
                        
                    </div>

                </div>
                <div className='w-[1280px] text-slate-400'>
                    “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.

                </div>

            </div></>
    )
}

export default Footer