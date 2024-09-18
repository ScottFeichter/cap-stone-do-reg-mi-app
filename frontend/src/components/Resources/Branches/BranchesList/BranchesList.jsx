import './BranchesList.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import BranchesListItem from './BranchesListItem';
// import BranchListPagination from "./BranchListPagination/BranchListPagination.jsx";
import BranchesListItemHeader from './BranchesListItemHeader';
// import { thunkGetBranchesAll } from '../../redux/branchesReducer';

function BranchesList(){

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let branchesList = useSelector(state => state?.branches?.branches);
    let facilitiesList = useSelector(state => state?.facilities?.facilities);
    // console.log("branchesList 16: ", branchesList);

    // const [currentPage, setCurrentPage] = useState(1);

    // const [branchesPerPage, setBranchesPerPage] = useState(30);
    // setBranchesPerPage(30);


    // const lastPostIndex = currentPage * branchesPerPage;
    // const firstPostIndex = lastPostIndex - branchesPerPage;

    // let currentPost;
    // const currentPost = currentPost = branchesList.slice(firstPostIndex, lastPostIndex);

    // if(branchesList !== undefined && branchesList.length !== 0) {
      // console.log("line 29");
      // currentPost = branchesList.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // branchesList = [{test1: "test1"},{test2: "test"}];
      // currentPost = branchesList.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetBranchesAll());
      // navigate('/branches');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("branchesList 41: ", branchesList);
    // console.log("currentPage: ", currentPage, "branchesPerPage : ", branchesPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATION!!!!!!!!!!
    // branch, id where in parens 60

    // console.log("branchesList: ", branchesList)


    return(
    <>
    <main className="BranchesListMain">
      <BranchesListItemHeader />

      <div className="BranchesListContainer">
        {branchesList.map((branch) => {
          return (
            <>
              <BranchesListItem
                branch={branch}
                facilitiesList={facilitiesList}
                key={branch.id}
                // totalPages={branchesList.length}
                // branchesPerPage={branchesPerPage}
              />
              <hr className='BranchesListHr'></hr>
            </>
          );
        })}




        {/* <BranchListPagination
          branchesPerPage={branchesPerPage}
          totalPages={branchesList.length + 1}
          paginate={paginate}
        /> */}
      </div>
    </main>


    </>
    )
}

export default BranchesList;
