
import Navber from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';




const Mainlayout = () => {
    return (
      <div>
        <Navber />
        <Outlet/>
        
        
       
        
        
        <Footer />
      </div>
    );
};

export default Mainlayout;