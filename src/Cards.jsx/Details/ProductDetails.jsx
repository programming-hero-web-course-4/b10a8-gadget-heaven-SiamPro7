import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  const detailscard = useLoaderData();
  console.log(detailscard);
  const id = parseInt(productId);
  const product = detailscard.find(
    (detailscard) => detailscard.productId === id
  );
  const {
    product_image,
    product_title,
    price,
    description,
    availability,
    specification,
  } = product;

  console.log(product);
  return (
    <>
      <div className="flex relative flex-col items-center bg-purple-600 pb-28">
        {/* Header Section */}
        <h2 className="my-4 text-4xl font-bold text-white">Product Details</h2>
        <p className="text-sm text-white text-center my-6 max-w-md">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="bg-white absolute top-2/3 text-gray-900 rounded-xl shadow-lg max-w-4xl w-full p-6 flex flex-col md:flex-row">
          {/* Image Placeholder */}
          <div className="bg-gray-200 rounded-lg w-full md:w-1/3 h-60 md:h-auto">
            {" "}
            <img src={product_image} alt="" />
          </div>

          {/* Product Details */}
          <div className="mt-6 md:mt-0 md:ml-6 flex flex-col justify-between w-full">
            <div>
              <h3 className="text-xl font-semibold">{product_title}</h3>
              <p className="text-lg font-semibold text-green-600">
                Price: {price}
              </p>
              <button className=" btn font-bold rounded-lg">
                {availability ? "In Stock" : "Out of Stock"}
              </button>
              <p className="text-sm text-gray-600">{description}</p>

              <div className="mt-4">
                <p className="font-semibold">Specification:{}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Intel i7 11th Gen</li>
                  <li>16GB RAM</li>
                  <li>512GB SSD</li>
                  <li>Touchscreen</li>
                </ul>
              </div>
            </div>

            {/* Rating and Add to Cart Button */}
            <div className=" items-center mt-4">
              <div className="flex items-center text-yellow-500">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span className="text-gray-500 ml-2">(4.8)</span>
              </div>
            </div>
            <div>
              <Link
                to="/dashboard"
                className="btn w-48 text-white bg-purple-600 hover:bg-purple-700 "
              >
                Add to cart
                <FaShoppingCart />
              </Link>
              <Link
                to="/dashboard"
                className="btn w-18 mx-3 border-purple-600  hover:bg-purple-700 "
              >
                <FaHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-250px)]"></div>
    </>
  );
};

export default ProductDetails;
