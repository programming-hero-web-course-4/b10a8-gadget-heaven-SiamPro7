import { Link } from "react-router-dom";



const Card = ({ product }) => {
    const { productId, product_image, product_title, price } = product ;
  return (
    <div>
      <div
        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1"
        key={productId}
      >
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold">{product_title}</h3>
        <p className="text-gray-700 mt-2">Price: ${price}</p>
        <div className=" mt-4">
          <Link
            className="border-purple-800 border-2 px-4 rounded-full py-2 text-center hover:bg-purple-100 "
            to={`/details/${productId}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;