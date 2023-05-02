import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
