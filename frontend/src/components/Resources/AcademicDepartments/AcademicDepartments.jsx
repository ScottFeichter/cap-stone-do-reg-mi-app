import './AcademicDepartments.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import AcademicDepartmentsList from './AcademicDepartmentsList/AcademicDepartmentsList.jsx';
// import AcademicDepartmentsSearchBar from './AcademicDepartmentsSearch/SearchBar/AcademicDepartmentsSearchBar';

function AcademicDepartments() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewAcademicDepartmentForm');
  }


  return(
    <>
        <h1 id="AcademicDepartmentsH1">Employee Departments</h1>

        <main id="AcademicDepartmentsMain">

          {/* <AcademicDepartmentsSearchBar /> */}


            <nav id="AcademicDepartmentsNav">
              {/* <input type="text" id="AcademicDepartmentsSearchBar" placeholder="Search AcademicDepartments" ></input> */}

              <button id="AcademicDepartmentsCreateButton" onClick={handleClick}>Create New Employee Department</button>
            </nav>


            <AcademicDepartmentsList />

        </main>
    </>
  )
}

export default AcademicDepartments;
