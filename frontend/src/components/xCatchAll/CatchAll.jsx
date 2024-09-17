//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "CatchAll";
import './CatchAll.css';

//==================PROGRAM IMPORTS=====================//

import { FaHeartBroken } from "react-icons/fa";


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function CatchAll(){



//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

        <h1 className={`${BCIN}H1`}>404 Page Not Found</h1>
            <div className={`${BCIN}Div`}>
                    <h3 className={`${BCIN}H3`}>Not all those who wander are lost...</h3>

                    <FaHeartBroken id={`${BCIN}FaHeartBroken`}/>

                    <h3 className={`${BCIN}H3`}>...but it seems you may have taken a wrong turn.</h3>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default CatchAll;
