import React from 'react'

function Account() {
    return (
        <>

            <div className='h-[100vh] w-[100vw] bg-[#2c20208c] fixed top-0 left-0' >
                <div className='w-[246px] bg-white rounded-xl p-4 absolute top-[70px] right-[155px]' >
                    <div className='border '>
                        <p className='text-slate-500 font-bold '>My account</p>
                        <p className='text-slate-500 text-[12px]'>(email)</p>
                    </div>
                    <div className='border my-2'>
                        <ul>
                            <li className='text-slate-500 text-[12px] my-1'>My Orders</li>
                            <li>My Orders</li>
                            <li>My Orders</li>
                            <li>My Orders</li>
                            <li>My Orders</li>
                        </ul>
                    </div>
                    {/* <div className='border'>Qr</div> */}
                </div>

            </div>
        </>
    )
}

export default Account