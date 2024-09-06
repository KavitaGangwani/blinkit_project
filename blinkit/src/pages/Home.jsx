import React, { useContext } from 'react'
import '../App.css';
import BannerSection from '../Components/BannerSection';
import Footer from '../Components/Footer';
import LinksSection from '../Components/LinksSection';
import ProductsSection from '../Components/ProductsSection';
import Header from '../Components/Header';
import CategorySection from '../Components/CategorySection';


import { category } from '../Context/CategoryContext'



function Home() {

    let { categories, setCategories } = useContext(category)

    let homepagecategories = categories.slice(0, 6)
    let classh1 = 'font-bold text-[25px] m-2'
    // console.log(homepagecategories)

    return (
        <>
            <div className="App box-border">

                    <Header />
    

                <div className='w-full'>

                    <BannerSection />

                    <CategorySection />
                    {homepagecategories.map((v, i) => {
                        return (

                            <ProductsSection heading={v.categoryName} product={v.products} class = {classh1} key={v._id} />


                        )
                    })}






                    <LinksSection catlinks = {categories}/>
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Home