//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListHeaderItem";
import './SSListHeaderItem.css';

//==================PROGRAM IMPORTS=====================//

// import { useState } from 'react';

//================COMPONENT IMPORTS=====================//


import SSListSortButton from './SSListSortButton/SSListSortButton.jsx';
import SSListFilterButton from './SSListFilterButton/SSListFilterButton.jsx';


//===============FUNCTION DECLARATION===================//
function SSListHeaderItem({k, v, setKeysStatus}){
    // console.log("SSListHeaderItem setKeysStatus: ", setKeysStatus);

    if(k === undefined) k = 'ID';
    if(v === undefined) v = 'off';
    // console.log("SSListHeaderItem k: ", k, "v: ", v);


    // const [kVal, setKVal] = useState(k);
    // const [vVal, setVVal] = useState(v);





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <h4 className={`${BCIN}H4`}>{k}</h4>
            <div className={`${BCIN}ButtonsDiv`}>
                <SSListSortButton k={k} v={v} setKeysStatus={setKeysStatus}/>
                <SSListFilterButton k={k} v={v} />
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListHeaderItem;
