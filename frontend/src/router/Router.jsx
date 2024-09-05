import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home/Home.jsx";
import ProfilePage from "../components/Profile/ProfilePage.jsx";

import Resources from "../components/Resources/Resources.jsx";

import Students from "../components/Students/Students.jsx";

import Teachers from "../components/Teachers/Teachers.jsx";


import Employees from "../components/Employees/Employees.jsx";
import CreateNewEmployeeForm from "../components/Employees/createNewEmployeeForm/createNewEmployeeForm.jsx";
import EditEmployeeForm from "../components/Employees/EditEmployeeForm/EditEmployeeForm.jsx";
import EmployeeDetailPage from "../components/Employees/EmployeeDetailsPage/EmployeeDetailsPage.jsx";
// import EmployeeDetails from "../components/Employees/EmployeeDetailsPage/EmployeeDetails.jsx";



// import SignupFormDetailsPage from "../components/Session/SignupForm/SignupFormDetailsPage/SignupFormDetailsPage.jsx";
import SignupFormModal from "../components/Session/SignupForm/SignupFormModal/SignupFormModal.jsx";


import Departments from "../components/Departments/Departments.jsx";

import EmployeeDepartmentDetailsPage from "../components/Departments/EmployeeDepartments/EmployeeDepartmentDetailsPage/EmployeeDepartmentDetailsPage.jsx";
import CreateNewEmployeeDepartmentsForm from "../components/Departments/EmployeeDepartments/CreateNewEmployeeDepartmentForm/CreateNewEmployeeDepartmentForm.jsx";
import EditEmployeeDepartmentForm from "../components/Departments/EmployeeDepartments/EditEmployeeDepartmentForm/EditEmployeeDepartmentForm.jsx";


export const router = createBrowserRouter([
  {  path: "/signupform",
    element: <SignupFormModal />
  },
  {

    element: <Layout />,
    children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/resources",
          element: <Resources />,
        },
        {
          path: "/departments",
          element: <Departments />
        },
        {
          path: "/employeeDepartments/:employeeDepartmentId",
          element: <EmployeeDepartmentDetailsPage />
        },
        {
          path: "/createNewEmployeeDepartmentForm/",
          element: <CreateNewEmployeeDepartmentsForm />,
        },
        {
          path: "/editEmployeeDepartmentForm/",
          element: <EditEmployeeDepartmentForm />,
        },
        {
          path: "/students",
          element: <Students />
        },
        {
          path: "/teachers",
          element: <Teachers />
        },



        {
          path: "/employees",
          element: <Employees />
        },
        {
          path: "/employees/:employeeId",
          element: <EmployeeDetailPage />
        },
        {
          path: "/createNewEmployeeForm/",
          element: <CreateNewEmployeeForm />,
        },
        {
          path: "/editEmployeeForm/",
          element: <EditEmployeeForm />,
        },





    // =============FROM RAVENWOOD=============


    //   {
    //     path: "/",
    //     loader: userPortfolios,
    //     element: <HomePage />,
    //   },
    //   {
    //     path: "profile/portfolios",
    //     loader: userPortfolios,
    //     element: <UserProfilePage />,
    //     action: modifyPortfolio,
    //     children: [
    //       {
    //         path: "edit",
    //         element: <UpdateProfileModal />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "portfolios/new",
    //     loader: userPortfolios,
    //     element: <CreatePortfolio />,
    //     action: createPortfolioAction,
    //   },
    //   {
    //     path: "portfolios/:userId",
    //     loader: userPortfolios,
    //     element: <PortfolioDetails />,
    //     action: modifyPortfolio,
    //   },
    //   {
    //     path: "portfolios/:userId/edit",
    //     loader: userPortfolios,
    //     element: <UpdatePortfolio />,
    //     action: updatePortfolioAction,
    //   },
    //   {
    //     path: "portfolios/:userId/edit/cash",
    //     loader: userPortfolios,
    //     element: <UpdatePortfolio />,
    //     action: updatePortfolioAction,
    //   },
    //   {
    //     path: "watchlist/:watchlist_num",
    //     loader: watchlistLoader,
    //     element: <Watchlist />,
    //     action: deleteWatchlist,
    //   },
    //   {
    //     path: "watchlist",
    //     element: <WatchlistAll />,
    //     loader: watchlistLoader,
    //     action: deleteWatchlist,
    //   },


      // =============CATCH ALL=============

      {
        path: "*",
        element: (
          <div>
            <h1>404 Page not found</h1>
            <p>
              Not all those who wander are lost, but it seems you may have taken
              a wrong turn.
            </p>
          </div>
        ),
      },

    ],
  },
]);
