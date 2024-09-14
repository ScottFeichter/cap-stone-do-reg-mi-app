import './BranchesListItemHeader.css';
// import { Link } from "react-router-dom";

function BranchesListItemHeader() {
  return (
    <>
      <div className="BranchesListItemHeaderContainer">

        {/* <div className="BranchesListItemHeaderItemContainerID">
          <h4 className="BranchesListItemHeaderItemH4">ID</h4>
        </div> */}

        <div className="BranchesListItemHeaderItemContainerName">
            <h4 className="BranchesListItemHeaderItemH4">Name</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerStreet">
            <h4 className="BranchesListItemHeaderItemH4">Street</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerCity">
            <h4 className="BranchesListItemHeaderItemH4">City</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerState">
            <h4 className="BranchesListItemHeaderItemH4">State</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerZip">
            <h4 className="BranchesListItemHeaderItemH4">Zip</h4>
        </div>



      </div>

    </>
  );
}

export default BranchesListItemHeader;
