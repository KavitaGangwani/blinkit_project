import React from 'react'
import Categorynav from '../Components/Categorynav'
import Header from '../Components/Header'
import LinksSection from '../Components/LinksSection'
import Footer from '../Components/Footer'
import Subcategory from '../Components/Subcategory'
import ProdDesc from '../Components/ProdDesc'
import ProductsSection from '../Components/ProductsSection'
import CategoryDesc from '../Components/CategoryDesc'

function Category() {
  return (
    <>
    <div className="App box-border">
                
                    <Header/>
                    <Categorynav/>
                    <div className='flex w-[1280px] border m-auto'>
                        <Subcategory/>
                        <ProductsSection/>
                        
                    </div>
                    <CategoryDesc/>
              



               

                    

                    <LinksSection />
                    <Footer />


               
            </div>
    
    </>
  )
}

export default Category