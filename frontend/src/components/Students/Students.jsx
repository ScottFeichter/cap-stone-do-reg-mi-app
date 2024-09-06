import './Students.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import StudentsList from './StudentsList/StudentsList.jsx';
// import StudentsSearchBar from './StudentsSearch/SearchBar/StudentsSearchBar';

function Students() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewStudentForm');
  }


  return(
    <>
        <h1 id="StudentsH1">Students</h1>

        <main id="StudentsMain">

          {/* <StudentsSearchBar /> */}


            <nav id="StudentsNav">
              {/* <input type="text" id="StudentsSearchBar" placeholder="Search Students" ></input> */}

              <button id="StudentsCreateButton" onClick={handleClick}>Create New Student</button>
            </nav>


            <StudentsList />

        </main>
    </>
  )
}

export default Students;
