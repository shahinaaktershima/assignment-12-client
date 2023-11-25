import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;