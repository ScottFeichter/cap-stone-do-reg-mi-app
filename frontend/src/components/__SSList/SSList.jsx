//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'SSList';
import './SSList.css';

//==================PROGRAM IMPORTS=====================//


// import { useSelector } from 'react-redux'


//================COMPONENT IMPORTS=====================//


import SSListHeader from './SSListHeader/SSListHeader';
import SSListMap from './SSListMap/SSListMap';
// import camelCaseToTitleCase from '../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase';
// import { useEffect, useState } from 'react';


// ========================FUNCTION DECLARATION======================== //
function SSList(){


    // let list = useSelector(state => state?.employees?.employees);
    // let keysStatus = useSelector(state => state?.employees?.employeeKeysStatus);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className={`${BCIN}Main`}>
         <SSListHeader  />
         <SSListMap />
        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default SSList;
