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

import CatchAll from "../components/wCatchAll/CatchAll.jsx";


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


      // =============CATCH ALL=============

      {
        path: "*",
        element: <CatchAll />
      },
    ],
  },
]);
