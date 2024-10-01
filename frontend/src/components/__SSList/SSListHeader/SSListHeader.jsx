//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListHeader";

import './SSListHeader.css';

//==================PROGRAM IMPORTS=====================//

import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//

import SSListHeaderItem from './SSListHeaderItem/SSListHeaderItem.jsx';
// import camelCaseToTitleCase from '../../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase.js';

//===============FUNCTION DECLARATION===================//
function SSListHeader(){

// console.log("SSListHeader keysStatus: ", keysStatus, typeof keysStatus);


let keysStatus = useSelector(state => state?.employees?.employeeKeysStatus);
if(keysStatus === undefined) return null;


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            {keysStatus.map((obj, idx) => {return(
                <SSListHeaderItem k={Object.keys(obj)[0]} v={Object.values(obj)[0]} keysStatus={keysStatus} key={idx}/>
            )})}

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListHeader;
