import './Employees.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import EmployeesList from './EmployeesList';
// import EmployeesSearchBar from './EmployeesSearch/SearchBar/EmployeesSearchBar';

function Employees() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewEmployeeForm');
  }


  return(
    <>
        <h1 id="EmployeesH1">Employees</h1>

        <main id="EmployeesMain">

          {/* <EmployeesSearchBar /> */}


            <nav id="EmployeesNav">
              {/* <input type="text" id="EmployeesSearchBar" placeholder="Search Employees" ></input> */}

              <button id="EmployeesCreateButton" onClick={handleClick}>Create New Employee</button>
            </nav>


            <EmployeesList />

        </main>
    </>
  )
}

export default Employees;
