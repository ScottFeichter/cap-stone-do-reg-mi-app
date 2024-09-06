import './EmployeeDepartmentsListItemHeader.css';
// import { Link } from "react-router-dom";

function EmployeeDepartmentsListItemHeader() {
  return (
    <>
      <div className="EmployeeDepartmentsListItemHeaderContainer">

        <div className="EmployeeDepartmentsListItemHeaderItemContainerID">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">ID</h4>
        </div>

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerED">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">ED</h4>
        </div> */}

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerAD">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">AD</h4>
        </div> */}

        <div className="EmployeeDepartmentsListItemHeaderItemContainerName">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Name</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerStreet">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Street</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerCity">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">City</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerState">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">State</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerZip">
            <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Zip</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerPhone">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Phone</h4>
        </div>

        <div className="EmployeeDepartmentsListItemHeaderItemContainerEmail">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">Email</h4>
        </div>

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerLang">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">1st Lang</h4>
        </div> */}

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerLang">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">2nd Lang</h4>
        </div> */}

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerInst">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">1st Inst</h4>
        </div> */}

        {/* <div className="EmployeeDepartmentsListItemHeaderItemContainerInst">
          <h4 className="EmployeeDepartmentsListItemHeaderItemH4">2nd Inst</h4>
        </div> */}

      </div>

    </>
  );
}

export default EmployeeDepartmentsListItemHeader;
