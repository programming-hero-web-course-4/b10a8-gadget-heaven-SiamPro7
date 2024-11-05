import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";




const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        

        {/* Right Cards Section */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(
              (product) => (
                
                (
                  <div
                    className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1"
                    key={product.productId}
                  >
                    <img
                      src={product.product_image}
                      alt={product.product_title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold">
                      {product.product_title}
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Price: ${product.price}
                    </p>
                    <div className="text-center bg-purple-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-purple-800 transition">
                      <Link to="/details">View Details</Link>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  categores: PropTypes.any, 
};
export default Cards;
