import './FacilitiesListItem.css';
import { Link } from "react-router-dom";

function FacilitiesListItem({ facility }) {
  // console.log(facility);
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

        <div className="FacilitiesListItemContainerImageURL">
          <p className="FacilitiesListItemP">{facility.imageURL ? facility.imageURL: "-"}</p>
        </div>

      </div>
      {/* <div className="FacilitiesListItemBorder"></div> */}
    </>
  );
}

export default FacilitiesListItem;
