import React from 'react'
import Header from '../Components/Header'
import LinksSection from '../Components/LinksSection'
import Footer from '../Components/Footer'
import ProdDesc from '../Components/ProdDesc'
import { LoginContext } from '../Context/LoginContext';

function ProdDetails() {
  return (
    <>
     <LoginContext>
                    <Header />
                </LoginContext>
    <ProdDesc/>
    <LinksSection />
     <Footer />
    </>
  )
}

export default ProdDetails