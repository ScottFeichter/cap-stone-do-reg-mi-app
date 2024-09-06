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

 // ------------BRANCHES--------------

 import BranchDetailsPage from "../components/Departments/Branches/BranchDetailsPage/BranchDetailsPage.jsx";
 import CreateNewBranchForm from "../components/Departments/Branches/CreateNewBranchForm/CreateNewBranchForm.jsx";
 import EditBranchForm from "../components/Departments/Branches/EditBranchForm/EditBranchForm.jsx";

 // ------------FACILITIES------------

 import FacilityDetailsPage from "../components/Departments/Facilities/FacilityDetailsPage/FacilityDetailsPage.jsx";
 import CreateNewFacilityForm from "../components/Departments/Facilities/CreateNewFacilityForm/CreateNewFacilityForm.jsx";
 import EditFacilityForm from "../components/Departments/Facilities/EditFacilityForm/EditFacilityForm.jsx";



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

 // -------EMPLOYEE DEPARTMENTS-------

import EmployeeDepartmentDetailsPage from "../components/Departments/EmployeeDepartments/EmployeeDepartmentDetailsPage/EmployeeDepartmentDetailsPage.jsx";
import CreateNewEmployeeDepartmentForm from "../components/Departments/EmployeeDepartments/CreateNewEmployeeDepartmentForm/CreateNewEmployeeDepartmentForm.jsx";
import EditEmployeeDepartmentForm from "../components/Departments/EmployeeDepartments/EditEmployeeDepartmentForm/EditEmployeeDepartmentForm.jsx";

// -------ACADEMIC DEPARTMENTS-------

import AcademicDepartmentDetailsPage from "../components/Departments/AcademicDepartments/AcademicDepartmentDetailsPage/AcademicDepartmentDetailsPage.jsx";
import CreateNewAcademicDepartmentForm from "../components/Departments/AcademicDepartments/CreateNewAcademicDepartmentForm/CreateNewAcademicDepartmentForm.jsx";
import EditAcademicDepartmentForm from "../components/Departments/AcademicDepartments/EditAcademicDepartmentForm/EditAcademicDepartmentForm.jsx";


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


        // -------BRANCHES-------

        {
          path: "/branches/:branchId",
          element: <BranchDetailsPage />
        },
        {
          path: "/createNewBranchForm/",
          element: <CreateNewBranchForm />,
        },
        {
          path: "/editBranchForm/",
          element: <EditBranchForm />,
        },

      // -------FACILITIES-------

      {
        path: "/facilities/:facilitytId",
        element: <FacilityDetailsPage />
      },
      {
        path: "/createNewFacilityForm/",
        element: <CreateNewFacilityForm />,
      },
      {
        path: "/editFacilityForm/",
        element: <EditFacilityForm />,
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
          path: "/createNewFacilityForm/",
          element: <CreateNewEmployeeDepartmentForm />,
        },
        {
          path: "/editFacilityForm/",
          element: <EditEmployeeDepartmentForm />,
        },

      // -------ACADEMIC DEPARTMENTS-------

      {
        path: "/academicDepartments/:academicDepartmentId",
        element: <AcademicDepartmentDetailsPage />
      },
      {
        path: "/createNewAcademicDepartmentForm/",
        element: <CreateNewAcademicDepartmentForm />,
      },
      {
        path: "/editAcademicDepartmentForm/",
        element: <EditAcademicDepartmentForm />,
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
