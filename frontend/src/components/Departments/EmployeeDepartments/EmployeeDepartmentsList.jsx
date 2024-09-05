import './EmployeeDepartmentsList.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmployeeDepartmentsListIndex from './EmployeeDepartmentsListIndex';
import Pagination from "./Pagination";
import EmployeeDepartmentsListItemHeader from './EmployeeDepartmentsListItemHeader';
import { thunkGetEmployeeDepartmentsAll } from '../../../redux/employeeDepartmentsReducer.js';

function EmployeeDepartmentsList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let employeeDepartmentsList = useSelector(state => state?.employeeDepartments?.employeeDepartments);
    // console.log("employeeDepartmentsList 16: ", employeeDepartmentsList);

    const [currentPage, setCurrentPage] = useState(1);

    const [employeeDepartmentsPerPage, setEmployeeDepartmentsPerPage] = useState(30);

    setEmployeeDepartmentsPerPage(30);


    const lastPostIndex = currentPage * employeeDepartmentsPerPage;
    const firstPostIndex = lastPostIndex - employeeDepartmentsPerPage;

    let currentPost;
    // const currentPost = currentPost = employeeDepartmentsList.slice(firstPostIndex, lastPostIndex);

    if(employeeDepartmentsList !== undefined && employeeDepartmentsList.length !== 0) {
      // console.log("line 29");
      currentPost = employeeDepartmentsList.slice(firstPostIndex, lastPostIndex);
    } else {
      // console.log("line 32")
      employeeDepartmentsList = [{test1: "test1"},{test2: "test"}];
      currentPost = employeeDepartmentsList.slice(firstPostIndex, lastPostIndex);
      dispatch(thunkGetEmployeeDepartmentsAll());
      navigate('/departments');
    }


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("employeeDepartmentsList 41: ", employeeDepartmentsList);
    // console.log("currentPage: ", currentPage, "employeeDepartmentsPerPage : ", employeeDepartmentsPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");

    return(
    <>
    <main className="EmployeeDepartmentsListMain">
      <EmployeeDepartmentsListItemHeader />

      <div className="EmployeeDepartmentsListContainer">
        {currentPost.map((employeeDepartment, id) => {
          return (
            <EmployeeDepartmentsListIndex
              employeeDepartment={employeeDepartment}
              key={id}
              totalPages={employeeDepartmentsList.length}
              employeeDepartmentsPerPage={employeeDepartmentsPerPage}
            />
          );
        })}
        <Pagination
          employeeDepartmentsPerPage={employeeDepartmentsPerPage}
          totalPages={employeeDepartmentsList.length}
          paginate={paginate}
        />
      </div>
    </main>


    </>
    )
}

export default EmployeeDepartmentsList;
