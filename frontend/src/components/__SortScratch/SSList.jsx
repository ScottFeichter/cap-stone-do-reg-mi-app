//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'SSList';
import './SSList.css';

//==================PROGRAM IMPORTS=====================//


import { useSelector } from 'react-redux'


//================COMPONENT IMPORTS=====================//


import SSListHeader from './SSListHeader/SSListHeader';


// ========================FUNCTION DECLARATION======================== //
function EmployeesList(){

    let employeesList = useSelector(state => state?.employees?.employees);
    // console.log("employeeList: ", employeesList);

    let keys = Object.keys(employeesList[0]);
    console.log("keys: ", keys);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className={`${BCIN}Main`}>

         <SSListHeader keys={keys} />


          {/* <EmployeesListItemHeader /> */}
          {/* <EmployeeListSort employeesList={employeesList} /> */}

        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default EmployeesList;
