import './FacilitiesList.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import FacilitiesListItem from './FacilitiesListItem';
// import FacilityListPagination from "./FacilityListPagination/FacilityListPagination.jsx";
import FacilitiesListItemHeader from './FacilitiesListItemHeader';
// import { thunkGetFacilitiesAll } from '../../redux/facilitiesReducer';

function FacilitiesList(){

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let facilitiesList = useSelector(state => state?.facilities?.facilities);
    let branchesList = useSelector(state => state?.branches?.branches);
    // console.log("branchesList", branchesList);


    let branchesListNames = branchesList.map(branch => {
      return {[branch.id]: branch.name}});
    console.log("branchesListNames: ", branchesListNames);




// ================================================================================================


    // console.log("facilitiesList 16: ", facilitiesList);

    // const [currentPage, setCurrentPage] = useState(1);

    // const [facilitiesPerPage, setFacilitiesPerPage] = useState(30);
    // setFacilitiesPerPage(30);


    // const lastPostIndex = currentPage * facilitiesPerPage;
    // const firstPostIndex = lastPostIndex - facilitiesPerPage;

    // let currentPost;
    // const currentPost = currentPost = facilitiesList.slice(firstPostIndex, lastPostIndex);

    // if(facilitiesList !== undefined && facilitiesList.length !== 0) {
      // console.log("line 29");
      // currentPost = facilitiesList.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // facilitiesList = [{test1: "test1"},{test2: "test"}];
      // currentPost = facilitiesList.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetFacilitiesAll());
      // navigate('/facilities');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("facilitiesList 41: ", facilitiesList);
    // console.log("currentPage: ", currentPage, "facilitiesPerPage : ", facilitiesPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATION!!!!!!!!!!
    // facility, id where in parens 60

    // console.log("facilitiesList: ", facilitiesList)


    return(
    <>
    <main className="FacilitiesListMain">
      <FacilitiesListItemHeader />

      <div className="FacilitiesListContainer">
        {facilitiesList.map((facility) => {
          return (
            <FacilitiesListItem
              facility={facility}
              branchesList={branchesList}
              key={facility.id}
              // totalPages={facilitiesList.length}
              // facilitiesPerPage={facilitiesPerPage}
            />
          );
        })}


        {/* <FacilityListPagination
          facilitiesPerPage={facilitiesPerPage}
          totalPages={facilitiesList.length + 1}
          paginate={paginate}
        /> */}
      </div>
    </main>


    </>
    )
}

export default FacilitiesList;
