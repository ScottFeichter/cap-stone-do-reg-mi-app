import './EmployeeDepartmentsListItem.css';
import { Link } from "react-router-dom";

function EmployeeDepartmentsListItem({ employeeDepartment }) {
  return (
    <>


      <div className="EmployeeDepartmentsListItemContainer">

        <div className="EmployeeDepartmentsListItemContainerID">
            <p className="EmployeeDepartmentsListItemP"> {employeeDepartment.id ? employeeDepartment.id : "-"}</p>
        </div>

        <div className="EmployeeDepartmentsListItemContainerName">
          <Link
            to={`/employeeDepartments/${employeeDepartment.id}`}
            state={{employeeDepartment: employeeDepartment}}
            className="EmployeeDepartmentsListItemP">
              {employeeDepartment.firstName + " " + employeeDepartment.lastName}
          </Link>
        </div>

        <div className="EmployeeDepartmentsListItemContainerImageURL">
          <p className="EmployeeDepartmentsListItemP">{employeeDepartment.imageURL ? employeeDepartment.imageURL: "-"}</p>
        </div>

      </div>
      <div className="EmployeeDepartmentsListItemBorder"></div>
    </>
  );
}

export default EmployeeDepartmentsListItem;
