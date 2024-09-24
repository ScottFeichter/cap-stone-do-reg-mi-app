//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListItem";
import './SSListItem.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

import SSListItemContainerEmail from './SSListItemContainerEmail/SSListItemContainerEmail.jsx';
import SSListItemContainerPhone from './SSListItemContainerPhone/SSListItemContainerPhone.jsx';
import SSListItemContainerName from './SSListItemContainerName/SSListItemContainerName.jsx';
import SSListItemContainerGeneric from './SSListItemContainerGeneric/SSListItemContainerGeneric.jsx';


//===============FUNCTION DECLARATION===================//
function SSListItem({ listEle }){



//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            {Object.entries(listEle).map(arr => {

                let k = arr[0];
                let v = arr[1];

                if(k.toLowerCase() === 'email') {
                 return <SSListItemContainerEmail k={k} v={v} key={k}/>
                } else if (k.toLowerCase() === 'phone') {
                 return <SSListItemContainerPhone k={k} v={v} key={k}/>
                } else if (k.toLowerCase() === 'name') {
                 return <SSListItemContainerName k={k} v={v} key={k}/>
                } else {
                 return <SSListItemContainerGeneric k={k} v={v} key={k}/>
                }
            })}

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListItem;
