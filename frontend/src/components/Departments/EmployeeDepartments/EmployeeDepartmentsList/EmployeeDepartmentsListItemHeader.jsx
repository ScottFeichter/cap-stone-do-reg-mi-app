import './EmployeeDepartmentsListItemHeader.css';
// import { Link } from "react-router-dom";

function EmployeeDepartmentsListItemHeader() {
  return (
    <>
      <div className="EmployeeDepartmentsListItemHeaderContainer">

        <div className="EmployeeDepartmentsListItemHeaderItemContainerID">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">ID</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerName">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Name</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerImageURL">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">ImageURL</h4>
        </div>

      </div>

    </>
  );
}

export default EmployeeDepartmentsListItemHeader;
