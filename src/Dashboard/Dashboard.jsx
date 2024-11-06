import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";


const Dashboard = () => {
    return (
        
           
    <div className="min-h-screen bg-gray-100 ">
      <header className="bg-purple-500 text-white text-center p-4 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">Explore the latest gadgets that will take your experience to the next level.</p>
        <div className="mt-4">
          <NavLink to='' className="bg-white text-purple-500 font-bold px-4 py-2 rounded-lg mx-2">Cart</NavLink>
          <NavLink to='' className="bg-gray-200 text-purple-500 font-bold px-4 py-2 rounded-lg mx-2">Wishlist</NavLink>
        </div>
      </header>
      
<Cart/>
     <Wishlist/>

        </div>
    );
};

export default Dashboard;