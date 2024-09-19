//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "EmployeesListMap";
import './EmployeesListMap.css';

//==================PROGRAM IMPORTS=====================//

// import { useState } from 'react';

//================COMPONENT IMPORTS=====================//

import EmployeesListItem from '../EmployeesListItem';

// import EmployeeListPagination from '../EmployeeListPagination/EmployeeListPagination.jsx';


//===============FUNCTION DECLARATION===================//
function EmployeesListMap({employeesList}){


//----------------------PAGINATION----------------------//

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


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATION






//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <div className={`${BCIN}Div`}>

                {employeesList.map((employee, id) => {
                    return (
                    <EmployeesListItem
                    employee={employee}
                    key={id}
                    // totalPages={employeesList.length}
                    // employeesPerPage={employeesPerPage}
                    />
                  );})}


                {/* <EmployeeListPagination
                employeesPerPage={employeesPerPage}
                totalPages={employeesList.length + 1}
                paginate={paginate}
                /> */}



            </div>
        </main>




    </>)
}

//===================FUNCTION EXPORT====================//
export default EmployeesListMap;
