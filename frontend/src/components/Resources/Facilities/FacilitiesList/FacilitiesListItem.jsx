import './FacilitiesListItem.css';
import { Link } from "react-router-dom";

function FacilitiesListItem({ academicDepartment }) {
  // console.log(academicDepartment);
  return (
    <>


      <div className="FacilitiesListItemContainer">

        <div className="FacilitiesListItemContainerID">
            <p className="FacilitiesListItemP"> {academicDepartment.id ? academicDepartment.id : "-"}</p>
        </div>

        <div className="FacilitiesListItemContainerName">
          <Link
            to={`/facilities/${academicDepartment.id}`}
            state={{academicDepartment: academicDepartment}}
            className="FacilitiesListItemP">
              {academicDepartment.name}
          </Link>
        </div>

        <div className="FacilitiesListItemContainerImageURL">
          <p className="FacilitiesListItemP">{academicDepartment.imageURL ? academicDepartment.imageURL: "-"}</p>
        </div>

      </div>
      {/* <div className="FacilitiesListItemBorder"></div> */}
    </>
  );
}

export default FacilitiesListItem;
