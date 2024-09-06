import './AcademicDepartmentsListItem.css';
import { Link } from "react-router-dom";

function AcademicDepartmentsListItem({ academicDepartment }) {
  // console.log(academicDepartment);
  return (
    <>


      <div className="AcademicDepartmentsListItemContainer">

        <div className="AcademicDepartmentsListItemContainerID">
            <p className="AcademicDepartmentsListItemP"> {academicDepartment.id ? academicDepartment.id : "-"}</p>
        </div>

        <div className="AcademicDepartmentsListItemContainerName">
          <Link
            to={`/academicDepartments/${academicDepartment.id}`}
            state={{academicDepartment: academicDepartment}}
            className="AcademicDepartmentsListItemP">
              {academicDepartment.name}
          </Link>
        </div>

        <div className="AcademicDepartmentsListItemContainerImageURL">
          <p className="AcademicDepartmentsListItemP">{academicDepartment.imageURL ? academicDepartment.imageURL: "-"}</p>
        </div>

      </div>
      {/* <div className="AcademicDepartmentsListItemBorder"></div> */}
    </>
  );
}

export default AcademicDepartmentsListItem;
