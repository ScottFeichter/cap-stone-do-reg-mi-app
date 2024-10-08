import './EmployeesList.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import EmployeesListItem from './EmployeesListItem';
// import EmployeeListPagination from "./EmployeeListPagination/EmployeeListPagination.jsx";
import EmployeesListItemHeader from './EmployeesListItemHeader';
// import { thunkGetEmployeesAll } from '../../redux/employeesReducer';

function EmployeesList(){

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let employeesList = useSelector(state => state?.employees?.employees);
    // console.log("employeesList 16: ", employeesList);

    // const [currentPage, setCurrentPage] = useState(1);

    // const [employeesPerPage, setEmployeesPerPage] = useState(30);
    // setEmployeesPerPage(30);


    // const lastPostIndex = currentPage * employeesPerPage;
    // const firstPostIndex = lastPostIndex - employeesPerPage;

    // let currentPost;
    // const currentPost = currentPost = employeesList.slice(firstPostIndex, lastPostIndex);

    // if(employeesList !== undefined && employeesList.length !== 0) {
      // console.log("line 29");
      // currentPost = employeesList.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // employeesList = [{test1: "test1"},{test2: "test"}];
      // currentPost = employeesList.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetEmployeesAll());
      // navigate('/employees');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("employeesList 41: ", employeesList);
    // console.log("currentPage: ", currentPage, "employeesPerPage : ", employeesPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATIO

    return(
    <>
    <main className="EmployeeListMain">
      <EmployeesListItemHeader />

      <div className="EmployeeListContainer">
        {employeesList.map((employee, id) => {
          return (
            <EmployeesListItem
              employee={employee}
              key={id}
              // totalPages={employeesList.length}
              // employeesPerPage={employeesPerPage}
            />
          );
        })}


        {/* <EmployeeListPagination
          employeesPerPage={employeesPerPage}
          totalPages={employeesList.length + 1}
          paginate={paginate}
        /> */}
      </div>
    </main>


    </>
    )
}

export default EmployeesList;
