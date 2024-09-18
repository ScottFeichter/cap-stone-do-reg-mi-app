import './BranchesListItem.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

import BranchDropDownFacilityList from '../BranchDropDownFacilityList/BranchDropDownFacilityList';

import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function BranchesListItem({ branch, facilitiesList }) {

  // console.log("facilitiesList: ", facilitiesList);

  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    clicked ? setClicked(false) : setClicked(true);

  }


  return (
    <>



{/* ==========================container start================================= */}
      <div className="BranchesListItemContainer">


      <button id={`BranchesListItemDropDownButton`} onClick={handleClick}>
      {clicked ?
        <IoMdArrowDropdownCircle id={`BranchesListItemIoMdArrowDropdownCircle`}/> :
        <MdOutlineArrowDropDownCircle id={`BranchesListItemIoMdOutlineArrowDropDownCircle`}/>
      }
      </button>



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
{/* ============================container end================================== */}






    {clicked ? <BranchDropDownFacilityList facilitiesList={facilitiesList} branchId={branch.id} /> : <></>}

    </>
  );
}

export default BranchesListItem;
