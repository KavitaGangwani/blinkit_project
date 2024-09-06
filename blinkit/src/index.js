import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProdDetails from './pages/ProdDetails';
import { CategoryContext} from './Context/CategoryContext';
import { LoginContext } from './Context/LoginContext';
import { ProductContext } from './Context/ProductContext';
import Orders from './pages/Orders';
import Payment from './pages/Payment';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "cat/:catname",
    element: <Category/>
  },
  {
    path: "prod/:prodname",
    element: <ProdDetails/>
  },
  {
    path: "account",
    element: <Orders/>
  },
  {
    path: "checkout",
    element: <Payment/>
  }

])
root.render(
  <React.StrictMode>
    <ProductContext>
      <LoginContext>
        <CategoryContext>
          <RouterProvider router={router} />

        </CategoryContext>
      </LoginContext>
    </ProductContext>





  </React.StrictMode>
);


