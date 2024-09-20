//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'SSList';
import './SSList.css';

//==================PROGRAM IMPORTS=====================//


import { useSelector } from 'react-redux'


//================COMPONENT IMPORTS=====================//

import SSListSortButton from './SSListSortButton/SSListSortButton';

// import EmployeesListItemHeader from './EmployeesListItemHeader';
// import EmployeeListSort from './EmployeeListSort/EmployeeListSort';


// ========================FUNCTION DECLARATION======================== //
function EmployeesList(){

    let employeesList = useSelector(state => state?.employees?.employees);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className={`${BCIN}Main`}>

          <SSListSortButton />

          {/* <EmployeesListItemHeader /> */}
          {/* <EmployeeListSort employeesList={employeesList} /> */}

        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default EmployeesList;
