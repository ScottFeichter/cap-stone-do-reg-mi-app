//============CSS IMPORT AND BASE CLASS NAME============//

import './FacilityDetailsPage.css';
const BASE_CLASS_NAME = "FacilityDetailsPage";


//==================OTHER IMPORTS=======================//

// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FacilityDetails from './FacilityDetails';
import FacilityDeleteModal from '../FacilityDeleteModal/FacilityDeleteModal';
import FacilityDeleteModalButton from '../FacilityDeleteModal/FacilityDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function FacilityDetailsPage() {

  // const navigate = useNavigate();
  let facility;
  let facilities;
  let fid;
  let facilityParams;

  // let location;

  facilityParams = useParams();
  fid = facilityParams.facilityId;
  facilities = useSelector(state => state?.facilities?.facilities);
  facility = facilities.find(facility => facility.id === 1)


  console.log("facilityParams", facilityParams, "fid", fid, "facilities", facilities, "facility", facility);



const handleClickEditFacility = () => {
  // e.preventDefault();
  // navigate('/editFacilityForm')
}


 if(facilities.length === 0 || facilities === undefined) facility = {id: 1, name: "fake", branch_Id: 'fake'};
//  if(!facility) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX

 console.log("facility", facility)

//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Facilities Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>

           <Link to='/editFacilityForm' state={{facilityToEdit: facility}} >
           <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditFacility}>Edit Facility</button>
           </Link>





{/*
              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteFacility}>
                Delete Facility
                <FacilityDeleteModalButton
                            id="deleteFacilityModalButton"
                            buttonText="Delete Facility"
                            modalComponent={<FacilityDeleteModal facility={facility} />}
                            />

              </button> */}

              <FacilityDeleteModalButton
                id={`${BASE_CLASS_NAME}DeleteButton`}
                buttonText="Delete Facility"
                modalComponent={<FacilityDeleteModal facility={facility} />}
              />

            </nav>


            <div>

              <FacilityDetails facility={facility}></FacilityDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default FacilityDetailsPage;
