//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListHeader";
import './SSListHeader.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

import SSListHeaderItem from './SSListHeaderItem/SSListHeaderItem.jsx';
import camelCaseToTitleCase from '../../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase.js';

//===============FUNCTION DECLARATION===================//
function SSListHeader({keysStatus}){







//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            {keysStatus.map((obj, i) => {return(
                <SSListHeaderItem k={camelCaseToTitleCase(Object.keys(obj)[0])} v={Object.values(obj)[0]} key={i}/>
            )})}

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListHeader;
