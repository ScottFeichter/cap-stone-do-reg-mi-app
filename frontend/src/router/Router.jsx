//==================PROGRAM IMPORTS=====================//

import { createBrowserRouter } from "react-router-dom";


//================COMPONENT IMPORTS=====================//



  // -----------LAYOUT----------------
import Layout from "./Layout";


  // -----------SIGNUP----------------
import SignupForm from "../components/Session/SignupForm/SignupForm.jsx";


  // -----------HOME------------------
import Home from "../components/Home/Home.jsx";


  // -----------PROFILE---------------
import ProfilePage from "../components/Profile/ProfilePage.jsx";


  // -----------RESOURCES-------------
import Resources from "../components/Resources/Resources.jsx";

 // ------------BRANCHES--------------

 import BranchDetailsPage from "../components/Resources/Branches/BranchDetailsPage/BranchDetailsPage.jsx";
 import CreateNewBranchForm from "../components/Resources/Branches/CreateNewBranchForm/CreateNewBranchForm.jsx";
 import EditBranchForm from "../components/Resources/Branches/EditBranchForm/EditBranchForm.jsx";

 // ------------FACILITIES------------

 import FacilityDetailsPage from "../components/Resources/Facilities/FacilityDetailsPage/FacilityDetailsPage.jsx";
 import CreateNewFacilityForm from "../components/Resources/Facilities/CreateNewFacilityForm/CreateNewFacilityForm.jsx";
 import EditFacilityForm from "../components/Resources/Facilities/EditFacilityForm/EditFacilityForm.jsx";



  // -----------TEACHERS--------------
  import Teachers from "../components/Teachers/Teachers.jsx";
  // import CreateNewTeacherForm from "../components/Teachers/CreateNewTeacherForm/CreateNewTeacherForm.jsx";
  // import EditTeacherForm from "../components/Teachers/EditTeacherForm/EditTeacherForm.jsx";
  // import TeacherDetailPage from "../components/Teachers/TeacherDetailsPage/TeacherDetailsPage.jsx";
  // import TeacherDetails from "../components/Teachers/TeacherDetailsPage/TeacherDetails.jsx";


  // -----------STUDENTS--------------
  import Students from "../components/Students/Students.jsx";
  import CreateNewStudentForm from "../components/Students/CreateNewStudentForm/CreateNewStudentForm.jsx";
  import EditStudentForm from "../components/Students/EditStudentForm/EditStudentForm.jsx";
  import StudentDetailPage from "../components/Students/StudentDetailsPage/StudentDetailsPage.jsx";
  // import StudentDetails from "../components/Students/StudentDetailsPage/StudentDetails.jsx";



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


   // -------SSLIST-------
   import SSList from "../components/__SSList/SSList.jsx";


  // -----------CATCH ALL--------------
  import CatchAll from "../components/xCatchAll/CatchAll.jsx";



//===============FUNCTION DECLARATION===================//
export const router = createBrowserRouter([
  {  path: "/signupform",
    element: <SignupForm />
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
        path: "/facilities/:facilityId",
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
          path: "/createNewEmployeeDepartmentForm/",
          element: <CreateNewEmployeeDepartmentForm />,
        },
        {
          path: "/editEmployeeDepartmentForm/",
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

        {
          path: "/students/:studentId",
          element: <StudentDetailPage />
        },
        {
          path: "/createNewStudentForm/",
          element: <CreateNewStudentForm />,
        },
        {
          path: "/editStudentForm/",
          element: <EditStudentForm />,
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


      // -------------EMPLOYEES-------------
      {
        path: "/sslist",
        element: <SSList />
      },


      // -------------CATCH ALL---------------

      {
        path: "*",
        element: <CatchAll />
      },
    ],
  },
]);
