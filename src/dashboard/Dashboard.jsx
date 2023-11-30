import { FaBook, FaCalendar, FaHome, FaList, FaSearch, FaUsers, FaUtensilSpoon, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            
            <div className="w-64 min-h-screen bg-purple-400">
                <ul className="menu p-4">
               
                    <li><NavLink to='/'>home</NavLink></li>
                      <li ><NavLink to='/dashboard/adminhome' ><FaHome></FaHome> Admin Home</NavLink></li>
                    <li ><NavLink to='/dashboard/manageItems' ><FaList></FaList> Manage Items</NavLink></li>
                    <li ><NavLink to='/dashboard/reservation' > <FaCalendar></FaCalendar> RESERvation</NavLink></li>
                    <li ><NavLink to='/dashboard/addmeals' > <FaUtensilSpoon></FaUtensilSpoon>  Add items</NavLink></li>
                    <li ><NavLink to='/dashboard/users' ><FaUsers></FaUsers>All Users</NavLink></li>
                    <li ><NavLink to='/dashboard/ManageBookings' ><FaBook></FaBook>Manage  bookings</NavLink></li>
                  
                      <div className="divider"></div>
                    <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
                    <li ><NavLink to='/meals' > <FaSearch></FaSearch> Menu</NavLink></li>
                    <li ><NavLink to='/contact' > <FaVoicemail></FaVoicemail> Contact</NavLink></li>
                
                  
                  
                  
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            </div>
    );
};

export default Dashboard;