import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../components/Header";
import AllToys from "../Pages/Alltoys";
import Blogs from "../Pages/Blogs";
import AddToy from "../Pages/AddToy";
import MyToys from "../Pages/MyToys";
import LogIn from "../Share/LogIn";
import SignUp from "../Share/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
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
