import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { category } from './../Context/CategoryContext'

function LinksSection({ catlinks }) {

    const nav = useNavigate()
    let {fetchCatByName} = useContext(category)

  
    return (
        <>

            <div className='w-[1280px]  h-[333] grid grid-cols-[427px_852px] mx-auto my-8'>
                <div >

                    <h3 className='font-bold text-[18px]'>Useful Links</h3>
                    <div className='grid grid-cols-3 my-3 text-slate-500'>
                        <div>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Blogs</li>
                                <li>Press</li>
                                <li>Lead</li>
                                <li>Value</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>FAQs</li>
                                <li>Security</li>
                                <li>Mobile</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Partner</li>
                                <li>Express</li>
                                <li>Seller</li>
                                <li>WareHouse</li>
                                <li>Deliver</li>
                                <li>Resources</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className=''>

                    <div className='flex'>
                        <h3 className='font-bold text-[18px]'>Categories</h3>

                    </div>

                    <div className='my-5 text-slate-500'>
                        <ul className='columns-3 '>
                            {catlinks.map((v, i) => {
                                return (
                                     <li className='w-[250px] cursor-pointer hover:underline' key={v._id} data-value={v.categoryName} onClick={async(e)=>{
                                        await fetchCatByName(e);
                                        nav(`cat/${v.categoryName}`)
                                     }}  >{v.categoryName}</li>
                                 
                                )
                            })}

                        </ul>



                    </div>
                </div>



            </div>

        </>
    )
}

export default LinksSection