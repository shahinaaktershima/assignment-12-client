import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './main/Main.jsx';
import Home from './home/Home.jsx';
import Login from './usersetup/Login.jsx';
import SignUp from './usersetup/SignUp.jsx';
import AuthProvider from './usersetup/AuthProvider.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Details from './home/Details.jsx';
import Error from './home/Error.jsx';
import Meals from './meals/Meals.jsx';

import Users from './dashboard/Users.jsx';
import AddItems from './dashboard/AddItems.jsx';
import UpComingMeals from './dashboard/UpComingMeals.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {

      path:'/details/:id',
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/meals/${params.id}`)
    },
    {
      path:'/meals',
      element:<Meals></Meals>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:'/Upcomingmeals',
      element:<UpComingMeals></UpComingMeals>
    }
  
  ]
  },
  
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[{
      path:'/dashboard/users',
      element:<Users></Users>
    },
    {
      path:'/dashboard/addmeals',
      element:<AddItems></AddItems>
    }
  
  ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-7xl mx-auto'>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
   </div>
  </React.StrictMode>,
)
