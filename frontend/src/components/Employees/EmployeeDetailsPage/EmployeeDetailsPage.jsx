//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDetailsPage.css';
const BCIN = "EmployeeDetailsPage";


//==================OTHER IMPORTS=======================//

// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDetails from './EmployeeDetails';
import EmployeeDeleteModal from '../EmployeeDeleteModal/EmployeeDeleteModal';
import EmployeeDeleteModalButton from '../EmployeeDeleteModal/EmployeeDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function EmployeeDetailsPage() {

  // const navigate = useNavigate();
  let employee;
  let employees;
  let employeeId;
  let employeeParams;

  // let location;

  employeeParams = useParams();
  employeeId  = employeeParams.employeeId;
  employees = useSelector(state => state?.employees?.employees);

  if(!employees.length) return null;


  employee = employees.find(employee => employee.id === +employeeId)






const handleClickEditEmployee = () => {
  // e.preventDefault();
  // navigate('/editEmployeeForm')
}



 if(!employee) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX



//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BCIN}H1`}>Employee Details</h1>
        <main id={`${BCIN}Main`}>

            <nav id={`${BCIN}Nav`}>

           <Link to='/editEmployeeForm' state={{employeeToEdit: employee}} >
           <button id={`${BCIN}EditButton`} onClick={handleClickEditEmployee}>Edit Employee</button>
           </Link>





{/*
              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteEmployee}>
                Delete Employee
                <EmployeeDeleteModalButton
                            id="deleteEmployeeModalButton"
                            buttonText="Delete Employee"
                            modalComponent={<EmployeeDeleteModal employee={employee} />}
                            />

              </button> */}

              <EmployeeDeleteModalButton
                id={`${BCIN}DeleteButton`}
                buttonText="Delete Employee"
                modalComponent={<EmployeeDeleteModal employee={employee} />}
              />

            </nav>


            <div>

              <EmployeeDetails employee={employee}></EmployeeDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default EmployeeDetailsPage;
