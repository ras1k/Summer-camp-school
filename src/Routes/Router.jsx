import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllInstructor from "../Pages/Instructor/AllInstructor";
import AllClasses from "../Pages/Classes/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'myClasses',
        element: <MySelectedClasses />
      },
      {
        path: 'myEnrolledClasses',
        element: <MyEnrolledClasses />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'instructor',
        element: <AllInstructor />
      },
      {
        path: 'addClass',
        element: <AddAClass />
      },
      {
        path: 'myClass',
        element: <MyClass />
      },
      {
        path: 'manageUsers',
        element: <ManageUsers />
      },
    ]
  }
]);

export default router;