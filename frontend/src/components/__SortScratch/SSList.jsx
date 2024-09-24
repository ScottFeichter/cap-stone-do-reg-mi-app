//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'SSList';
import './SSList.css';

//==================PROGRAM IMPORTS=====================//


import { useSelector } from 'react-redux'


//================COMPONENT IMPORTS=====================//


import SSListHeader from './SSListHeader/SSListHeader';
import camelCaseToTitleCase from '../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase';


// ========================FUNCTION DECLARATION======================== //
function SSList(){

    let employeesList = useSelector(state => state?.employees?.employees);
    console.log("employeeList: ", employeesList);

    let keys = Object.keys(employeesList[0]);
    console.log("keys: ", keys);

    let keysStatus = keys.map(k => {
      return {[camelCaseToTitleCase(k)]: 'off'}
    });

    keysStatus[0].ID = 'asce';
    console.log("keysStatus: ", keysStatus);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className={`${BCIN}Main`}>

         <SSListHeader keysStatus={keysStatus} />


          {/* <EmployeesListItemHeader /> */}
          {/* <EmployeeListSort employeesList={employeesList} /> */}

        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default SSList;
