//============CSS IMPORT AND BASE CLASS NAME============//

import './StudentDetailsPage.css';
const BCIN = "StudentDetailsPage";


//==================OTHER IMPORTS=======================//

// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentDetails from './StudentDetails';
import StudentDeleteModal from '../StudentDeleteModal/StudentDeleteModal';
import StudentDeleteModalButton from '../StudentDeleteModal/StudentDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function StudentDetailsPage() {

  // const navigate = useNavigate();
  let student;
  let students;
  let studentId;
  let studentParams;

  // let location;

  studentParams = useParams();
  studentId  = studentParams.studentId;
  students = useSelector(state => state?.students?.students);

  if(!students.length) return null;


  student = students.find(student => student.id === +studentId)






const handleClickEditStudent = () => {
  // e.preventDefault();
  // navigate('/editStudentForm')
}



 if(!student) return null; // will flick a blank page

 // THINGS THAT MAY TRIGGER A RE RENDER
 // change value of useState() hook
 // an update to the slice being tracked by useSelector()

 // RE RENDER MEANS THE DOM IS BEING UPDATE IN THE BROWSER - THE HTML IS CHANGING
 // BROWSER REFRESH COMPLETELY EMPTIES REDUX



//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BCIN}H1`}>Student Details</h1>
        <main id={`${BCIN}Main`}>

            <nav id={`${BCIN}Nav`}>

           <Link to='/editStudentForm' state={{studentToEdit: student}} >
           <button id={`${BCIN}EditButton`} onClick={handleClickEditStudent}>Edit Student</button>
           </Link>





{/*
              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteStudent}>
                Delete Student
                <StudentDeleteModalButton
                            id="deleteStudentModalButton"
                            buttonText="Delete Student"
                            modalComponent={<StudentDeleteModal student={student} />}
                            />

              </button> */}

              <StudentDeleteModalButton
                id={`${BCIN}DeleteButton`}
                buttonText="Delete Student"
                modalComponent={<StudentDeleteModal student={student} />}
              />

            </nav>


            <div>

              <StudentDetails student={student}></StudentDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default StudentDetailsPage;
