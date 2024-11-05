import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import ProductDetails from "./Details/ProductDetails";


const Cards = ({ categores }) => {
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
        <div className="col-span-1  p-4  ">
          {/* Left Button Section */}

          <div className="bg-gray-200 px-5 py-2 rounded-lg shadow-md">
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-purple-800 transition">
              All Product
            </button>
            {categores?.map((category, index) => (
              <button
                className="flex-row w-full bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-purple-800 transition"
                key={category.productId || index}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(
              (product) => (
                (<ProductDetails key={product.productId} product={product} />),
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