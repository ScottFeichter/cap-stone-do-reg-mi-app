import './BranchesListItem.css';
import { Link } from "react-router-dom";

function BranchesListItem({ branch }) {
  // console.log(branch);
  return (
    <>


      <div className="BranchesListItemContainer">

        {/* <div className="BranchesListItemContainerID">
            <p className="BranchesListItemP"> {branch.id ? branch.id : "-"}</p>
        </div> */}

        <div className="BranchesListItemContainerName">
          <Link
            to={`/branches/${branch.id}`}
            state={{branch: branch}}
            className="BranchesListItemP">
              {branch.name}
          </Link>
        </div>

        <div className="BranchesListItemContainerStreet">
          <p className="BranchesListItemP">{branch.street ? branch.street: "-"}</p>
        </div>

        <div className="BranchesListItemContainerCity">
          <p className="BranchesListItemP">{branch.city ? branch.city: "-"}</p>
        </div>

        <div className="BranchesListItemContainerState">
          <p className="BranchesListItemP">{branch.state ? branch.state: "-"}</p>
        </div>

        <div className="BranchesListItemContainerZip">
          <p className="BranchesListItemP">{branch.zip ? branch.zip: "-"}</p>
        </div>

      </div>
      {/* <div className="BranchesListItemBorder"></div> */}
    </>
  );
}

export default BranchesListItem;
