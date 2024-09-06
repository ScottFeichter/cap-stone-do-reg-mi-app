import './BranchesListItem.css';
import { Link } from "react-router-dom";

function BranchesListItem({ branch }) {
  // console.log(branch);
  return (
    <>


      <div className="BranchesListItemContainer">

        <div className="BranchesListItemContainerID">
            <p className="BranchesListItemP"> {branch.id ? branch.id : "-"}</p>
        </div>

        <div className="BranchesListItemContainerName">
          <Link
            to={`/branches/${branch.id}`}
            state={{branch: branch}}
            className="BranchesListItemP">
              {branch.name}
          </Link>
        </div>

        <div className="BranchesListItemContainerImageURL">
          <p className="BranchesListItemP">{branch.imageURL ? branch.imageURL: "-"}</p>
        </div>

      </div>
      {/* <div className="BranchesListItemBorder"></div> */}
    </>
  );
}

export default BranchesListItem;
