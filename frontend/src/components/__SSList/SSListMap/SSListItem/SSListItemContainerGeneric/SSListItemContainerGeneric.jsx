//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListItemContainerGeneric";
import './SSListItemContainerGeneric.css';

//==================PROGRAM IMPORTS=====================//



//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function SSListItemContainerGeneric({k, v}){

if(k) "stop yelling at me linter";
// console.log("Generic: ", "k: ", k, "v", v);


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <p className={`${BCIN}P`}> {v ? v : "-"}</p>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListItemContainerGeneric;
