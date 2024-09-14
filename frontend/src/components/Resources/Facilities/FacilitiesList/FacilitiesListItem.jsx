import './FacilitiesListItem.css';
import { Link } from "react-router-dom";

function FacilitiesListItem({facility, branchesList}) {

  const facilityBranch = branchesList.find(branch => branch.id === facility.branch_Id);

  return (
    <>


      <div className="FacilitiesListItemContainer">

        {/* <div className="FacilitiesListItemContainerID">
            <p className="FacilitiesListItemP"> {facility.id ? facility.id : "-"}</p>
        </div> */}

        <div className="FacilitiesListItemContainerName">
          <Link
            to={`/facilities/${facility.id}`}
            state={{facility: facility}}
            className="FacilitiesListItemP">
              {facility.name}
          </Link>
        </div>

        <div className="FacilitiesListItemContainerBranchId">
          <p className="FacilitiesListItemP">{facilityBranch.name? facilityBranch.name: "-"}</p>
        </div>

        <div className="FacilitiesListItemContainerCapacity">
          <p className="FacilitiesListItemP">{facility.capacity ? facility.capacity : "-"}</p>
        </div>

      </div>
      {/* <div className="FacilitiesListItemBorder"></div> */}
    </>
  );
}

export default FacilitiesListItem;
