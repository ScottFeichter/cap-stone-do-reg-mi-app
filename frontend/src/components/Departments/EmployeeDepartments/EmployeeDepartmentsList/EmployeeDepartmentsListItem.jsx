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

        <div className="EmployeeDepartmentsListItemContainerStreet">
          <p className="EmployeeDepartmentsListItemP">{employeeDepartment.street ? employeeDepartment.street: "-"}</p>
        </div>

        <div className="EmployeeDepartmentsListItemContainerCity">
          <p className="EmployeeDepartmentsListItemP">{employeeDepartment.city ? employeeDepartment.city: "-"}</p>
        </div>

        <div className="EmployeeDepartmentsListItemContainerState">
          <p className="EmployeeDepartmentsListItemP">{employeeDepartment.state ? employeeDepartment.state: "-"}</p>
        </div>

        <div className="EmployeeDepartmentsListItemContainerZip">
          <p className="EmployeeDepartmentsListItemP">{employeeDepartment.zip ? employeeDepartment.zip: "-"}</p>
        </div>

        <div className="EmployeeDepartmentsListItemContainerPhone">
              {employeeDepartment.phone ?
              <Link to={`tel:${employeeDepartment.phone}`} className="EmployeeDepartmentsListItemP">{employeeDepartment.phone}</Link>
              : <p className="EmployeeDepartmentsListItemP">-</p>}
        </div>

        <div className="EmployeeDepartmentsListItemContainerEmail">

              {employeeDepartment.email ?
              <Link to={`mailto:${employeeDepartment.email}`}className="EmployeeDepartmentsListItemP">{employeeDepartment.email}</Link>
                : <p className="EmployeeDepartmentsListItemP">-</p>}

        </div>


      </div>
      <div className="EmployeeDepartmentsListItemBorder"></div>
    </>
  );
}

export default EmployeeDepartmentsListItem;
