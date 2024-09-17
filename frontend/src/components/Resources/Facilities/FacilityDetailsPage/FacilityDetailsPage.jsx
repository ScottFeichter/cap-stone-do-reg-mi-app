//============CSS IMPORT AND BASE CLASS NAME============//

import './FacilityDetailsPage.css';
const BCIN = "FacilityDetailsPage";


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
  let facilityId;
  let facilityParams;


  // let location;

  facilityParams = useParams();
  facilityId = facilityParams.facilityId;
  facilities = useSelector(state => state?.facilities?.facilities);
  facility = facilities.find(facility => facility.id === +facilityId)

  // console.log("facilityParams", facilityParams, "facilityId", facilityId, "facilities", facilities, "facility", facility);



const handleClickEditFacility = () => {
  // e.preventDefault();
  // navigate('/editFacilityForm')
}



 if(!facility) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX

 console.log("facility", facility)

//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BCIN}H1`}>Facilities Details</h1>
        <main id={`${BCIN}Main`}>

            <nav id={`${BCIN}Nav`}>

           <Link to='/editFacilityForm' state={{facilityToEdit: facility}} >
           <button id={`${BCIN}EditButton`} onClick={handleClickEditFacility}>Edit Facility</button>
           </Link>





{/*
              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteFacility}>
                Delete Facility
                <FacilityDeleteModalButton
                            id="deleteFacilityModalButton"
                            buttonText="Delete Facility"
                            modalComponent={<FacilityDeleteModal facility={facility} />}
                            />

              </button> */}

              <FacilityDeleteModalButton
                id={`${BCIN}DeleteButton`}
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
