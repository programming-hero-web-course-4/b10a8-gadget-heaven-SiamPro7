import { Link } from "react-router-dom";




const ButtonCategory = ({ categores }) => {
  return (
    <div>
      <div className=" ">
        {/* Left Button Section */}

        <div className=" bg-gray-200 px-6  py-6 rounded-lg shadow-md">
          <div className="mb-8">
            <Link
              to="/card"
              className=" text-center  bg-purple-600 text-white px-6 py-2 rounded-lg  hover:bg-purple-800 "
            >
              All Product
            </Link>
          </div>
          <div className="tabs tabs-lifted">
            {categores.map((category) => (
              <Link
                to={`/category ${category.category}`}
                className="  text-center bg-purple-600 text-white px-6 py-2  rounded-lg mb-4 hover:bg-purple-800 "
                key={category.category}
              >
                {category.category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCategory;