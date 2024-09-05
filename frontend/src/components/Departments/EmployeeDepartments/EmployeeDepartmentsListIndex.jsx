import './EmployeeDepartmentsListIndex.css';
import { Link } from "react-router-dom";

function EmployeeDepartmentsListIndex({ employeeDepartment }) {
  return (
    <>

      <div className="EmployeeDepartmentsListIndexContainer">

        <div className="EmployeeDepartmentsListIndexItemContainerID">
            <p className="EmployeeDepartmentsListIndexItemP"> {employeeDepartment.id ? employeeDepartment.id : "-"}</p>
        </div>

        {/* <div className="EmployeeDepartmentsListIndexItemContainerED">
            <p className="EmployeeDepartmentsListIndexItemP"> {employeeDepartment.employeeDepartmentDepartment_Id ? employeeDepartment.employeeDepartmentDepartment_Id : "-"}</p>
        </div> */}

        {/* <div className="EmployeeDepartmentsListIndexItemContainerAD">
            <p className="EmployeeDepartmentsListIndexItemP">{employeeDepartment.academicDepartment_Id ? employeeDepartment.academicDepartment_Id : "-"}</p>
        </div> */}

        <div className="EmployeeDepartmentsListIndexItemContainerName">
          <Link
            to={`/employeeDepartments/${employeeDepartment.id}`}
            state={{employeeDepartment: employeeDepartment}}
            className="EmployeeDepartmentsListIndexItemP">
              {employeeDepartment.name}
          </Link>
        </div>

        <div className="EmployeeDepartmentsListIndexItemContainerImageURL">
          <p className="EmployeeDepartmentsListIndexItemP">{employeeDepartment.imageURL ? employeeDepartment.imageURL: "-"}</p>
        </div>
      </div>
    </>
  );
}

export default EmployeeDepartmentsListIndex;
