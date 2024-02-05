import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToys from "../Pages/AllToys";
import Blogs from "../Pages/Blogs";
import MyToys from "../Pages/MyToys";
import LogIn from "../Share/LogIn";
import SignUp from "../Share/SignUp";
import Home from "../Pages/Home";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToyCard from "../Pages/AllToyCard";

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
        // loader: () => fetch(""),
      },
      {
        path: "/allToy/:id",
        element: <AllToyCard></AllToyCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/allToy/${params.id}`),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
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
