import React, { useContext } from 'react'
import Header from '../Components/Header'
import LinksSection from '../Components/LinksSection'
import Footer from '../Components/Footer'
import ProdDesc from '../Components/ProdDesc'
import { LoginContext } from '../Context/LoginContext';

import { category } from '../Context/CategoryContext'
import { product } from '../Context/ProductContext'

function ProdDetails() {
  let {categories, setCategories } = useContext(category)
  let {products, prodByName} = useContext(product)
  console.log(prodByName)
  return (
    <>

      <Header />

      <ProdDesc products={prodByName} />
      <LinksSection catlinks={categories} />
      <Footer />
    </>
  )
}

export default ProdDetails