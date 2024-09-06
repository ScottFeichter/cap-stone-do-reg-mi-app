import './FacilitiesListItem.css';
import { Link } from "react-router-dom";

function FacilitiesListItem({ facility }) {
  // console.log("facility in facilitiesListItem: ", facility);
  return (
    <>


      <div className="FacilitiesListItemContainer">

        <div className="FacilitiesListItemContainerID">
            <p className="FacilitiesListItemP"> {facility.id ? facility.id : "-"}</p>
        </div>

        <div className="FacilitiesListItemContainerName">
          <Link
            to={`/facilities/${facility.id}`}
            state={{facility: facility}}
            className="FacilitiesListItemP">
              {facility.name}
          </Link>
        </div>

        <div className="FacilitiesListItemContainerBranchId">
          <p className="FacilitiesListItemP">{facility.branch_Id? facility.branch_Id: "-"}</p>
        </div>

      </div>
      {/* <div className="FacilitiesListItemBorder"></div> */}
    </>
  );
}

export default FacilitiesListItem;
