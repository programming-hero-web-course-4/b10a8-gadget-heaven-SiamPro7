import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statisticss/Statistics";

import Cards from "../Cards.jsx/Cards";
import ProductDetails from "../Cards.jsx/Details/ProductDetails";
import Speratedcatagory from "../Cards.jsx/Speratedcatagory";
import AboutUs from "../About/About";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categores.json"),
        children: [
          {
            path: "/",
            element: <Speratedcatagory />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Speratedcatagory />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/card",
            element: <Cards />,
            children: [],
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,

      },
      {
        path: "/about",
        element: <AboutUs/>

      },
      {
        path: "/details/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/products.json"),
        children: [
         
        ],
      },
    ],
  },
]);
export default routes;
