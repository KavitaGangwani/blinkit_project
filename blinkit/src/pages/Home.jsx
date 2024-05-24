import React from 'react'
import '../App.css';
import BannerSection from '../Components/BannerSection';
import Footer from '../Components/Footer';
import LinksSection from '../Components/LinksSection';
import ProductsSection from '../Components/ProductsSection';
import Header from '../Components/Header';
import CategorySection from '../Components/CategorySection';
import { LoginContext } from '../Context/LoginContext';



function Home() {
    return (
        <>
            <div className="App box-border">

                <LoginContext>
                    <Header />
                </LoginContext>




                <div className='w-full'>

                    <BannerSection />
                    <CategorySection />
                    <ProductsSection />
                    <ProductsSection />
                    <ProductsSection />
                    <ProductsSection />
                    <ProductsSection />
                    <ProductsSection />

                    <LinksSection />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Home