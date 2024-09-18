import './BranchDropDownFacilityListItem.css';
import { Link } from "react-router-dom";

function BranchDropDownFacilityListItem({facility}) {


  // console.log("facility: ", facility);

//   const facilityBranch = branchesList.find(branch => branch.id === facility.branch_Id);

  return (
    <>


      <div className="BranchDropDownFacilityListItemContainer">

        {/* <div className="BranchDropDownFacilityListItemContainerID">
            <p className="BranchDropDownFacilityListItemP"> {facility.id ? facility.id : "-"}</p>
        </div> */}

        <div className="BranchDropDownFacilityListItemContainerName">
          <Link
            to={`/facilities/${facility.id}`}
            state={{facility: facility}}
            className="BranchDropDownFacilityListItemP">
              {facility.name}
          </Link>
        </div>

        {/* <div className="BranchDropDownFacilityListItemContainerBranchId">
          <p className="BranchDropDownFacilityListItemP">{facilityBranch.name? facilityBranch.name: "-"}</p>
        </div> */}

        <div className="BranchDropDownFacilityListItemContainerCapacity">
          <p className="BranchDropDownFacilityListItemP">{facility.capacity ? facility.capacity : "-"}</p>
        </div>

        <div className="BranchDropDownFacilityListItemContainerCapacity">
          <p className="BranchDropDownFacilityListItemP">{facility.capacity ? facility.capacity : "-"}</p>
        </div>

      </div>
      {/* <div className="BranchDropDownFacilityListItemBorder"></div> */}
    </>
  );
}

export default BranchDropDownFacilityListItem;
