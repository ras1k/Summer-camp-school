import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllInstructor from "../Pages/Instructor/AllInstructor";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'signup',
            element: <SignUp/>
        },
        {
            path: 'allInstructors',
            element: <AllInstructor/>
        },
      ]
    },
  ]);

  export default router;