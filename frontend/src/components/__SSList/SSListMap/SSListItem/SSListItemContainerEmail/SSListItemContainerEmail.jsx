//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListItemContainerEmail";
import './SSListItemContainerEmail.css';

//==================PROGRAM IMPORTS=====================//

import { Link } from "react-router-dom";

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function SSListItemContainerEmail({k, v}){

    if(k) "stop yelling at me linter";
    // console.log("Email: ", "k: ", k, "v", v);


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            {v ?
              <Link to={`mailto:${v}`} className={`${BCIN}P`}> {v}</Link> :
              <p className={`${BCIN}P`}>-</p>
            }

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListItemContainerEmail;
