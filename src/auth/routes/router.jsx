import { createBrowserRouter } from "react-router";
import Login from "../../components/Login/Login";
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
    ],
  },
]);

export default router;
