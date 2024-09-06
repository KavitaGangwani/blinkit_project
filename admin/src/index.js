import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Context from './Context';




import Viewuser from './Pages/Viewuser';



import AddCategory from './Pages/AddCategory';
import ViewCategory from './Pages/ViewCategory';
import AddSubCategory from './Pages/AddSubCategory';
import AddProduct from './Pages/AddProduct';
import ViewProduct from './Pages/ViewProduct';
import AddSupplier from './Pages/AddSupplier';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"dashboard",
    element:<Dashboard/>
  },
  
  {
    path:"addCategory/:id?",
    element:<AddCategory/>
  },
  {
    path:"viewCategory",
    element:<ViewCategory/>
  },
  {
    path:"addSubCategory/:subname?",
    element:<AddSubCategory/>
  },
  // {
  //   path:"viewCategory",
  //   element:<ViewCategory/>
  // },
  {
    path:"addProduct",
    element:<AddProduct/>
  },
  {
    path:"viewProduct",
    element:<ViewProduct/>
  },
  {
    path:"addSupplier",
    element:<AddSupplier/>
  },
  
 
  {
    path:"viewuser",
    element:<Viewuser/>
  }


])
root.render(
   <Context>
  <RouterProvider router={router}/>

   </Context>

  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
