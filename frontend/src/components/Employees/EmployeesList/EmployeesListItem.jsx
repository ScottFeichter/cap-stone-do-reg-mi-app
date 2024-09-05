import './EmployeesListItem.css';
import { Link } from "react-router-dom";

function EmployeesListItem({ employee }) {
  return (
    <>


      <div className="EmployeesListItemContainer">

        <div className="EmployeesListItemContainerID">
            <p className="EmployeesListItemP"> {employee.id ? employee.id : "-"}</p>
        </div>

        <div className="EmployeesListItemContainerName">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeesListItemP">
              {employee.firstName + " " + employee.lastName}
          </Link>
        </div>

        <div className="EmployeesListItemContainerStreet">
          <p className="EmployeesListItemP">{employee.street ? employee.street: "-"}</p>
        </div>

        <div className="EmployeesListItemContainerCity">
          <p className="EmployeesListItemP">{employee.city ? employee.city: "-"}</p>
        </div>

        <div className="EmployeesListItemContainerState">
          <p className="EmployeesListItemP">{employee.state ? employee.state: "-"}</p>
        </div>

        <div className="EmployeesListItemContainerZip">
          <p className="EmployeesListItemP">{employee.zip ? employee.zip: "-"}</p>
        </div>

        <div className="EmployeesListItemContainerPhone">
              {employee.phone ?
              <Link to={`tel:${employee.phone}`} className="EmployeesListItemP">{employee.phone}</Link>
              : <p className="EmployeesListItemP">-</p>}
        </div>

        <div className="EmployeesListItemContainerEmail">

              {employee.email ?
              <Link to={`mailto:${employee.email}`}className="EmployeesListItemP">{employee.email}</Link>
                : <p className="EmployeesListItemP">-</p>}

        </div>


      </div>
      <div className="EmployeeListItemBorder"></div>
    </>
  );
}

export default EmployeesListItem;
