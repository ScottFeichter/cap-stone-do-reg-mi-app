//============CSS IMPORT AND BASE CLASS NAME============//

import './BranchDetailsPage.css';
const BCIN = "BranchDetailsPage";


//==================OTHER IMPORTS=======================//

// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BranchDetails from './BranchDetails';
import BranchDeleteModal from '../BranchDeleteModal/BranchDeleteModal';
import BranchDeleteModalButton from '../BranchDeleteModal/BranchDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function BranchDetailsPage() {

  // const navigate = useNavigate();
  let branch;
  let branches;
  let branchId;
  let branchParams;

  // let location;

  branchParams = useParams();
  branchId  = branchParams.branchId;
  branches = useSelector(state => state?.branches?.branches);
  branch = branches.find(branch => branch.id === +branchId)

  // console.log("details", branchParams, branchId, branches, "ep!!!!!!!!!!!!!", branch);






const handleClickEditBranch = () => {
  // e.preventDefault();
  // navigate('/editBranchForm')
}



 if(!branch) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX



//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BCIN}H1`}>Branch Details</h1>
        <main id={`${BCIN}Main`}>

            <nav id={`${BCIN}Nav`}>

           <Link to='/editBranchForm' state={{branchToEdit: branch}} >
           <button id={`${BCIN}EditButton`} onClick={handleClickEditBranch}>Edit Branch</button>
           </Link>





{/*
              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteBranch}>
                Delete Branch
                <BranchDeleteModalButton
                            id="deleteBranchModalButton"
                            buttonText="Delete Branch"
                            modalComponent={<BranchDeleteModal branch={branch} />}
                            />

              </button> */}

              <BranchDeleteModalButton
                // contentClassName={`${BCIN}CustomModal`}
                id={`${BCIN}DeleteButton`}
                buttonText="Delete Branch"
                modalComponent={<BranchDeleteModal branch={branch} />}
              />

            </nav>


            <div>

              <BranchDetails branch={branch}></BranchDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default BranchDetailsPage;
