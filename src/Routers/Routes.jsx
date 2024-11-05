import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statisticss/Statistics";

import Cards from "../Cards.jsx/Cards";
import ProductDetails from "../Cards.jsx/Details/ProductDetails";

// import Cards from "../Cards.jsx/Cards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categores.json"),
        children: [
          {
            path: "/card",
            element: <Cards />,
            children: [
              // {
              //   path: "details",
              //   element: <ProductDetails />,
              // },
            ],
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
                element: <ProductDetails/>
               },
    ],
  },
]);
export default routes;
