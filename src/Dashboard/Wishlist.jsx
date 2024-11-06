import { useEffect, useState } from "react";
import { getAllWishlist } from "../Utility/index2";


const Wishlist = () => {

const [product, setProduct] = useState([]);
useEffect(() => {
  const carts = getAllWishlist();
  setProduct(carts);
}, []);

    return (
      <div>
        <h2 className="text-xl font-semibold">Wishlist</h2>

        {/* map */}
        {product.map((item) => (
          <div
            key={item.id}
            className="flex  p-4 mb-4 shadow-lg bg-gray-300 rounded-lg"
          >
            <div className="w-60 h-48 rounded-lg">
              <img className="rounded-lg" src={item.product_image} alt="" />
            </div>
            <div className="ml-4 flex-1">
              <h1 className="text-xl mt-5 font-bold">{item.product_title}</h1>
              <p className="text-black mt-7">{item.description}</p>
              <p className="text-black mt-7 text-xl font-semibold">
                Price: ${item.price}
              </p>
            </div>
            <button
              //   onClick={() => handleRemove(item.id)}
              className="text-red-500 hover:text-red-700 text-xl"
            ></button>
          </div>
        ))}
      </div>
    );
};

export default Wishlist;