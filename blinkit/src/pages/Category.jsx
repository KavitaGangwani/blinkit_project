import React, { useContext, useEffect } from 'react'
import Categorynav from '../Components/Categorynav'
import Header from '../Components/Header'
import LinksSection from '../Components/LinksSection'
import Footer from '../Components/Footer'
import Subcategory from '../Components/Subcategory'
import ProdDesc from '../Components/ProdDesc'
import ProductsSection from '../Components/ProductsSection'
import CategoryDesc from '../Components/CategoryDesc'
import { category } from '../Context/CategoryContext'
import { useParams,useLocation } from 'react-router-dom'

function Category() {
  let { categories,nameCat,fetchCatByName,setNameCat } = useContext(category)
  
  let catname = useParams();
 
  console.log(catname)
  
  console.log(nameCat,'from categ page')


  // for the back buttons
  useEffect(() => {
    if (catname && catname.catname) {
        fetchCatByName(null, catname.catname);  // Call fetchCatByName with the category name
    }
}, [catname]);

useEffect(() => {
  const fetchData = async()=>{
    if (!nameCat  && catname.catname) {
      await fetchCatByName(null, catname.catname);  // Call fetchCatByName with the category name
      console.log("this ude effect is running")
  }

 
  }

  fetchData();
  
}, []);


  
  
  return (
    <>
    <div className="App box-border">
                
                    <Header/>
                    <Categorynav cats = {categories}/>
                    <div className='flex w-[1280px]  m-auto'>
                        <Subcategory catbysub = {nameCat.subcategories}/>
                        <ProductsSection heading={nameCat.categoryName} product={nameCat.products}  catname={catname} />
                        
                    </div>
                    <CategoryDesc subcat = {categories}/>


                    <LinksSection catlinks = {categories}/>
                    <Footer />


               
            </div>
    
    </>
  )
}

export default Category