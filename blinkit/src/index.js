import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProdDetails from './pages/ProdDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"cat",
    element:<Category/>
  },
  {
    path:"prod",
    element:<ProdDetails/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);


