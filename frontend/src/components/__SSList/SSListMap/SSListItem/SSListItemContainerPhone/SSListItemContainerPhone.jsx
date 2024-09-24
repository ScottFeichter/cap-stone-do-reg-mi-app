//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListItemContainerPhone";
import './SSListItemContainerPhone.css';

//==================PROGRAM IMPORTS=====================//

import { Link } from "react-router-dom";

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function SSListItemContainerPhone({k, v}){

  if(k) "stop yelling at me linter";
  // console.log("Phone: ", "k: ", k, "v", v);


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            { v ?
              <Link
                to={`tel:${v}`}
                className={`${BCIN}P`}>
                {v}
              </Link> :
              <p className={`${BCIN}P`}>-</p>
            }

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListItemContainerPhone;
