import { createBrowserRouter } from "react-router";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Root from "../../components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
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
