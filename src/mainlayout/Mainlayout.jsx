
import Navber from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from "react-hot-toast";



const Mainlayout = () => {
    return (
      <div>
        <Toaster />
        <Navber />
        <Outlet />

        <Footer />
      </div>
    );
};

export default Mainlayout;