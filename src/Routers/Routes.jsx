import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statisticss/Statistics";

import Cards from "../Cards.jsx/Cards";
import ProductDetails from "../Cards.jsx/Details/ProductDetails";
import Speratedcatagory from "../Cards.jsx/Speratedcatagory";
import Detailscard from "../Cards.jsx/Details/Detailscard";

// import Cards from "../Cards.jsx/Cards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./categores.json"),
        children: [
          {
            path: "/category/:category",
            element:<Speratedcatagory/>
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
        path: "/details",
        element: <ProductDetails />,
        loader:() => fetch('./products.json'),
        children:[
          {
            path:"/detailscard",
            element:<Detailscard/>
          }
        ]
      },
    ],
  },
]);
export default routes;
