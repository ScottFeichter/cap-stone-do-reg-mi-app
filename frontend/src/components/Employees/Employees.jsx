//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'Employees';
import './Employees.css';

//==================PROGRAM IMPORTS=====================//

// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'


//================COMPONENT IMPORTS=====================//

import EmployeesList from './EmployeesList/EmployeesList.jsx';
import EmployeesSearchBar from './EmployeesSearch/SearchBar/EmployeesSearchBar';


//===============FUNCTION DECLARATION===================//


function Employees() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewEmployeeForm');
  }


//=================FUNCTION RETURN======================//
  return(
    <>
        <h1 id={`${BCIN}H1`}>Employees</h1>

        <main id={`${BCIN}Main`}>

          {/* <EmployeesSearchBar /> */}


            <nav id={`${BCIN}Nav`}>
              {/* <input type=`text` id={`${BCIN}SearchBar`} placeholder=`Search Employees` ></input> */}
              <EmployeesSearchBar />


              <button id={`${BCIN}CreateButton`} onClick={handleClick}>Create New Employee</button>
            </nav>


            <EmployeesList />

        </main>
    </>
  )
}

//===================FUNCTION EXPORT====================//
export default Employees;
