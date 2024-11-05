

// import Pdetails from "./Pdetails";


const ProductDetails = (product) => {
const { product_image, productId } = product;

  return (
    <div className="flex flex-col items-center bg-purple-600 py-6">
      {/* Header Section */}
      <h2 className="my-4 text-4xl font-bold text-white">Product Details</h2>
      <p className="text-sm text-white text-center my-6 max-w-md">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <h3 className="text-lg font-semibold">{productId}</h3>
      <img
        src={product_image}
        alt={product.product_title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
    </div>
  );
};

export default ProductDetails;
