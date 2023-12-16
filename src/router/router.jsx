import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Header";
import AllToys from "../Pages/Alltoys";
import Blogs from "../Pages/Blogs";

import MyToys from "../Pages/MyToys";
import LogIn from "../Share/LogIn";
import SignUp from "../Share/SignUp";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery/Gallery";
import AddToy from "../Pages/AddToy/AddToy";

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
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToy"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
