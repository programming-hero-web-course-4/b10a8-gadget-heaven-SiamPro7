import { NavLink } from "react-router-dom";




const ButtonCategory = ({ categores }) => {
  return (
    <div>
      <div className=" ">
        {/* Left Button Section */}

        <div className=" bg-gray-200 px-6  py-6 rounded-lg shadow-md">
          <div className="mb-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-600 btn mb-4 px-6 py-2"
                  : "text-center  text-blck btn px-6 py-2  rounded-lg mb-4 hover:bg-purple-800"
              }
            >
              All Product
            </NavLink>
          </div>
          <div className="tabs tabs-lifted">
            {categores.map((category) => (
              <NavLink
                to={`/category/${category.category}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-600 text-center btn px-6 py-2 mb-4 "
                    : "text-center  text-blck btn px-6 py-2  rounded-lg mb-4 hover:bg-purple-300"
                }
                key={category.category}
              >
                {/* "  text-center bg-purple-600 text-white px-6 py-2  rounded-lg mb-4 hover:bg-purple-800 " */}
                {category.category}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCategory;