import './BranchDropDownFacilityListItemHeader.css';
// import { Link } from "react-router-dom";

function BranchDropDownFacilityListItemHeader() {
  return (
    <>
      <div className="BranchDropDownFacilityListItemHeaderContainer">

        {/* <div className="BranchDropDownFacilityListItemHeaderItemContainerID">
          <h4 className="BranchDropDownFacilityListItemHeaderItemH4">ID</h4>
        </div> */}

        <div className="BranchDropDownFacilityListItemHeaderItemContainerName">
            <h4 className="BranchDropDownFacilityListItemHeaderItemH4">Facility Name</h4>
        </div>

        {/* <div className="BranchDropDownFacilityListItemHeaderItemContainerBranchId">
            <h4 className="BranchDropDownFacilityListItemHeaderItemH4">Branch</h4>
        </div> */}

        <div className="BranchDropDownFacilityListItemHeaderItemContainerCapacity">
          <h4 className="BranchDropDownFacilityListItemHeaderItemH4">Facility Capacity</h4>
        </div>

        <div className="BranchDropDownFacilityListItemHeaderItemContainerSchedule">
            <h4 className="BranchDropDownFacilityListItemHeaderItemH4">Schedule</h4>
        </div>

      </div>

    </>
  );
}

export default BranchDropDownFacilityListItemHeader;
