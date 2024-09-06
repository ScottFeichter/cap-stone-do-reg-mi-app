import './BranchesListItemHeader.css';
// import { Link } from "react-router-dom";

function BranchesListItemHeader() {
  return (
    <>
      <div className="BranchesListItemHeaderContainer">

        <div className="BranchesListItemHeaderItemContainerID">
          <h4 className="BranchesListItemHeaderItemH4">ID</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerName">
            <h4 className="BranchesListItemHeaderItemH4">Name</h4>
        </div>

        <div className="BranchesListItemHeaderItemContainerImageURL">
            <h4 className="BranchesListItemHeaderItemH4">ImageURL</h4>
        </div>

      </div>

    </>
  );
}

export default BranchesListItemHeader;
