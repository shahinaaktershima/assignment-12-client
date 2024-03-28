import { useContext, useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../usersetup/AuthProvider";
import useAxios from "../useHooks/useAxios";



const Navbar = () => {
  const axios=useAxios();
  const [upcomming,setupcomming]=useState([]);
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }
useEffect(()=>{
axios.get('/addmeal')
.then(res=>setupcomming(res.data))

},[])
  const navlinks= <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/meals'>Meals</NavLink></li>
  <li><NavLink to='/Upcomingmeals'>Upcoming meals</NavLink></li>
  <li><div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-sm indicator-item">{upcomming.length}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">Total {upcomming.length} Items Added</span>
         
        </div>
      </div>
    </div></li>
 
  
 </>


    return (
      <div className="navbar bg-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="font-bold text-xl  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navlinks
           }
          </ul>
        </div>
        <a className="btn btn-ghost md:text-xl text-sm">Hostel management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
         {
          navlinks
         }
        </ul>
      </div>
      <div className="navbar-end mr-14 md:mr-20">
      {
    user?
    <div className="dropdown">
    <div tabIndex={0} role="button" className="m-1 md:mr-12 mr-6 ">
      {
        user?.photoURL?<img className="md:h-[50px] md:w-[50px] h-[20px] w-[20px] rounded-full" src={user?.photoURL} alt="" />: <div className="avatar">
        <div className="md:h-[50px] md:w-[50px] h-[25px] w-[25px] rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      }
      </div>
    <ul className="dropdown-content z-[1] menu md:p-2 shadow bg-base-100 rounded-box md:w-52 w-[104px] text-center">
      <li>{user?.displayName}</li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      <button onClick={handleLogOut} className="">LogOut</button>
    </ul>
  </div>:  <NavLink className='btn bg-blue-800 border-0'  to='/login'>Join us</NavLink>
  }
      </div>
    </div>
    );
};

export default Navbar;