import { useLoaderData } from "react-router-dom";
import Cards from "../Cards.jsx/Cards";
import Header from "../Header/Header";
// import ButtonCategory from "../Cards.jsx/ButtonCategory";


const Home = () => {
  const categores = useLoaderData()
  console.log(categores);
    return (
      <div>
        <Header />
        <div className="min-h-[calc(100vh-288px)]"></div>
        <Cards categores={categores} />

        {/* categores section */}
        {/* {<ButtonCategory categores={categores} />} */}
      </div>
    );
};

export default Home;