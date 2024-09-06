//==================PROGRAM IMPORTS=====================//

import { createBrowserRouter } from "react-router-dom";


//================COMPONENT IMPORTS=====================//



  // -----------LAYOUT----------------
import Layout from "./Layout";


  // -----------SIGNUP----------------
import SignupFormModal from "../components/Session/SignupForm/SignupFormModal/SignupFormModal.jsx";


  // -----------HOME------------------
import Home from "../components/Home/Home.jsx";


  // -----------PROFILE---------------
import ProfilePage from "../components/Profile/ProfilePage.jsx";


  // -----------RESOURCES-------------
import Resources from "../components/Resources/Resources.jsx";


  // -----------TEACHERS--------------
  import Teachers from "../components/Teachers/Teachers.jsx";


  // -----------STUDENTS--------------
import Students from "../components/Students/Students.jsx";



  // -----------EMPLOYEES-------------
import Employees from "../components/Employees/Employees.jsx";
import CreateNewEmployeeForm from "../components/Employees/CreateNewEmployeeForm/CreateNewEmployeeForm.jsx";
import EditEmployeeForm from "../components/Employees/EditEmployeeForm/EditEmployeeForm.jsx";
import EmployeeDetailPage from "../components/Employees/EmployeeDetailsPage/EmployeeDetailsPage.jsx";
// import EmployeeDetails from "../components/Employees/EmployeeDetailsPage/EmployeeDetails.jsx";


  // -----------DEPARTMENTS-----------
import Departments from "../components/Departments/Departments.jsx";

import EmployeeDepartmentDetailsPage from "../components/Departments/EmployeeDepartments/EmployeeDepartmentDetailsPage/EmployeeDepartmentDetailsPage.jsx";
import CreateNewEmployeeDepartmentForm from "../components/Departments/EmployeeDepartments/CreateNewEmployeeDepartmentForm/CreateNewEmployeeDepartmentForm.jsx";
import EditEmployeeDepartmentForm from "../components/Departments/EmployeeDepartments/EditEmployeeDepartmentForm/EditEmployeeDepartmentForm.jsx";


 // -----------CATCH ALL--------------
import CatchAll from "../components/xCatchAll/CatchAll.jsx";



//===============FUNCTION DECLARATION===================//
export const router = createBrowserRouter([
  {  path: "/signupform",
    element: <SignupFormModal />
  },
  {
    element: <Layout />,
    children: [
      // -------------HOME-------------
        {
          path: "/",
          element: <Home />,
        },


      // -------------PROFILE------------
        {
          path: "/profile",
          element: <ProfilePage />,
        },


      // -----------RESOURCES-------------
        {
          path: "/resources",
          element: <Resources />,
        },


      // -----------DEPARTMENTS------------
        {
          path: "/departments",
          element: <Departments />
        },


      // -------EMPLOYEE DEPARTMENTS-------

        {
          path: "/employeeDepartments/:employeeDepartmentId",
          element: <EmployeeDepartmentDetailsPage />
        },
        {
          path: "/createNewEmployeeDepartmentForm/",
          element: <CreateNewEmployeeDepartmentForm />,
        },
        {
          path: "/editEmployeeDepartmentForm/",
          element: <EditEmployeeDepartmentForm />,
        },



      // -------------TEACHERS-------------
        {
          path: "/teachers",
          element: <Teachers />
        },



      // -------------STUDENTS-------------
        {
          path: "/students",
          element: <Students />
        },



      // -------------EMPLOYEES-------------

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


      // -------------CATCH ALL---------------

      {
        path: "*",
        element: <CatchAll />
      },
    ],
  },
]);
