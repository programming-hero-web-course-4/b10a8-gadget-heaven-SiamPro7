import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <nav className="bg-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to='/'>Gadget Heaven</Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <ul className="flex space-x-6 text-white  ">
            <NavLink to="/"  className={({isActive} ) =>
          isActive ? "bg-black p-2 rounded-lg" : "p-2"}>Home</NavLink>
            <NavLink to="/statistics"  className={({isActive} ) =>
          isActive ? "bg-black p-2 rounded-lg" : "p-2"}>Statistics</NavLink>
            <NavLink to="/dashboard"  className={({isActive} ) =>
          isActive ? "bg-black p-2 rounded-lg" : "p-2"}>Dashboard</NavLink>
            <NavLink to="/about"  className={({isActive} ) =>
          isActive ? "bg-black p-2 rounded-lg" : "p-2"}>About us</NavLink>
            
          </ul>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <FaShoppingCart className="text-white hover:text-purple-600 cursor-pointer" />
          <FaHeart className="text-white hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
