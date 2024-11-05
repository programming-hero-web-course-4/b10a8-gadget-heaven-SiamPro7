import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <nav className="bg-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Gadget Heaven</h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <ul className="flex space-x-6 text-white  ">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/dashboard">Dashboard</Link>
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
