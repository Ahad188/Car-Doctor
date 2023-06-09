import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "../Private/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <Singup></Singup>,
      },
      {
        path: "checkout/:id",
        element: (
          <Private>
            <CheckOut></CheckOut>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-ahad188.vercel.app/services/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <Private>
            <Bookings></Bookings>
          </Private>
        ),
      },
    ],
  },
]);

export default router;
