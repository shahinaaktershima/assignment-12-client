import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../usersetup/AuthProvider";



const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }

  const navlinks= <>
  <li><a href=""><NavLink to='/'>Home</NavLink></a></li>
  <li><a href=""><NavLink to='/meals'>Meals</NavLink></a></li>
  <li><a href=""><NavLink to='/Upcomingmeals'>Upcoming meals</NavLink></a></li>
  <li><a href=""><NavLink to='/notification'>Notification</NavLink></a></li>
 
  
 </>


    return (
      <div className="navbar bg-purple-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="font-bold text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navlinks
           }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Hostel management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
          navlinks
         }
        </ul>
      </div>
      <div className="navbar-end mr-20">
      {
    user?
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn m-1"><img className="h-[50px] w-[50px] rounded-full" src={user.photoURL} alt="" /></div>
    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center">
      <li>{user.displayName}</li>
      <li><a><NavLink to='/dashboard'>Dashboard</NavLink></a></li>
      <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
    </ul>
  </div>:  <li><a href=""><NavLink to='/login'>Join us</NavLink></a></li>
  }
      </div>
    </div>
    );
};

export default Navbar;