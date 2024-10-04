import './AcademicDepartmentsList.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import AcademicDepartmentsListItem from './AcademicDepartmentsListItem';
// import AcademicDepartmentListPagination from "./AcademicDepartmentListPagination/AcademicDepartmentListPagination.jsx";
import AcademicDepartmentsListItemHeader from './AcademicDepartmentsListItemHeader';
// import { thunkGetAcademicDepartmentsAll } from '../../redux/academicDepartmentsReducer';

function AcademicDepartmentsList(){

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let academicDepartmentsList = useSelector(state => state?.academicDepartments?.academicDepartments);
    // console.log("academicDepartmentsList 16: ", academicDepartmentsList);

    // const [currentPage, setCurrentPage] = useState(1);

    // const [academicDepartmentsPerPage, setAcademicDepartmentsPerPage] = useState(30);
    // setAcademicDepartmentsPerPage(30);


    // const lastPostIndex = currentPage * academicDepartmentsPerPage;
    // const firstPostIndex = lastPostIndex - academicDepartmentsPerPage;

    // let currentPost;
    // const currentPost = currentPost = academicDepartmentsList.slice(firstPostIndex, lastPostIndex);

    // if(academicDepartmentsList !== undefined && academicDepartmentsList.length !== 0) {
      // console.log("line 29");
      // currentPost = academicDepartmentsList.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // academicDepartmentsList = [{test1: "test1"},{test2: "test"}];
      // currentPost = academicDepartmentsList.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetAcademicDepartmentsAll());
      // navigate('/academicDepartments');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("academicDepartmentsList 41: ", academicDepartmentsList);
    // console.log("currentPage: ", currentPage, "academicDepartmentsPerPage : ", academicDepartmentsPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATION!!!!!!!!!!
    // academicDepartment, id where in parens 60

    // console.log("academicDepartmentsList: ", academicDepartmentsList)


    return(
    <>
    <main className="AcademicDepartmentsListMain">
      <AcademicDepartmentsListItemHeader />

      <div className="AcademicDepartmentsListContainer">
        {academicDepartmentsList.map((academicDepartment) => {
          return (
            <AcademicDepartmentsListItem
              academicDepartment={academicDepartment}
              key={academicDepartment.id}
              // totalPages={academicDepartmentsList.length}
              // academicDepartmentsPerPage={academicDepartmentsPerPage}
            />
          );
        })}


        {/* <AcademicDepartmentListPagination
          academicDepartmentsPerPage={academicDepartmentsPerPage}
          totalPages={academicDepartmentsList.length + 1}
          paginate={paginate}
        /> */}
      </div>
    </main>


    </>
    )
}

export default AcademicDepartmentsList;
