//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'SSList';
import './SSList.css';

//==================PROGRAM IMPORTS=====================//


import { useSelector } from 'react-redux'


//================COMPONENT IMPORTS=====================//


import SSListHeader from './SSListHeader/SSListHeader';
import SSListMap from './SSListMap/SSListMap';
import camelCaseToTitleCase from '../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase';


// ========================FUNCTION DECLARATION======================== //
function SSList(){

    let list = useSelector(state => state?.employees?.employees);
    console.log("list: ", list);

    let keys = Object.keys(list[0]);
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
         <SSListMap list={list} />
        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default SSList;
