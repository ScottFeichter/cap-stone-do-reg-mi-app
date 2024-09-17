//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDepartmentDetailsPage.css';
const BCIN = "EmployeeDepartmentDetailsPage";


//==================OTHER IMPORTS=======================//


// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDepartmentDetails from './EmployeeDepartmentDetails';
import EmployeeDepartmentDeleteModal from '../EmployeeDepartmentDeleteModal/EmployeeDepartmentDeleteModal';
import EmployeeDepartmentDeleteModalButton from '../EmployeeDepartmentDeleteModal/EmployeeDepartmentDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function EmployeeDepartmentDetailsPage() {


  let employeeDepartment;
  let employeeDepartments;
  let employeeDepartmentId;
  let employeeDepartmentParams;

  // let location;

  employeeDepartmentParams = useParams();
  employeeDepartmentId  = employeeDepartmentParams.employeeDepartmentId;
  employeeDepartments = useSelector(state => state?.employeeDepartments?.employeeDepartments);
  employeeDepartment = employeeDepartments.find(employeeDepartment => employeeDepartment.id === +employeeDepartmentId)

  // if(!employeeDepartment){
  //   location = useLocation();
  //   employeeDepartment = location.state.employeeDepartment;
  // }







const handleClickEditEmployeeDepartment = () => {
  // e.preventDefault();
  // navigate('/editEmployeeDepartmentForm')
}


if(!employeeDepartment) return null;


//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BCIN}H1`}>Employee Department Details</h1>
        <main id={`${BCIN}Main`}>

            <nav id={`${BCIN}Nav`}>

           <Link to='/editEmployeeDepartmentForm' state={{employeeDepartmentToEdit: employeeDepartment}} >
           <button id={`${BCIN}EditButton`} onClick={handleClickEditEmployeeDepartment}>Edit Employee Department</button>
           </Link>





{/*
              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteEmployee}>
                Delete Employee
                <EmployeeDepartmentDeleteModalButton
                            id="deleteEmployeeModalButton"
                            buttonText="Delete Employee"
                            modalComponent={<EmployeeDepartmentDeleteModal employeeDepartment={employeeDepartment} />}
                            />

              </button> */}

              <EmployeeDepartmentDeleteModalButton
                id={`${BCIN}DeleteButton`}
                buttonText="Delete Employee Department"
                modalComponent={<EmployeeDepartmentDeleteModal employeeDepartment={employeeDepartment} />}
              />

            </nav>


            <div>

              <EmployeeDepartmentDetails employeeDepartment={employeeDepartment}></EmployeeDepartmentDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default EmployeeDepartmentDetailsPage;
