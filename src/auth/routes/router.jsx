import { createBrowserRouter, Navigate } from "react-router";
import About from "../../components/About/About";
import Home from "../../components/Home/Home";
import MainConatain from "../../components/Home/HomeLayOut/MainConatain/MainConatain";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Root from "../../components/Root/Root";
import CategoryNews from "../../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>Page not found!!</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <MainConatain></MainConatain>,
            children: [
              {
                index: true,
                element: <Navigate to="/category/1" replace />,
              },
              {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                  fetch(
                    `https://openapi.programming-hero.com/api/news/category/${params.id}`,
                  ),
              },
            ],
          },
        ],
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
