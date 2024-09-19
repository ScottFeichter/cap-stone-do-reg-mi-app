import './EmployeesListItemHeader.css';
// import { Link } from "react-router-dom";

function EmployeesListItemHeader() {
  return (
    <>
      <div className="EmployeesListItemHeaderContainer">

        <div className="EmployeesListItemHeaderItemContainerID">
          <h4 className="EmployeesListItemHeaderItemH4">ID</h4>
        </div>

        {/* <div className="EmployeesListItemHeaderItemContainerED">
          <h4 className="EmployeesListItemHeaderItemH4">ED</h4>
        </div> */}

        {/* <div className="EmployeesListItemHeaderItemContainerAD">
          <h4 className="EmployeesListItemHeaderItemH4">AD</h4>
        </div> */}

        <div className="EmployeesListItemHeaderItemContainerName">
            <h4 className="EmployeesListItemHeaderItemH4">Name</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerStreet">
            <h4 className="EmployeesListItemHeaderItemH4">Street</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerCity">
            <h4 className="EmployeesListItemHeaderItemH4">City</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerState">
            <h4 className="EmployeesListItemHeaderItemH4">State</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerZip">
            <h4 className="EmployeesListItemHeaderItemH4">Zip</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerPhone">
          <h4 className="EmployeesListItemHeaderItemH4">Phone</h4>
        </div>

        <div className="EmployeesListItemHeaderItemContainerEmail">
          <h4 className="EmployeesListItemHeaderItemH4">Email</h4>
        </div>

        {/* <div className="EmployeesListItemHeaderItemContainerLang">
          <h4 className="EmployeesListItemHeaderItemH4">1st Lang</h4>
        </div> */}

        {/* <div className="EmployeesListItemHeaderItemContainerLang">
          <h4 className="EmployeesListItemHeaderItemH4">2nd Lang</h4>
        </div> */}

        {/* <div className="EmployeesListItemHeaderItemContainerInst">
          <h4 className="EmployeesListItemHeaderItemH4">1st Inst</h4>
        </div> */}

        {/* <div className="EmployeesListItemHeaderItemContainerInst">
          <h4 className="EmployeesListItemHeaderItemH4">2nd Inst</h4>
        </div> */}

      </div>

    </>
  );
}

export default EmployeesListItemHeader;
