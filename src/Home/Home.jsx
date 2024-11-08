import { Outlet, useLoaderData } from "react-router-dom";
import Cards from "../Cards.jsx/Cards";
import Header from "../Header/Header";
import ButtonCategory from "../Cards.jsx/ButtonCategory";
// import ButtonCategory from "../Cards.jsx/ButtonCategory";


const Home = () => {
  const categores = useLoaderData()
  console.log(categores);
    return (
      <div>
        <Header />
        <div className="min-h-[calc(100vh-288px)]"></div>
        <div className="flex">
          <div>
            {/* categores section */}
            <ButtonCategory categores={categores} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Explore Cutting-Edge Gadgets
            </h2>
            <Outlet />
          </div>
        </div>

        {/* {<ButtonCategory categores={categores} />} */}
      </div>
    );
};

export default Home;