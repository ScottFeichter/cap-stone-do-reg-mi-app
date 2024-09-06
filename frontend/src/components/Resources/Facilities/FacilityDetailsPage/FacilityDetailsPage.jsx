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
  let academicDepartment;
  let facilities;
  let academicDepartmentId;
  let academicDepartmentParams;

  // let location;

  academicDepartmentParams = useParams();
  academicDepartmentId  = academicDepartmentParams.academicDepartmentId;
  facilities = useSelector(state => state?.facilities?.facilities);
  academicDepartment = facilities.find(academicDepartment => academicDepartment.id === +academicDepartmentId)

  console.log("details", academicDepartmentParams, academicDepartmentId, facilities, "ep!!!!!!!!!!!!!", academicDepartment);






const handleClickEditFacility = () => {
  // e.preventDefault();
  // navigate('/editFacilityForm')
}



 if(!academicDepartment) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX



//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Employee Department Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>

           <Link to='/editFacilityForm' state={{academicDepartmentToEdit: academicDepartment}} >
           <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditFacility}>Edit Employee Department</button>
           </Link>





{/*
              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteFacility}>
                Delete Facility
                <FacilityDeleteModalButton
                            id="deleteFacilityModalButton"
                            buttonText="Delete Facility"
                            modalComponent={<FacilityDeleteModal academicDepartment={academicDepartment} />}
                            />

              </button> */}

              <FacilityDeleteModalButton
                id={`${BASE_CLASS_NAME}DeleteButton`}
                buttonText="Delete Employee Department"
                modalComponent={<FacilityDeleteModal academicDepartment={academicDepartment} />}
              />

            </nav>


            <div>

              <FacilityDetails academicDepartment={academicDepartment}></FacilityDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default FacilityDetailsPage;
