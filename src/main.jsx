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


import AddItems from './dashboard/AddItems.jsx';
import UpComingMeals from './dashboard/UpComingMeals.jsx';
import Detail from './dashboard/Detail.jsx';
import ManageItems from './dashboard/ManageItems.jsx';
import AllUsers from './dashboard/AllUsers.jsx';


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
      loader:({params})=>fetch(`https://final-project-new.vercel.app/meals/${params.id}`)
    },
    {
path:'/detail/:id',
element:<Detail></Detail>,
loader:({params})=>fetch(`https://final-project-new.vercel.app/addmeal/${params.id}`)
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
    children:[  
      {
        path:'/dashboard',
        element:<AddItems></AddItems>
      },
      {
      path:'/dashboard/users',
      element:<AllUsers></AllUsers>
    },
    
    {
      path:'/dashboard/manageItems',
      element:<ManageItems></ManageItems>
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
