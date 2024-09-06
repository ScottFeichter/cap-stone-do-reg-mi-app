import './StudentsList.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import StudentsListItem from './StudentsListItem';
// import StudentListPagination from "./StudentListPagination/StudentListPagination.jsx";
import StudentsListItemHeader from './StudentsListItemHeader';
// import { thunkGetStudentsAll } from '../../redux/studentsReducer';

function StudentsList(){

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let studentsList = useSelector(state => state?.students?.students);
    // console.log("studentsList 16: ", studentsList);

    // const [currentPage, setCurrentPage] = useState(1);

    // const [studentsPerPage, setStudentsPerPage] = useState(30);
    // setStudentsPerPage(30);


    // const lastPostIndex = currentPage * studentsPerPage;
    // const firstPostIndex = lastPostIndex - studentsPerPage;

    // let currentPost;
    // const currentPost = currentPost = studentsList.slice(firstPostIndex, lastPostIndex);

    // if(studentsList !== undefined && studentsList.length !== 0) {
      // console.log("line 29");
      // currentPost = studentsList.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // studentsList = [{test1: "test1"},{test2: "test"}];
      // currentPost = studentsList.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetStudentsAll());
      // navigate('/students');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("studentsList 41: ", studentsList);
    // console.log("currentPage: ", currentPage, "studentsPerPage : ", studentsPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATIO

    return(
    <>
    <main className="StudentListMain">
      <StudentsListItemHeader />

      <div className="StudentListContainer">
        {studentsList.map((student, id) => {
          return (
            <StudentsListItem
              student={student}
              key={id}
              // totalPages={studentsList.length}
              // studentsPerPage={studentsPerPage}
            />
          );
        })}


        {/* <StudentListPagination
          studentsPerPage={studentsPerPage}
          totalPages={studentsList.length + 1}
          paginate={paginate}
        /> */}
      </div>
    </main>


    </>
    )
}

export default StudentsList;
