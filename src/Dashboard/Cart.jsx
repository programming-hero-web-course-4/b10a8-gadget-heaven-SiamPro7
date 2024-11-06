import { useEffect, useState } from "react";
import { getAllFavourites } from "../Utility";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  // State to control the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const carts = getAllFavourites();
    setProduct(carts);
  }, []);
  return (
    <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Cart</h2>
        <div>
          <button className="font-bold text-xl">Total cost:</button>

          <button className="bg-gray-200 px-4 py-2 mx-3 rounded-md text-sm font-medium hover:bg-gray-300">
            Sort by Price
          </button>
          <button
            onClick={openModal}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4"></div>

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
          >
            <FaTrash />
          </button>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 text-center rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-xl font-semibold mb-4">Payment Successfully</h2>
            <p className="text-gray-700">
              thanks for Purchase <br />
              tatal:
            </p>
            <button
              onClick={closeModal}
              className=" mt-2 btn text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              {" "}
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
