import './FacilitiesListItemHeader.css';
// import { Link } from "react-router-dom";

function FacilitiesListItemHeader() {
  return (
    <>
      <div className="FacilitiesListItemHeaderContainer">

        <div className="FacilitiesListItemHeaderItemContainerID">
          <h4 className="FacilitiesListItemHeaderItemH4">ID</h4>
        </div>

        <div className="FacilitiesListItemHeaderItemContainerName">
            <h4 className="FacilitiesListItemHeaderItemH4">Name</h4>
        </div>

        <div className="FacilitiesListItemHeaderItemContainerBranchId">
            <h4 className="FacilitiesListItemHeaderItemH4">Branch ID</h4>
        </div>

      </div>

    </>
  );
}

export default FacilitiesListItemHeader;
