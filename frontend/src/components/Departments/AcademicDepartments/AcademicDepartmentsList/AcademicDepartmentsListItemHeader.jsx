import './AcademicDepartmentsListItemHeader.css';
// import { Link } from "react-router-dom";

function AcademicDepartmentsListItemHeader() {
  return (
    <>
      <div className="AcademicDepartmentsListItemHeaderContainer">

        <div className="AcademicDepartmentsListItemHeaderItemContainerID">
          <h4 className="AcademicDepartmentsListItemHeaderItemH4">ID</h4>
        </div>

        <div className="AcademicDepartmentsListItemHeaderItemContainerName">
            <h4 className="AcademicDepartmentsListItemHeaderItemH4">Name</h4>
        </div>

        <div className="AcademicDepartmentsListItemHeaderItemContainerImageURL">
            <h4 className="AcademicDepartmentsListItemHeaderItemH4">ImageURL</h4>
        </div>

      </div>

    </>
  );
}

export default AcademicDepartmentsListItemHeader;
