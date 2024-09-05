import './EmployeesListIndex.css';
import { Link } from "react-router-dom";

function EmployeesListIndex({ employee }) {
  return (
    <>


      <div className="EmployeeListIndexContainer">

        <div className="EmployeeListIndexItemContainerID">
            <p className="EmployeeListIndexItemP"> {employee.id ? employee.id : "-"}</p>
        </div>

        {/* <div className="EmployeeListIndexItemContainerED">
            <p className="EmployeeListIndexItemP"> {employee.employeeDepartment_Id ? employee.employeeDepartment_Id : "-"}</p>
        </div> */}

        {/* <div className="EmployeeListIndexItemContainerAD">
            <p className="EmployeeListIndexItemP">{employee.academicDepartment_Id ? employee.academicDepartment_Id : "-"}</p>
        </div> */}

        <div className="EmployeeListIndexItemContainerName">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.firstName1 + " " + employee.lastName1}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerStreet">
          <p className="EmployeeListIndexItemP">{employee.street ? employee.street: "-"}</p>
        </div>

        <div className="EmployeeListIndexItemContainerCity">
          <p className="EmployeeListIndexItemP">{employee.city ? employee.city: "-"}</p>
        </div>

        <div className="EmployeeListIndexItemContainerState">
          <p className="EmployeeListIndexItemP">{employee.state ? employee.state: "-"}</p>
        </div>

        <div className="EmployeeListIndexItemContainerZip">
          <p className="EmployeeListIndexItemP">{employee.zip ? employee.zip: "-"}</p>
        </div>





        <div className="EmployeeListIndexItemContainerPhone">
              {employee.personalPhone ?
              <Link to={`tel:${employee.personalPhone}`} className="EmployeeListIndexItemP">{employee.personalPhone}</Link>
              : <p className="EmployeeListIndexItemP">-</p>}
        </div>

        <div className="EmployeeListIndexItemContainerEmail">

              {employee.personalEmail ?
              <Link to={`mailto:${employee.personalEmail}`}className="EmployeeListIndexItemP">{employee.personalEmail}</Link>
                : <p className="EmployeeListIndexItemP">-</p>}

        </div>
{/* 
        <div className="EmployeeListIndexItemContainerLang">
          <p className="EmployeeListIndexItemP">{employee.firstLang ? employee.firstLang: "-"}</p>
        </div> */}

        {/* <div className="EmployeeListIndexItemContainerLang">
          <Link
          to={`/employees/${employee.id}`}
          state={{employee: employee}}
          className="EmployeeListIndexItemP">
            {employee.secondLang
              ? employee.secondLang
              : "-"}
          </Link>
        </div> */}

        {/* <div className="EmployeeListIndexItemContainerInst">
          <p className="EmployeeListIndexItemP">{employee.firstInst ? employee.firstInst : "-"}</p>
        </div> */}

        {/* <div className="EmployeeListIndexItemContainerInst">
          <Link
          to={`/employees/${employee.id}`}
          state={{employee: employee}}
          className="EmployeeListIndexItemP">
            {employee.secondInst
              ? employee.secondInst
              : "-"}
          </Link>
        </div> */}

      </div>
      <div className="EmployeeListIndexBorder"></div>
    </>
  );
}

export default EmployeesListIndex;
