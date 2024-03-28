import { FaHome, FaList, FaSearch, FaUsers, FaUtensilSpoon,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
 
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-64 w-full md:min-h-screen bg-purple-400">
                <ul className="menu p-4 flex md:flex-col flex-row">
               
                   
                <li ><NavLink to='/dashboard' > <FaUtensilSpoon></FaUtensilSpoon>  Add items</NavLink></li>
                    <li ><NavLink to='/dashboard/manageItems' ><FaList></FaList> Manage Items</NavLink></li>
                   
                    
                    <li ><NavLink to='/dashboard/users' ><FaUsers></FaUsers>All Users</NavLink></li>
                    
                  
                      <div className="divider"></div>
                    <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
                    <li ><NavLink to='/meals' > <FaSearch></FaSearch> Menu</NavLink></li>
                    
                
                  
                  
                  
                </ul>
            </div> 
            
            {/* <div className="w-64 min-h-screen bg-purple-400">
                <ul className="menu p-4">
               
                   
                <li ><NavLink to='/dashboard' > <FaUtensilSpoon></FaUtensilSpoon>  Add items</NavLink></li>
                    <li ><NavLink to='/dashboard/manageItems' ><FaList></FaList> Manage Items</NavLink></li>
                   
                    
                    <li ><NavLink to='/dashboard/users' ><FaUsers></FaUsers>All Users</NavLink></li>
                    
                  
                      <div className="divider"></div>
                    <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
                    <li ><NavLink to='/meals' > <FaSearch></FaSearch> Menu</NavLink></li>
                    <li ><NavLink to='/contact' > <FaVoicemail></FaVoicemail> Contact</NavLink></li>
                
                  
                  
                  
                </ul>
            </div> */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            </div>
    );
};

export default Dashboard;