//============CSS IMPORT AND BASE CLASS NAME============//

import './AcademicDepartmentDetailsPage.css';
const BASE_CLASS_NAME = "AcademicDepartmentDetailsPage";


//==================OTHER IMPORTS=======================//

// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AcademicDepartmentDetails from './AcademicDepartmentDetails';
import AcademicDepartmentDeleteModal from '../AcademicDepartmentDeleteModal/AcademicDepartmentDeleteModal';
import AcademicDepartmentDeleteModalButton from '../AcademicDepartmentDeleteModal/AcademicDepartmentDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function AcademicDepartmentDetailsPage() {

  // const navigate = useNavigate();
  let academicDepartment;
  let academicDepartments;
  let academicDepartmentId;
  let academicDepartmentParams;

  // let location;

  academicDepartmentParams = useParams();
  academicDepartmentId  = academicDepartmentParams.academicDepartmentId;
  academicDepartments = useSelector(state => state?.academicDepartments?.academicDepartments);
  academicDepartment = academicDepartments.find(academicDepartment => academicDepartment.id === +academicDepartmentId)

  console.log("details", academicDepartmentParams, academicDepartmentId, academicDepartments, "ep!!!!!!!!!!!!!", academicDepartment);






const handleClickEditAcademicDepartment = () => {
  // e.preventDefault();
  // navigate('/editAcademicDepartmentForm')
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
        <h1 id={`${BASE_CLASS_NAME}H1`}>Academic Department Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>

           <Link to='/editAcademicDepartmentForm' state={{academicDepartmentToEdit: academicDepartment}} >
           <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditAcademicDepartment}>Edit Academic Department</button>
           </Link>





{/*
              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteAcademicDepartment}>
                Delete AcademicDepartment
                <AcademicDepartmentDeleteModalButton
                            id="deleteAcademicDepartmentModalButton"
                            buttonText="Delete AcademicDepartment"
                            modalComponent={<AcademicDepartmentDeleteModal academicDepartment={academicDepartment} />}
                            />

              </button> */}

              <AcademicDepartmentDeleteModalButton
                id={`${BASE_CLASS_NAME}DeleteButton`}
                buttonText="Delete Academic Department"
                modalComponent={<AcademicDepartmentDeleteModal academicDepartment={academicDepartment} />}
              />

            </nav>


            <div>

              <AcademicDepartmentDetails academicDepartment={academicDepartment}></AcademicDepartmentDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default AcademicDepartmentDetailsPage;
