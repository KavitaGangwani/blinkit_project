
import './App.css';
import React, { useContext } from 'react'
import BannerSection from './Components/BannerSection';
import ProductCard from './Components/Cards/ProductCard';
import Sliderbutton from './Components/Cards/Sliderbutton';
import CategorySection from './Components/CategorySection';
import Categorynav from './Components/Categorynav';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LinksSection from './Components/LinksSection';
import Account from './Components/PopUps/Account';
import Cart from './Components/PopUps/Cart';
import Delivery from './Components/PopUps/Delivery';
import Login from './Components/PopUps/Login';
import ProdDesc from './Components/ProdDesc';
import ProductsSection from './Components/ProductsSection';
import {LoginContext} from './Context/LoginContext';
import { login } from './Context/LoginContext'



function App() {



  return (
    <div className="App box-border">
      <LoginContext>
         <Header />
        

      </LoginContext>
     
      <div className='w-full'>

        <BannerSection/>
        <CategorySection/>
        <ProductsSection/>
        <ProductsSection/>
        <ProductsSection/>
        <ProductsSection/>
        <ProductsSection/>
        <ProductsSection/>

        <LinksSection />
        <Footer />


      </div>
      {/* <ProductCard/> */}
      {/* <Login/> */}
      {/* <Delivery/>
      */}
      {/* <Cart/> */}
      {/* <Categorynav/> */}
      {/* <ProdDesc/> */}
      {/* <Sliderbutton/> */}

      {/* <Account/> */}
    </div>
  );
}

export default App;
