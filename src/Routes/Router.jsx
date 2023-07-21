import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllInstructor from "../Pages/Instructor/AllInstructor";
import AllClasses from "../Pages/Classes/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard";
// import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'allInstructors',
        element: <AllInstructor />
      },
      {
        path: 'allClasses',
        element: <AllClasses />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {

      }
    ]
  }
]);

export default router;