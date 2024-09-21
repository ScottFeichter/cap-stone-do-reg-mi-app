//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListHeader";
import './SSListHeader.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

import SSListHeaderItem from './SSListHeaderItem/SSListHeaderItem.jsx';
import camelCaseToTitleCase from '../../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase.js';

//===============FUNCTION DECLARATION===================//
function SSListHeader({keys}){

console.log("SSListHeader keys: ", keys);





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            {keys.map((k, i) => {return(
                <SSListHeaderItem k={camelCaseToTitleCase(k)} key={i}/>
            )})}

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListHeader;
