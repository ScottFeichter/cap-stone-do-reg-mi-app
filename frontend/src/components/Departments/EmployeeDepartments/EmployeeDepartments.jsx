import './EmployeeDepartments.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import EmployeeDepartmentsList from './EmployeeDepartmentsList.jsx';
// import EmployeeDepartmentsSearchBar from './EmployeeDepartmentsSearch/SearchBar/EmployeeDepartmentsSearchBar';

function EmployeeDepartments() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewEmployeeDepartmentForm');
  }


  return(
    <>
        <h1 id="EmployeeDepartmentsH1">Employee Departments</h1>

        <main id="EmployeeDepartmentsMain">

          {/* <EmployeeDepartmentsSearchBar /> */}


            <nav id="EmployeeDepartmentsNav">
              {/* <input type="text" id="EmployeeDepartmentsSearchBar" placeholder="Search EmployeeDepartments" ></input> */}

              <button id="EmployeeDepartmentsCreateButton" onClick={handleClick}>Create Employee Department</button>
            </nav>


            <EmployeeDepartmentsList />

        </main>
    </>
  )
}

export default EmployeeDepartments;
