import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";

const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children:[
          {
               path:'/',
               element:<Home></Home>,
          },{
               path:'/login',
               element:<Login></Login>
          },
          {
               path:'singup',
               element:<Singup></Singup>
          }
       ]
     },
   ]);

   export default router;