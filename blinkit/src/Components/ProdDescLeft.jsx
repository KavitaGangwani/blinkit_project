import React from 'react'

function ProdDescLeft(props) {
   let product = props.prod
   console.log(product)
  return (
    <>
    <div className='border-b-[1px]'>
                    <div className='m-auto'>
                        <img src={product.prodImg} className='border' width={480} height={480} alt="" />
                    </div>
                    <div className='m-auto my-2'>
                        <div className='rounded-xl  overflow-hidden flex' >
                            {(product.images).map((v,i)=>{
                                return(
                                    <img src={v} className='border m-2 rounded-md' width={65} height={65} alt="" />
                                )
                            })}
                           
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold m-3'>Product Details</h3>
                        <h1>{product.prodDesc}</h1>
                    </div>
                </div>
    </>
  )
}

export default ProdDescLeft