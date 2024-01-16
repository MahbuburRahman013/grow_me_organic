import {
    createBrowserRouter,
  } from "react-router-dom";
import ListPage from "../list/ListPage";
import LoginPage from "../login/LoginPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/listPage",
      element: <ListPage/>,
    },
  ]);

  export default router